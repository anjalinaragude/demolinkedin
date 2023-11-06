import React from 'react';

const Recommanded = () => {
  return (
    <div>
       <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          src="img/profile3.jpg"
                          width={40}
                          height={40}
                          alt=""
                          className="rounded-pill"
                        />
                      </div>
                      <div className="d-flex flex-column px-2">
                        <span className=""> Nisha Reddy</span>
                        <span className="">
                          Recruiter : Techphosy tech pvt. limited{" "}
                        </span>
                        <span>
                          people Skilled in javascript also follow these page{" "}
                        </span>
                      </div>
                      <div>
                        <button className="bg-white  border-primary rounded-pill">
                          + Follow
                        </button>
                      </div>
                    </div>
    </div>
  );
}

export default Recommanded;
