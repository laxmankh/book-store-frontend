// import Contact from "./components/Contact";
import Course from "./components/Course";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ContactData from "./courses/ContactData";
import Aboutdata from "./courses/Aboutdata";
// import { useAuth } from "./context/AuthProvider";
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to={"/signup"} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Conact" element={<ContactData />} />
          <Route path="/About" element={<Aboutdata />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
