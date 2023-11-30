import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "./UI/Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mx-8 pt-3 mb-5">
        <Header />
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
