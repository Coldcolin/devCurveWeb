import { Outlet } from "react-router-dom";
import Header from "./Header/Header";


export default function Layout() {
  return (
    <>
      {/* all the other elements */}
      <>
        <Header/>
        <Outlet />
      </>
    </>
  );
}