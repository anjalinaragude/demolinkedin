import React, { useState } from 'react'
import Popup from './Popup/Popup';
import '../Skill/Skill.css'

const Skill = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editItem, setEditItem] = useState("");
  
    const [name, setName] = useState("");
  
    const [click, setClick] = useState(["html", "css", "javascript"]);
  
    function handleEdit(item, index) {
      setEditIndex(index);
      setEditItem(item);
  
      setEditPopup(true);
    }
  
    function handleUpdate() {
      let temp = [...click];
      temp[editIndex] = editItem;
      setClick(temp);
      setEditIndex(null);
      setEditItem("");
  
      setEditPopup(false);
    }
  
    function handleCancel() {
      setEditPopup(false);
    }
  
    function handleClick() {
      setClick([...click, name]);
      setName("");
  
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
        <h3> Skills</h3>
        <br />
        <br />
        <button onClick={() => setButtonPopup(true)}>+</button>
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
      {click.map((item, index) => {
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
    {/* <Experience /> */}
    {/* <Experience1 /> */}
  </div>

  )
}

export default Skill