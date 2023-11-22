import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(6);
  const [numberOn, setnumberOn] = useState(false);
  const [charectorOn, setCharectorOn] = useState(false);
  const [password, setpassword] = useState("");

  // useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberOn) str += "0123456789";
    if (charectorOn) str += "!@#$%^&*-~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberOn, charectorOn]);

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberOn, charectorOn, passwordGenerator]);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-neutral-900 ">
        {
          <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-800">
            <h1 className=" text-white text-center "> Password Generator </h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyPassToClip}
                className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              >
                Copy
              </button>
            </div>
            <div className="flex text-sm gap-x-2">
              <div className="flex iteams-center gap-x-1">
                <input
                  type="range"
                  min={6}
                  max={30}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setlength(e.target.value);
                  }}
                />
                <label> Length : {length} </label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberOn}
                  id="numberInput"
                  onChange={() => {
                    setnumberOn((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={charectorOn}
                  id="characterInput"
                  onChange={() => {
                    setCharectorOn((prev) => !prev);
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default App;
