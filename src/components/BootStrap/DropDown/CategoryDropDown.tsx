import { useState } from "react";
import { useSignInContext } from "../../../context/SignInProvider";
import { CategoryDropDownProps } from "./Type";
import "./DropDown-Styles.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function CategoryDropDown({ category, setCategory }: CategoryDropDownProps) {
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
          {category}
        </DropdownToggle>
        <DropdownMenu className="dropdown-view">
          <DropdownItem header>Set your category...</DropdownItem>
          <DropdownItem onClick={() => setCategory("Entertainment")}>
            Entertainment
          </DropdownItem>
          <DropdownItem onClick={() => setCategory("Groceries")}>
            Groceries
          </DropdownItem>
          <DropdownItem onClick={() => setCategory("Bills")}>
            Bills
          </DropdownItem>
          <DropdownItem onClick={() => setCategory("Other")}>
            Other
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default CategoryDropDown;
