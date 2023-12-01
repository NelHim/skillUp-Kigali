import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "./UI/Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen container">
      <div className="mx-5 sm:mx-10 xl:mx-32 pt-3 mb-5">
        <Header />
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
