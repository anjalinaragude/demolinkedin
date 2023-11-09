// Experience.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Component/Experience.css"

import {
  setPosition,
  setCompany,
  setLocation,
  setStartDate,
  setEndDate,
  addExperience,
  editExperience,
  deleteExperience,
  resetFields,
  setEditIndex,
  setEditPopup,
  setButtonPopup
} from "../store/slices/experienceSlice";
import { GrAdd } from "react-icons/gr";

const Experience = () => {
  const dispatch = useDispatch();
  const {
    position,
    company,
    location,
    startDate,
    endDate,
    experiences,
    editIndex,
    editPopup,
    buttonPopup
  } = useSelector((state) => state.experience);

  const handleClick = () => {
    if (editPopup) {
      dispatch(
        editExperience({
          index: editIndex,
          data: {
            position,
            company,
            location,
            startDate,
            endDate
          }
        })
      );
      dispatch(setEditPopup(false));
    } else if (buttonPopup) {
      dispatch(
        addExperience({
          position,
          company,
          location,
          startDate,
          endDate
        })
      );
      dispatch(setButtonPopup(false));
    }
    dispatch(resetFields());
  };

  const handleEdit = (index, item) => {
    dispatch(setPosition(item.position));
    dispatch(setCompany(item.company));
    dispatch(setLocation(item.location));
    dispatch(setStartDate(item.startDate));
    dispatch(setEndDate(item.endDate));
    dispatch(setEditIndex(index));
    dispatch(setEditPopup(true));
  };

  const handleDelete = (index) => {
    dispatch(deleteExperience(index));
  };

  return (
    <div className="">
      <main>
        <div className="heading d-flex justify-content-between">
          <h1>Experience</h1>
          
          <div>
          <button onClick={() => dispatch(setButtonPopup(true))} className="border-white rounded-pill experienbtn border-0 bg-white"><GrAdd/></button></div>
          {/* <button onClick={() => dispatch(setEditPopup(true))}>Edit</button> */}
        </div>

        {buttonPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h3>Experience Form</h3>
              <label className="expelabel">Title:</label>
              <input
                type="text"
                value={position}
                placeholder="Ex: Retail Sales Manager"
                onChange={(e) => dispatch(setPosition(e.target.value))}
              />
              <br />
              <label className="expelabel">Company name:</label>
              <input
                type="text"
                value={company}
                placeholder="Ex: Techsophy"
                onChange={(e) => dispatch(setCompany(e.target.value))}
              />
              <br />
              <label className="expelabel">Location:</label>
              <input
                type="text"
                value={location}
                placeholder="Ex: Pune"
                onChange={(e) => dispatch(setLocation(e.target.value))}
              />
              <br />
              <br />
              <div style={{ display: "flex",justifyContent:"space-around" }}>
                <div>
                <label className="expelabel">Start Date:</label>nR
                <input
                  type="date"
                  value={startDate}
                  placeholder=""
                  onChange={(e) => dispatch(setStartDate(e.target.value))}
                  style={{marginRight:"3"}}
                />
                </div>
                <div>
                <label className="expelabel">End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  placeholder=""
                  onChange={(e) => dispatch(setEndDate(e.target.value))}
                />
                </div>
              </div>
              <br />
              {/* Other input fields for location, start date, and end date */}
              <div className="d-flex justify-content-between">
              <button onClick={handleClick} className="">Save</button>
              <button onClick={() => dispatch(setButtonPopup(false))}>
                Close
              </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup component for Edit */}
        {editPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h3>Edit Form</h3>
              <label className="expelabel">Position:</label>
              <input
                type="text"
                value={position}
                onChange={(e) => dispatch(setPosition(e.target.value))}
              />
              <br />
              <label className="expelabel">Company:</label>
              <input
                type="text"
                value={company}
                onChange={(e) => dispatch(setCompany(e.target.value))}
              />
              <br />
              <label className="expelabel">Location:</label>
              <input
                type="text"
                value={location}
                placeholder="Ex: Pune"
                onChange={(e) => dispatch(setLocation(e.target.value))}
              />
              <label className="expelabel">Start Date:</label>
              <input
                type="date"
                value={startDate}
                placeholder=""
                onChange={(e) => dispatch(setStartDate(e.target.value))}
              />
              <label className="expelabel">End Date:</label>
              <input
                type="date"
                value={endDate}
                placeholder=""
                onChange={(e) => dispatch(setEndDate(e.target.value))}
              />
              {/* Other input fields for location, start date, and end date */}
              <button onClick={handleClick}>Update</button>
              <button onClick={() => dispatch(setEditPopup(false))}>
                Cancel
              </button>
            </div>
          </div>
        )}

        <div>
        <table class="table">
  <thead>
    
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
      
  <tbody>

  {experiences.map((item, index) => (
                <tr key={index}>
                  
                  <td>{item.position}</td>
                  <td>{item.company}</td>
                  <td>{item.location}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <button onClick={() => handleEdit(index, item)} className="me-4 border-light bg-white">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)} className="me-4 border-light bg-white">Delete</button>
                  </td>
                </tr>
              ))}

</tbody>

   
</table>

          {/* <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Company</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((item, index) => (
                <tr key={index}>
                  <td>{item.position}</td>
                  <td>{item.company}</td>
                  <td>{item.location}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <button onClick={() => handleEdit(index, item)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </main>
    </div>
  );
};

export default Experience;
