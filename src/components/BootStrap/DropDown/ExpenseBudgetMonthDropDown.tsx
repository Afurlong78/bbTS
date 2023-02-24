import { useState } from "react";
import { DropDownType } from "./Type";
import { useSignInContext } from "../../../context/SignInProvider";
// import "../../global/Styles.scss";
import "./DropDown-Styles.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function ExpenseBudgetMonthDropDown({ month, setMonth }: DropDownType) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme } = useSignInContext();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
          <DropdownItem onClick={() => setMonth("January")}>
            January
          </DropdownItem>
          <DropdownItem onClick={() => setMonth("February")}>
            February
          </DropdownItem>
          <DropdownItem onClick={() => setMonth("March")}>March</DropdownItem>
          <DropdownItem onClick={() => setMonth("April")}>April</DropdownItem>
          <DropdownItem onClick={() => setMonth("May")}>May</DropdownItem>
          <DropdownItem onClick={() => setMonth("June")}>June</DropdownItem>
          <DropdownItem onClick={() => setMonth("July")}>July</DropdownItem>
          <DropdownItem onClick={() => setMonth("August")}>August</DropdownItem>
          <DropdownItem onClick={() => setMonth("September")}>
            September
          </DropdownItem>
          <DropdownItem onClick={() => setMonth("October")}>
            October
          </DropdownItem>
          <DropdownItem onClick={() => setMonth("November")}>
            November
          </DropdownItem>
          <DropdownItem onClick={() => setMonth("December")}>
            Decemeber
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default ExpenseBudgetMonthDropDown;
