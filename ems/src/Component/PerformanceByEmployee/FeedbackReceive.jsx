// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { renderToString } from 'react-dom/server';
// import { RiSearchLine } from "react-icons/ri";
// import "./Feedback.css";

// function Feedback() {
//   const [feedbackTo, setFeedbackTo] = useState("");
//   const [note, setNote] = useState("");

//   const handleFeedbackToChange = (event) => {
//     setFeedbackTo(event.target.value);
//   };

//   const handleNoteChange = (event) => {
//     setNote(event.target.value);
//   };

//   const saveFeedbackData = () => {
//     // Replace this with your actual API call or database operation
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Implement your logic to save feedback data here
//         resolve();
//       }, 2000);
//     });
//   };

//   const renderFeedbackForm = () => {
//     return (
//       <div>
//         <div className="feedback-fields">
//           <h3>Request feedback from:</h3>
//           <input
//             type="text"
//             value={feedbackTo}
//             onChange={handleFeedbackToChange}
//           />
//           <h3>Add a note:</h3>
//           <input value={note} onChange={handleNoteChange} />
//         </div>
//       </div>
//     );
//   };

//   const handleOpenFeedbackPopup = () => {
//     const htmlContent = renderToString(renderFeedbackForm());

//     Swal.fire({
//       title: 'Request Feedback',
//       html: htmlContent,
//       showCancelButton: true,
//       confirmButtonText: 'Save',
//       cancelButtonText: 'Cancel',
//       showLoaderOnConfirm: true,
//       preConfirm: async () => {
//         try {
//           await saveFeedbackData();
//         } catch (error) {
//           Swal.showValidationMessage(`Error: ${error.message}`);
//         }
//       },
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: 'Request Sended!',
//           text: 'Your feedback request has been successfully send.',
//           icon: 'success',
//           timer: 2000,
//           showConfirmButton: false
//         });
//       }
//     });
//   };

//   return (
//     <div className="feedback-container">
//       <h1>Request Feedback</h1>
//       <p>Request feedback from your managers  </p>
//       <button className="request-feedback" onClick={handleOpenFeedbackPopup}>
//         Request feedback
//       </button>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

import "./FeedbackReceive.css";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import Swal from "sweetalert2";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';



const Feedback = () => {
  const [Feedback, setFeedbacks] = useState([
    // { id: 1, name: "Tosca Certificate", type:'PDF', size:"30" },
    // { id: 2, name: "uploadpage",},
    {id: 1, task: "Tosca",feedback: "dfdfd",given: 'A' ,rating:"2" },
    {id: 2, task: "Tosca",feedback: "dfdfd",given: 'A' ,rating: "5"  },
    {id: 3, task: "Tosca",feedback: "dfdfd",given: 'A' ,rating: "4"  },
  ]);
  const [feedbackData, setFeedbackData] = useState([]);
useEffect(() => {
    // Replace 'your-api-url' with the actual URL of your Spring Boot application
    axios.get("https://ems-backend-production-9474.up.railway.app/findFeedbackByEmpId/4")
        .then(response => {
            setFeedbackData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching feedback data:", error);

        });
}, []);
  


  // const rating;
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    const renderStars = () => {
      const stars = [];
  
      for (let i = 1; i <= fullStars; i++) {
        stars.push(<span key={i}>&#9733;</span>); // Unicode character for a filled star
      }
  
      if (hasHalfStar) {
        stars.push(<span key="half">&#9734;&#9733;</span>); // Unicode characters for a half-filled star
      }
  
      return stars;
    };
  
    return (
      <div>
        {renderStars()}
      </div>
    );
  };
 
 
  
 

 
 
  return (
    <div className="Feedback-container">
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="tableheader">S.No</th>
              
              <th className="tableheader">Task</th>
              <th className="tableheader">Feedback</th>
              <th className="tableheader">Given By</th>
              <th className="tableheader">Rating</th>
             
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
               
                <td>{feedback.task}</td>
                <td>{feedback.feedback}</td>
                <td>{feedback.given}</td>
                <td>
                 {/* // Set your desired rating here */}
                 <div>
    {/* <h1>Product Rating:</h1> */}
    <StarRating rating={feedback.rating} />
  </div>
</td>
            <td>
                  {/* <button
                    className="completedButton"
                    onClick={() => handleCompletedClick(Feedback.id)}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Feedback;