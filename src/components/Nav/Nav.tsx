import { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Nav-Styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLogin } from "../../hooks/useLogin";
import { useSignInContext } from "../../context/SignInProvider";
const logoIcon = require("../../assets/Icons/Scales.png");

function Nav() {
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const { logoutHandler } = useLogin();
  const { signedIn, setSignedIn } = useSignInContext();
  const navigate = useNavigate();

  const mobileLogoutHandler = () => {
    localStorage.removeItem("bb-login-token");
    navigate("/login");
    setSignedIn(false);
    setOpenMobile(false);
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <Link to="/">
          <img src={logoIcon} className="logo" />
        </Link>
        <p>
          <strong>Better</strong>Budget
        </p>
      </div>

      <div className="links-container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/budget" className="link">
          Budget
        </Link>
        <Link to="/register" className="link">
          Register
        </Link>
        {signedIn ? (
          <button className="link" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="link">
            Login
          </Link>
        )}
      </div>

      <Offcanvas show={openMobile} onHide={setOpenMobile} placement="end">
        <button onClick={() => setOpenMobile(false)} className="close-mobile">
          X
        </button>
        <div className="offcanvas-body">
          <Link to="/" className="link" onClick={() => setOpenMobile(false)}>
            Home
          </Link>
          <Link
            to="/budget"
            className="link"
            onClick={() => setOpenMobile(false)}
          >
            Budget
          </Link>
          <Link
            to="/register"
            className="link"
            onClick={() => setOpenMobile(false)}
          >
            Register
          </Link>

          {signedIn ? (
            <button className="link" onClick={mobileLogoutHandler}>
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="link"
              onClick={() => setOpenMobile(false)}
            >
              Login
            </Link>
          )}
        </div>
      </Offcanvas>

      <button className="mobile-button" onClick={() => setOpenMobile(true)}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ height: "30px", width: "30px" }}
        />
      </button>
    </nav>
  );
}

export default Nav;
