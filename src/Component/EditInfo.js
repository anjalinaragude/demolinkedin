
import React, { useState } from "react";
 
export default function EditInfo(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
  function handleClick() {
    props.statusfn(false);
  }
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };
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
              style={{
                width: "100%",
                height: "70vh",
                overflow: "scroll",
                // border: "1px solid #ccc",
                border: "none"
              }}
              className="scrolling"
              onScroll={handleScroll}
            >
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <br />
                <input
                  type="text"
                  id="firstname"
                  value={props.details.firstname}
            onChange={(e) => {
              props.fn({ ...props.details, firstname: e.target.value });
            }
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Last name</label>
                <br />
                <input
                  type="text"
                  id="lastname"
                  value={props.details.lastname}
            onChange={(e) => {
              props.fn({ ...props.details, lastname: e.target.value });
         
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="additional">Additonal name</label>
                <br />
                <input
                  type="text"
                  id="additional"
                  value={props.details.additional}
            onChange={(e) => {
              props.fn({ ...props.details, additional: e.target.value });
            }}
                />
              </div>
              <div className="form-group">
                <h3>Education</h3>

                <label htmlFor="additional">Education</label>
                <br />
                <input
                  type="text"
                  id="education"
                  value={props.details.education}
            onChange={(e) => {
              props.fn({ ...props.details, education: e.target.value });
            }}
                />
                <br />
                <button className="education-btn">+Add new education</button>
              </div>
              {/* <div className="form-group item">
                <input type="checkbox" />
                <p>show education in my intro</p>
              </div> */}
              <div className="form-group">
                <h3>Location</h3>

                <label htmlFor="additional">Country/Region</label>
                <br />
                <input
                  type="text"
                  id="country"
                  value={props.details.country}
            onChange={(e) => {
              props.fn({ ...props.details, country: e.target.value });
                            }}                />
                <br />
                <br />
                <label htmlFor="city">City</label>
                <br />
                <input
                  type="text"
                  id="city"
                  value={props.details.city}
                  onChange={(e) => {
                    props.fn({ ...props.details, city: e.target.value });
                  }}      
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
 