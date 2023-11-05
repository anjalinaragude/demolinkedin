import React, { useState } from "react";
// import PopUP from "./PopUP";
import Popup from "./Skill/Popup/Popup";
import '../Component/Experience.css'

const Experience = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editPosition, setEditPosition] = useState("");
  const [editCompany, setEditCompany] = useState("");
  const [editYears, setEditYears] = useState("");

  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [years, setYears] = useState("");
  const [click, setClick] = useState([]);

  function handleEdit(index, item) {
    setEditIndex(index);
    setEditPosition(item.position);
    setEditCompany(item.company);
    setEditYears(item.years);
    setEditPopup(true);
  }

  function handleUpdate() {
    const updatedData = [...click];
    updatedData[editIndex] = {
      position: editPosition,
      company: editCompany,
      years: editYears
    };
    setClick(updatedData);
    setEditPopup(false);
  }

  function handleCancel() {
    setEditPopup(false);
  }

  function handleClick() {
    setClick([...click, { position, company, years }]);
    setPosition("");
    setCompany("");
    setYears("");
    setButtonPopup(false);
  }

  function handleEditCancel(index) {
    const updatedData = click.filter((item, i) => i !== index);
    setClick(updatedData);
  }

  return (
    <div className="">
      <main>
        <div className="heading">
          <h1>Experience</h1>
          <br />
          <br />
          <button onClick={() => setButtonPopup(true)}>Add</button>
          <button onClick={() => setEditPopup(true)}>Edit</button>
        </div>
        {buttonPopup && (
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="text-black">

            
              <h3>Experience Form</h3>
              <label>Position:</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <br />
              <label>Company:</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <br />
              <label>Years:</label>
              <input
                type="number"
                value={years}
                onChange={(e) => {
                  // Allow only numeric input
                  const input = e.target.value;
                  if (/^\d{0,4}$/.test(input)) {
                    setYears(input);
                  }
                }}
                maxLength={4}
                placeholder="YYYY"
              />
              <br />
              <button onClick={handleClick}>Save</button>
            </div>
          </Popup>
        )}
        {editPopup && (
          <div>
            <Popup trigger={editPopup} setTrigger={setEditPopup}>
              <div className="form text-black">
                <h3>Edit Form</h3>
                <label>Position:</label>
                <input
                  type="text"
                  value={editPosition}
                  onChange={(e) => setEditPosition(e.target.value)}
                />
                <br />
                <label>Company:</label>
                <input
                  type="text"
                  value={editCompany}
                  onChange={(e) => setEditCompany(e.target.value)}
                />
                <br />
                <label>Years:</label>
                <input
                  type="number"
                  value={editYears}
                  onChange={(e) => {
                    // Allow only numeric input
                    const input = e.target.value;
                    if (/^\d{0,4}$/.test(input)) {
                      setEditYears(input);
                    }
                  }}
                  maxLength={4}
                  placeholder="YYYY"
                />
                <br />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </Popup>
          </div>
        )}
      </main>
      <div>
        <table>
          <thead>
            <tr>
              <th>Position:</th>
              <th>Company:</th>
              <th>Years:</th>
              <th>Edit:</th>
            </tr>
          </thead>
          <tbody>
            {click.map((item, index) => (
              <tr key={index}>
                <td>{item.position}</td>
                <td>{item.company}</td>
                <td>{item.years}</td>
                <td>
                  <button onClick={() => handleEdit(index, item)}>
                    edit
                  </button>
                  <button onClick={() => handleCancel(index, item)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
