import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, editSkill, deleteSkill } from "../../store/slices/skillSlice";
import Popup from "./Popup/Popup";


const Skill = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.list);

  const [buttonPopup, setButtonPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState("");
  const [name, setName] = useState("");

  function handleEdit(item, index) {
    setEditIndex(index);
    setEditItem(item);
    setEditPopup(true);
  }

  function handleUpdate() {
    dispatch(editSkill({ index: editIndex, skill: editItem }));
    setEditIndex(null);
    setEditItem("");
    setEditPopup(false);
  }

  function handleCancel() {
    setEditPopup(false);
  }

  function handleClick() {
    dispatch(addSkill(name));
    setName("");
    setButtonPopup(false);
  }

  function handleEditCancel(index) {
    dispatch(deleteSkill(index));
  }

  return (
    <div className="">
      <main>
        <div className="heading d-flex justify-content-between align-items-center">
          <h1> Skills</h1>
          
          <div>
          <button onClick={() => setButtonPopup(true)} className="border-light bg-white">Add</button></div>
        </div>
        {buttonPopup && (
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="form">
              <h3>Form</h3>
              <label>Skills*:</label>
              <br />
              <input
                className="input-form"
                type="text"
                placeholder="FullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <button onClick={handleClick}>Save</button>
            </div>
          </Popup>
        )}

        {editPopup && (
          <Popup trigger={editPopup} setTrigger={setEditPopup}>
            <div className="form">
              <h3>Form</h3>
              <label>Skill*:</label>
              <br />
              <input
                className="input-form"
                type="text"
                placeholder="FullName"
                value={editItem}
                onChange={(e) => setEditItem(e.target.value)}
              />
              <br />
              <br />

              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </Popup>
        )}
      </main>

      <div>
        {skills.map((item, index) => {
          return (
            <div key={index} className="map">
              <div>{item}</div>
              <div>
                <button onClick={() => handleEdit(item, index)} className="btn">
                  Edit
                </button>
                <button onClick={() => handleEditCancel(index)} className="btn">
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

export default Skill;
