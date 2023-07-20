import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Home/Footer/Footer";


export default function Layout() {
  return (
    <>
      {/* all the other elements */}
      <>
        <Header/>
        <Outlet />
        <Footer/>
      </>
    </>
  );
}