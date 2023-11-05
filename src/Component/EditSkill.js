
import React, { useState } from "react";
 
export default function EditSkill(props) {
    // const [scrollPosition, setScrollPosition] = useState(0);
  function handleClick() {
    props.setIsEdit(false);
  }
  // const handleScroll = (e) => {
  //   setScrollPosition(e.target.scrollTop);
  // };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions like sending data to a server here
    // For this example, we'll simply close the popup
    // onClose();
  };
  return (
    
    <div className="popup-edit">
      <div className="popup-content">
        <div>
        <button className="popupedit-btn" onClick={handleClick}>
          X
        </button>
        </div>
        <div>
            <div
              // style={{
              //   width: "100%",
              //   height: "70vh",
              //   overflow: "scroll",
              //   // border: "1px solid #ccc",
              //   border: "none"
              // }}
              // className="scrolling"
              // onScroll={handleScroll}
            >
              <div className="form-group">
                <label htmlFor="name">Skill</label>
                <br />
                <input
                  type="text"
                  id=""skill
                  value={props.save}
            onChange={(e) => {
              props.setSave({ ...props.save, skill: e.target.value });
            }
                  }
                />
              </div>
            
             
             
             
            </div>
            <button type="submit" className="saveedit-btn" onClick={handleClick}>
                Save
              </button>

            {/* <div className="form-actions">
              <button type="submit" className="save-btn" onClick={handleClick}>
                Save
              </button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div> */}
          </div>
         


        {/* <div className="input-container">
          <input
            className="input-field"
            type="text"
            value={props.details.name}
            onChange={(e) => {
              props.fn({ ...props.details, name: e.target.value });
            }}
          />
          <input
            className="input-field"
            type="text"
            value={props.details.email}
            onChange={(e) => {
              props.fn({ ...props.details, email: e.target.value });
            }}
          />
          <input
            className="input-field"
            type="text"
            value={props.details.phone}
            onChange={(e) => {
              props.fn({ ...props.details, phone: e.target.value });
            }}
          />
        </div>
 
        <button className="save-button" onClick={handleClick}>
          Save
        </button> */}
      </div>
      
              
              {/* <button type="button" onClick={onClose}>
                Cancel
              </button> */}
          
    </div>
  );
}
 