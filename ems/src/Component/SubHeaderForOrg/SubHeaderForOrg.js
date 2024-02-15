import React, { useState } from "react";
import "../SubHeader/SubHeader.css";

import OrganizationalTree from "../OrgTree/OrgTree";
import AddEmployee from "../EmployeeRegistration/EmployeeRegistrationForm";
import AddDepartment from "../AddDepartment/AddDepartmentForm"
import EditEmployee from "../EditEmployee/EditEmployeeForm"
export default function SubHeaderforOrg() {
  const [activeButton, setActiveButton] = useState("OrganizationalTree");

  const handleButtonClick = (buttonName) => {
    console.log("Button Clicked:", buttonName);
    setActiveButton(buttonName);
  };

  const renderComponent = () => {
    console.log("Rendering Component:", activeButton);
    switch (activeButton) {
      case "OrganizationalTree":
        return <OrganizationalTree />;
      case "AddEmployee":
        return <AddEmployee />;
      case "AddDepartment":
            return <AddDepartment/>;
      case"EditEmployee":
        return <EditEmployee/>
      default:
        return null;
    }
  };

  console.log("Rendered Component:", activeButton);

  return (
    <div>
      <nav className="navbar header-sub">
        <div className="container">
          <div className="subheader-content">
            <button
              className={
                activeButton === "OrganizationalTree"
                  ? "each-content active"
                  : "each-content"
              }
              onClick={() => handleButtonClick("OrganizationalTree")}
            >
              Organizational Tree
            </button>
            <button
              className={
                activeButton === "AddDepartment"
                  ? "each-content active"
                  : "each-content"
              }
              onClick={() => handleButtonClick("AddDepartment")}
            >
              Add Department
            </button>
            <button
              className={
                activeButton === "AddEmployee"
                  ? "each-content active"
                  : "each-content"
              }
              onClick={() => handleButtonClick("AddEmployee")}
            >
              Add Employee
            </button>
            <button
              className={
                activeButton === "EditEmployee"
                  ? "each-content active"
                  : "each-content"
              }
              onClick={() => handleButtonClick("EditEmployee")}
            >
              Edit Employee
            </button>
          </div>
        </div>
      </nav>
      <div className="component-container">{renderComponent()}</div>
    </div>
  );
}
