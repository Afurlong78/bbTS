import { useState } from "react";
import { useSignInContext } from "../../context/SignInProvider";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useExpenseContext } from "../../context/ExpenseProvider";
import axios from "axios";
import "./DropDown-Styles.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function GetBudgetDropDown() {
  const { setBudget, setExpenses } = useBudgetContext();
  const { setSpent } = useExpenseContext();
  const { theme } = useSignInContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [month, setMonth] = useState<string>("January");

  const token = localStorage.getItem("bb-login-token");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function getData(month: string) {
    setMonth(month);

    axios
      .get("http://localhost:5000/api/posts/budgets/getMonth", {
        headers: {
          ["Authorization"]: token,
          ["Month"]: month,
        },
      })
      .then((res) => {
        // console.log(res);
        const ex = [...res.data.data.expenses];
        const sum = ex.reduce((acc, curr) => acc + curr.value, 0);

        setSpent(sum);
        setBudget({ value: res.data.data.budget, month: res.data.data.month });
        setExpenses(res.data.data.expenses);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="dropdown-component-container">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          caret
          className={
            theme ? "dd-dark-primary-button" : "dd-light-primary-button"
          }
        >
          {month}
        </DropdownToggle>
        <DropdownMenu className="dropdown-view">
          <DropdownItem header>Set your month...</DropdownItem>
          <DropdownItem onClick={() => getData("January")}>
            January
          </DropdownItem>
          <DropdownItem onClick={() => getData("February")}>
            February
          </DropdownItem>
          <DropdownItem onClick={() => getData("March")}>March</DropdownItem>
          <DropdownItem onClick={() => getData("April")}>April</DropdownItem>
          <DropdownItem onClick={() => getData("May")}>May</DropdownItem>
          <DropdownItem onClick={() => getData("June")}>June</DropdownItem>
          <DropdownItem onClick={() => getData("July")}>July</DropdownItem>
          <DropdownItem onClick={() => getData("August")}>August</DropdownItem>
          <DropdownItem onClick={() => getData("September")}>
            September
          </DropdownItem>
          <DropdownItem onClick={() => getData("October")}>
            October
          </DropdownItem>
          <DropdownItem onClick={() => getData("November")}>
            November
          </DropdownItem>
          <DropdownItem onClick={() => getData("December")}>
            Decemeber
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default GetBudgetDropDown;
