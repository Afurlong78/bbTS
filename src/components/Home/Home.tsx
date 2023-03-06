import { Link } from "react-router-dom";
import Background from "./BackgroundComponent/Background";
import { useSignInContext } from "../../context/SignInProvider";
import { useInView } from "react-intersection-observer";
import "./Home-Styles.scss";
import "../../global/Styles.scss";

function Home() {
  const { ref: aboutHeaderRef, inView: aboutHeaderVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: aboutTextRef, inView: aboutTextVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: howItWorks, inView: howItWorksVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const { ref: howItWorksCards, inView: howItWorksCardsVisible } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const { theme } = useSignInContext();

  return (
    <div className="home-container">
      <div className="home-banner" id="home-banner">
        <div className="blurred-banner">
          <div className="color-wave" />
          <Background />
        </div>

        <div className="banner-text">
          <h1>Try BetterBudget for a brighter financial future.</h1>
          <div>
            <p> Simple.</p>
            <p>Easy.</p>
            <p>Done.</p>
          </div>
        </div>
        <div className="btn-row">
          <a
            href="#about"
            className={theme ? "button light-text" : "button fourth-text"}
          >
            About
          </a>
          <Link
            to="/register"
            className={theme ? "button light-text " : "button fourth-text"}
          >
            Register
          </Link>
        </div>
      </div>

      <div className={theme ? "dark-gradient" : "light-gradient"}>
        <div id="about" className="about">
          <div
            className={aboutHeaderVisible ? `visible` : `hidden`}
            ref={aboutHeaderRef}
          >
            <h2 className={theme ? "dark-text" : "light-text"}>
              About{" "}
              <strong
                style={
                  theme
                    ? { color: "white", marginLeft: "7px" }
                    : { color: "#39436e", marginLeft: "7px" }
                }
              >
                BetterBudget
              </strong>
            </h2>
          </div>

          <div
            className={aboutTextVisible ? `visible` : `hidden`}
            ref={aboutTextRef}
          >
            <p className={theme ? "dark-text" : "light-text"}>
              We have all been there, you've been planning a trip or maybe just
              wanted to get something for your self to enjoy, but you are unsure
              if your monthly budget will allow it. If this statement sounds
              like something that you or a friend has experienced, then
              BetterBudget might just be for you. BetterBudget is an application
              that was made with the intent of helping people understand their
              current months expenses. With BetterBudget, you dont have to worry
              about exceeding your monthly budget: in real time you can store
              your monthly income and expenses for easy access at any moment,
              visualize your monthly expenses, compare your monthly expenses,
              and ultimately walk away with a greater understanding of your
              finances.
            </p>
          </div>
        </div>

        <div className="how-it-works">
          <div
            className={howItWorksVisible ? `visible` : `hidden`}
            ref={howItWorks}
          >
            <h2 className={theme ? "dark-text" : "light-text"}>
              How It All Works...
            </h2>
          </div>

          <div
            className={
              howItWorksCardsVisible
                ? `visible how-it-works-cards-container`
                : `hidden`
            }
            ref={howItWorksCards}
          >
            <div
              className={
                theme ? "card dark-background" : "card light-background"
              }
              style={{ border: "4px solid #e66464" }}
            >
              <h3 className={theme ? "dark-text" : "light-text"}>Create</h3>
              <p className={theme ? "dark-text" : "light-text"}>
                Use the navigation tool located at the top of the page and click
                register to create an account.
              </p>
            </div>
            <div
              className={
                theme ? "card dark-background" : "card light-background"
              }
              style={{ border: "4px solid #6a84da" }}
            >
              <h3 className={theme ? "dark-text" : "light-text"}>Confirm</h3>
              <p className={theme ? "dark-text" : "light-text"}>
                Once your account has been registered, click the link in your
                email to confirm your account and log in.
              </p>
            </div>
            <div
              className={
                theme ? "card dark-background" : "card light-background"
              }
              style={{ border: "4px solid yellow" }}
            >
              <h3 className={theme ? "dark-text" : "light-text"}>Budget</h3>
              <p className={theme ? "dark-text" : "light-text"}>
                Once your logged in, simply click the budgets button located on
                the nav bar to begin budgeting.
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            theme
              ? "footer-container dark-background"
              : "footer-container light-background"
          }
        >
          <div className="home-footer">
            <h3 className={theme ? "dark-text" : "light-text"}>
              Thanks for visiting BetterBudget!
            </h3>
            <Link
              to="/forgot-password"
              className={
                theme
                  ? "link dark-primary-button"
                  : " link light-primary-button"
              }
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
