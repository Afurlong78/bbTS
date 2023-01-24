import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useSignInContext } from "./context/SignInProvider";
import Pages from "./pages/Pages";
import Home from "./components/Home/Home";
import Test from "./components/Something/test";
const Login = lazy(() => import("./components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const BudgetUI = lazy(() => import("./components/BudgetUI/BudgetUI"));
const ForgotPassword = lazy(
  () => import("./components/ForgotPassword/ForgotPassword")
);

function App() {
  const { setSignedIn } = useSignInContext();

  useEffect(() => {
    const token = localStorage.getItem("bb-login-token");
    if (token) {
      setSignedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/budget" element={<BudgetUI />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
