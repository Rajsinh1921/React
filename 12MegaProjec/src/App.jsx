import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { login } from "./Store/authSlice";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch;

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <center className="">
      {loading && <LoadingSpinner />}

      <div className="min-h-screen flex flex-wrap contents-between bg-gray-500">
        <div className="w-full block">
          <Header />
          <Footer />
        </div>
      </div>
    </center>
  );
}

export default App;
