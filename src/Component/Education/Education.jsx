import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, editEducation, deleteEducation } from "../../store/slices/educationSlice";

import Popup from "../Skill/Popup/Popup";


const Education = () => {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.educations.list);

  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editEducation, setEditEducation] = useState({});

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [grade, setGrade] = useState("");

  function handleEdit(education, index) {
    setEditIndex(index);
    setEditEducation(education);
    setEditPopup(true);
  }

  function handleUpdate() {
    dispatch(editEducation({ index: editIndex, education: editEducation }));
    setEditIndex(null);
    setEditEducation({});
    setEditPopup(false);
  }

  function handleCancel() {
    setEditPopup(false);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(addEducation({ school, degree, fieldOfStudy, graduationYear, grade }));
    setButtonPopup(false);
    setSchool("");
    setDegree("");
    setFieldOfStudy("");
    setGraduationYear("");
    setGrade("");
  }

  return (
    <div className="">
      <main>
        <div className="heading">
          <h1> Education</h1>
          <br />
          <br />
          <button className="skillbtn" onClick={() => setButtonPopup(true)}>
            Add
          </button>
        </div>
        {buttonPopup && (
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="form">
              <form className="education-form" onSubmit={handleClick}>
                <h2>Add Education</h2>
                <div className="input-group">
                  <label htmlFor="school">School/University</label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    placeholder="Enter the name of your school or university"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="degree">Degree</label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    placeholder="Enter your degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="fieldOfStudy">Field of Study</label>
                  <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    placeholder="Enter your field of study"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="graduationYear">Graduation Year</label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    placeholder="Enter your graduation year"
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="grade">Grade</label>
                  <select
                    id="grade"
                    name="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="">Select Grade</option>
                    {/* Your grade options here */}
                  </select>
                </div>
                <button type="submit">Add Education</button>
              </form>
            </div>
          </Popup>
        )}

        {editPopup && (
          <Popup trigger={editPopup} setTrigger={setEditPopup}>
            <div className="form">
              <h3>Edit Education</h3>
              {/* Form fields to edit education details */}
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </Popup>
        )}
      </main>

      <div>
        {educations.map((education, index) => {
          return (
            <div key={index} className="map">
              <div>
                
                
              <div>{education.school}</div>
                  <div>{education.degree}</div>
                  <div>{education.fieldOfStudy}</div>
                  <div>{education.graduationYear}</div>
                  <div>{education.grade}</div>
                  
                
                </div>
              <div>
                <button onClick={() => handleEdit(education, index)} className="btn">
                  Edit
                </button>
                <button onClick={() => dispatch(deleteEducation(index))} className="btn">
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
