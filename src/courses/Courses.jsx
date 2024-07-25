import Navabar from "../components/Navabar";
import Footer from "../components/Footer";
import Course from "../components/Course";

const Courses = () => {
  return (
    <>
      <Navabar></Navabar>
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
