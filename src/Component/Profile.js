// src/components/Profile.js
import React, { useContext, useState } from 'react';

// import ProfileEdit from './ProfileEditComponent/ProfileEdit';
import ProfilePhoto from './ProfilePhoto';
import Skills from './Skills';
import YourComponent from './YourComponent';
import Skill from './Skill/Skill';

import Experience from './Experience';
import { MyProvider } from './Hook/MyProvider';

const Profile = () => {
  const userData = useContext(MyProvider)
  console.log(userData)
  return (
    <div>




      <div className='container '>
        <div className='row p-4  '>
          <div className='col-md-9  '>
            <div className="grid gap-0 column-gap-5 ">
              <div className="p-2 g-col-8 bg-white"><ProfilePhoto /></div>

              <div className="p-2 g-col-4 my-3 bg-white"><Experience/></div>
              <div className="p-2 g-col-4 my-3 bg-white"><Skill/></div>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className="grid gap-0 column-gap-3 ">
              <div className="p-2 g-col-8 my-3 bg-white">Grid item 1</div>
              <div className="p-2 g-col-4 bg-white"><div className="my-2 bg-white">
  <div className="s">
    <div className='text-end'>Ad ...</div>
  </div>
  <div className="ps-1">
    <p className="fw-400">{userData.fullname} uncover Opportuniaties with Linkedin Perminum </p>
  </div>
  <div className="d-flex align-items-center">
    <img src={userData.img}width={50} height={50} alt="" className="ms-5 rounded-pill" />
    <img src="img/post.jpg" width={50} height={50} alt="" className="ms-3" />
  </div>
  <div className="ps-1">
    <span className="fw-200 ">See who's viewed your profile in  the last 90 days</span>
  </div>
  <button className="bg-white border-primary rounded-pill p-1 ms-5 mb-3 mt-2">try for free!</button>
</div>
</div>

            </div>

          </div>
        </div>
      </div>
    </div>


  );
};

export default Profile;
