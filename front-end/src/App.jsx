import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import "./App.css";
import Home from "./Components/Common/Home";
import Login from "./Components/Common/Login";
import Register from "./Components/Common/Register";
import Dashboard from "./Components/Common/Dashboard";
import CourseContent from "./Components/User/Student/CourseContent";

export const UserContext = createContext();

function App() {
  const date = new Date().getFullYear();
  const [userData, setUserData] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const getData = async () => {
    try {
      const user = await JSON.parse(localStorage.getItem("user"));
      if (user && user !== undefined) {
        setUserData(user);
        setUserLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, userLoggedIn }}>
      <div className="App">
        <Router>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/about" element={<About />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
              {userLoggedIn ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/courseSection/:courseId/:courseTitle" element={<CourseContent />} />


                </>
              ) : (
                <Route path="/login" element={<Login />} />
              )}
            </Routes>
          </div>
          <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
              © {date} Copyright: Study App
            </div>
          </footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;