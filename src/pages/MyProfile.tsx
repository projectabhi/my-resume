import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import backgroundImage from "../assets/background.png";

const MyProfile = () => {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <SideMenu></SideMenu>
      <div
        className="w-full h-full flex flex-col justify-between"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header></Header>
        <Container>
          <Outlet />
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default MyProfile;
