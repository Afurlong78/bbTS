import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import "./Styles.scss";

function Pages() {
  return (
    <div className="outer-page">
      <Nav />
      <div className="inner-pages">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Pages;
