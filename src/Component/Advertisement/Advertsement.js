import React, { useContext } from 'react';
import { MyProvider } from '../Hook/MyProvider';

const Advertsement = () => {
    const userData = useContext(MyProvider);
  return (
    <div>
       <div className="my-2 bg-white">
              <div className="s">
                <div className="text-end">Ad ...</div>
              </div>
              <div className="ps-1">
                <p className="fw-400">
                  Anjali uncover Opportuniaties with Linkedin Perminum{" "}
                </p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={userData.img}
                  width={50}
                  height={50}
                  alt=""
                  className="ms-5 rounded-pill"
                />
                <img
                  src="img/post.jpg"
                  width={50}
                  height={50}
                  alt=""
                  className="ms-3"
                />
              </div>
              <div className="ps-1">
                <span className="fw-200 ">
                  See who's viewed your profile in the last 90 days
                </span>
              </div>
              <button className="bg-white border-primary rounded-pill p-1 ms-5 mb-3 mt-2">
                try for free!
              </button>
            </div> 
    </div>
  );
}

export default Advertsement;
