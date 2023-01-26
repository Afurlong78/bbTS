import { Suspense } from "react";
import Loader from "../components/Loader/Loader";
import { Outlet } from "react-router-dom";
import { useSignInContext } from "../context/SignInProvider";
import Nav from "../components/Nav/Nav";
import "./Styles.scss";

function Pages() {
  const { theme } = useSignInContext();

  return (
    <div
      className={theme ? `outer-page dark` : `outer-page light`}
    >
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
