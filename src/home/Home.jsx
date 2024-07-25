import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBook from "../components/FreeBook";
import Navabar from "../components/Navabar";

const home = () => {
  return (
    <>
      <Navabar></Navabar>
      <Banner></Banner>
      <FreeBook></FreeBook>
      <Footer></Footer>
    </>
  );
};

export default home;
