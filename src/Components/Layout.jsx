import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Home/Footer/Footer";
import { useEffect } from "react";


export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
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