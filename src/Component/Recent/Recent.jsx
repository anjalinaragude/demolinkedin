import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiHash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Recent = () => {
    const [showContent, setShowContent] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
  
    const handleDropdown = () => {
      setShowContent(!showContent);
    };
  return (
    <div>
      <div class="card mt-2" >
              <div className="card-body">
                <div className="dropdown">
                  <div className="d-flex justify-content-between">
                    <span className="">Recent</span>
                    <button
                      onClick={handleDropdown}
                      className="dropdown-toggle bg-white border-0 ms-5 "
                      disabled={isDisabled}
                    ></button>
                  </div>
                  {showContent && (
                    <div className="dropdown-content">
                      <div className="d-flex align-items-center">
                        <BiHash />
                        <span className="fw-light ps-3">tstschie</span>
                      </div>
                    </div>
                  )}
                </div>
                <p className="">
                  <Link to="/groups">Groups</Link>
                </p>
                <div className="d-flex justify-content-between">
                  <p>
                    <Link to="/events">Events</Link>
                  </p>
                  <AiOutlinePlus/>
                </div>
                <div className="dropdown">
                  <div className="d-flex justify-content-between">
                    <span className="">Followed Hashtags</span>
                    <button
                      onClick={handleDropdown}
                      className="dropdown-toggle border-0 bg-white ms-3"
                      disabled={isDisabled}
                    ></button>
                  </div>
                  {showContent && (
                    <div className="dropdown-content">
                      <div className="d-flex align-items-center">
                        <BiHash />
                        <span className="fw-light ps-3">tstschie</span>
                      </div>
                      <div className="">
                        <p className="fw-light ps-4 fs-6"> See all</p>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="text-center border-0 mt-2"
                  style={{ width: "120px" }}
                >
                 <Link to="/mynetwork">Discover more</Link> 
                </button>
              </div>
            </div>
    </div>
  );
}

export default Recent;
