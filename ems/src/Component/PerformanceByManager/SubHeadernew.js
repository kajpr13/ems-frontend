
import React, { useState } from 'react';
import './SubHeader.css';
import FeedbackGiven from './FeedbackpageGivenManager'; 
import FeedbackReceive from './FeedbackpageReceiveManager'; // Import your Request component
import NotesComponent from './Notes.jsx'; // Import your Notes component
import AchievementGiven from './AchievementGivenManager';
import AchievementReceive from './AchievementReceiveManager' // Import your Feedback component
 
export default function SubHeader() {
  const [activeButton, setActiveButton] = useState("Request");
 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Add logic to handle button clicks as needed
  };
 
  const renderComponent = () => {
    // Based on the activeButton state, render the corresponding component
    switch (activeButton) {
      case "FeedbackGiven":
        return <FeedbackGiven />;
        case "FeedbackReceive":
          return <FeedbackReceive />;
      case "Notes":
        return <NotesComponent />;
      case "AchievementGiven":
        return <AchievementGiven />;
        case "AchievementReceive":
        return <AchievementReceive />;
      default:
        return null;
    }
  };
 
  return (
<div>
<nav className="navbar header-sub">
<div className="container">
<div className="subheader-content">
{/* <button
              className={activeButton === "Feedback" ? "each-content active" : "each-content"}
              onClick={() => handleButtonClick("Feedback")}
>
               Feedback
</button> */}
<select onChange={(e) => handleButtonClick(e.target.value)}>
              {/* <option value="Feedback" selected={activeButton === "Feedback"} >Feedback</option> */}
              <option value="FeedbackGiven" selected={activeButton === "FeedbackGiven"}>Feedback_Given</option>
              <option value="FeedbackReceive" selected={activeButton === "FeedbackReceive"}>Feedback_Receive</option>
         </select>

<button
              className={activeButton === "Notes" ? "each-content active" : "each-content"}
              onClick={() => handleButtonClick("Notes")}
>
              Internal Notes
</button>
{/* <button
              className={activeButton === "Achievement" ? "each-content active" : "each-content"}
              onClick={() => handleButtonClick("Achievement")}
>
            Achievement
</button> */}
<select onChange={(e) => handleButtonClick(e.target.value)}>
              {/* <option value="Feedback" selected={activeButton === "Feedback"} >Feedback</option> */}
              <option value="AchievementGiven" selected={activeButton === "AchievementGiven"}>Achievement_Given</option>
              <option value="AchievementReceive" selected={activeButton === "AchievementReceive"}>Achievement_Receive</option>
         </select>


</div>
</div>
</nav>
<div className="component-container">
        {/* Render the component based on the activeButton state */}
        {renderComponent()}
</div>
</div>
  );
}