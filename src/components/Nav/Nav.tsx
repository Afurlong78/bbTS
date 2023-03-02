import "./Nav-Styles.scss";
import "../../global/Styles.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faCoins,
  faAddressCard,
  faRightToBracket,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useLogin } from "../../hooks/useLogin";
import { useSignInContext } from "../../context/SignInProvider";
const logoIcon = require("../../assets/Icons/Scales.png");

function Nav() {
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const { logoutHandler } = useLogin();
  const { signedIn, setSignedIn, theme, setTheme } = useSignInContext();
  const navigate = useNavigate();

  const mobileLogoutHandler = () => {
    localStorage.removeItem("bb-login-token");
    navigate("/login");
    setSignedIn(false);
    setOpenMobile(false);
  };

  return (
    <nav className={theme ? `nav dark` : `nav light`}>
      <div className="logo-container">
        <Link to="/">
          <img src={logoIcon} className="logo" />
        </Link>
        <p className={theme ? `primary-text` : `fourth-text`}>
          <strong>Better</strong>Budget
        </p>
      </div>

      <div className="links-container">
        <button className="link-wrapper" onClick={() => setTheme(!theme)}>
          {theme ? (
            <div
              className={
                theme ? `link dark-primary-button` : `link light-primary-button`
              }
            >
              Light{" "}
              <FontAwesomeIcon
                icon={faSun}
                style={{ height: "50%", width: "50%" }}
              />{" "}
            </div>
          ) : (
            <div
              className={
                theme ? `link dark-primary-button` : `link light-primary-button`
              }
            >
              Dark{" "}
              <FontAwesomeIcon
                icon={faMoon}
                style={{ height: "50%", width: "50%" }}
              />{" "}
            </div>
          )}
        </button>

        <Link
          to="/"
          className={
            theme ? `link dark-primary-button` : `link light-primary-button`
          }
        >
          Home
          <FontAwesomeIcon
            icon={faHouse}
            style={{ height: "50%", width: "50%" }}
          />
        </Link>
        <Link
          to="/budget"
          className={
            theme ? `link dark-primary-button` : `link light-primary-button`
          }
        >
          Budget
          <FontAwesomeIcon
            icon={faCoins}
            style={{ height: "50%", width: "50%" }}
          />
        </Link>

        {signedIn ? null : (
          <Link
            to="/register"
            className={
              theme ? `link dark-primary-button` : `link light-primary-button`
            }
          >
            Register
            <FontAwesomeIcon
              icon={faAddressCard}
              style={{ height: "50%", width: "50%" }}
            />
          </Link>
        )}

        {signedIn ? (
          <button
            className={theme ? `logout-btn-dark ` : `logout-btn-light `}
            onClick={logoutHandler}
          >
            Logout
            <FontAwesomeIcon
              icon={faRightToBracket}
              style={{ height: "50%", width: "50%" }}
            />
          </button>
        ) : (
          <Link
            to="/login"
            className={
              theme ? `link dark-primary-button` : `link light-primary-button`
            }
          >
            Login
            <FontAwesomeIcon
              icon={faRightToBracket}
              style={{ height: "50%", width: "50%" }}
            />
          </Link>
        )}
      </div>

      <Offcanvas
        show={openMobile}
        onHide={setOpenMobile}
        placement="end"
        className={theme ? `dark` : `light`}
      >
        <button
          onClick={() => setOpenMobile(false)}
          className={theme ? `close-mobile cdm` : `close-mobile clm`}
        >
          X
        </button>
        <div className="offcanvas-body">
          <Link
            to="/"
            className={
              theme
                ? "dark-primary-mobile-button"
                : "light-primary-mobile-button"
            }
            onClick={() => setOpenMobile(false)}
          >
            Home
            <FontAwesomeIcon
              icon={faHouse}
              style={{ height: "50%", width: "50%" }}
            />
          </Link>
          <Link
            to="/budget"
            className={
              theme
                ? "dark-primary-mobile-button"
                : "light-primary-mobile-button"
            }
            onClick={() => setOpenMobile(false)}
          >
            Budget
            <FontAwesomeIcon
              icon={faCoins}
              style={{ height: "50%", width: "50%" }}
            />
          </Link>

          {signedIn ? null : (
            <Link
              to="/register"
              className={
                theme
                  ? "dark-primary-mobile-button"
                  : "light-primary-mobile-button"
              }
              onClick={() => setOpenMobile(false)}
            >
              Register
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ height: "50%", width: "50%" }}
              />
            </Link>
          )}

          {signedIn ? (
            <button
              className={
                theme
                  ? "dark-primary-mobile-button"
                  : "light-primary-mobile-button"
              }
              onClick={mobileLogoutHandler}
            >
              Logout
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ height: "50%", width: "50%" }}
              />
            </button>
          ) : (
            <Link
              to="/login"
              className={
                theme
                  ? "dark-primary-mobile-button"
                  : "light-primary-mobile-button"
              }
              onClick={() => setOpenMobile(false)}
            >
              Login
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ height: "50%", width: "50%" }}
              />
            </Link>
          )}
        </div>
      </Offcanvas>

      <div className="mobile-wrapper">
        {theme ? (
          <button
            className={theme ? `mobile-button-dark` : `mobile-button-light`}
            onClick={() => setTheme(false)}
          >
            <FontAwesomeIcon
              icon={faSun}
              style={{ height: "30px", width: "30px" }}
            />
          </button>
        ) : (
          <button
            className={theme ? `mobile-button-dark` : `mobile-button-light`}
            onClick={() => setTheme(true)}
          >
            <FontAwesomeIcon
              icon={faMoon}
              style={{ height: "30px", width: "30px" }}
            />
          </button>
        )}

        <button
          className={theme ? `mobile-button-dark` : `mobile-button-light`}
          onClick={() => setOpenMobile(true)}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ height: "30px", width: "30px" }}
          />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
