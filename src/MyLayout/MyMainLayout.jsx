import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";

const MyMainLayout = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MyMainLayout;
