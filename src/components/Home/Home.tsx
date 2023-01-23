import { Link } from "react-router-dom";
import Background from "./BackgroundComponent/Background";
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

  return (
    <div className="home-container">
      <div className="home-banner" id="home-banner">
        {/* <Background /> */}
        <div className="wrapper"></div>
        <div className="banner-text">
          <h1>Try BetterBudget for a brighter financial future.</h1>
          <p> Simple.Easy.Done.</p>
        </div>
        <div className="btn-row">
          <a className="button" href="#about">
            About
          </a>
          <Link to="/register" className="button">
            Register
          </Link>
        </div>
      </div>

      <div className="home-content">
        <div id="about" className="about">
          <h2
            className={aboutHeaderVisible ? `visible` : `hidden`}
            ref={aboutHeaderRef}
          >
            About BetterBudget
          </h2>
          <p
            className={aboutTextVisible ? `visible` : `hidden`}
            ref={aboutTextRef}
          >
            We have all been there, you've been planning a trip or maybe just
            wanted to get something for your self to enjoy, but you are unsure
            if your monthly budget will allow it. If this statement sounds like
            something that you or a friend has experienced, then BetterBudget
            might just be for you. BetterBudget is a fullstack application that
            was made with the intent of helping people understand their current
            months expenses. With BetterBudget, you dont have to worry about
            exceeding your monthly budget: in real time you can store your
            monthly income and expenses for easy access at any moment, visualize
            your monthly expenses, compare your monthly expenses, and ultimately
            walk away with a greater understanding of your finances.
          </p>
        </div>

        <div className="how-it-works">
          <h2
            className={howItWorksVisible ? `visible` : `hidden`}
            ref={howItWorks}
          >
            How It All Works...
          </h2>

          <div
            className={
              howItWorksCardsVisible
                ? `visible how-it-works-cards-container`
                : `hidden`
            }
            ref={howItWorksCards}
          >
            <div className="card" style={{ border: "4px solid #e66464" }}>
              <h3>Create</h3>
              <p>
                Use the navigation tool located at the top of the page and click
                register to create an account.
              </p>
            </div>
            <div className="card" style={{ border: "4px solid #6a84da" }}>
              <h3>Confirm</h3>
              <p>
                Once your account has been registered, click the link in your
                email to confirm your account and log in.
              </p>
            </div>
            <div className="card" style={{ border: "4px solid yellow" }}>
              <h3>Budget</h3>
              <p>
                Once your logged in, simply click the budgets button located on
                the nav bar to begin budgeting.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-container">
          <div className="home-footer">
            <h3>Thanks for visiting BetterBudget</h3>
            <Link to="/forgot-password" className="link">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
