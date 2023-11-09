// src/components/Profile.js


// import ProfileEdit from './ProfileEditComponent/ProfileEdit';
import ProfilePhoto from './ProfilePhoto';

import{FiEdit2} from 'react-icons/fi'

import Skill from './Skill/Skill';

import Experience from './Experience';

import Advertsement from './Advertisement/Advertsement';
import About from './About/About';
import Education from './Education/Education';

const Profile = () => {
 
  return (
    <div>




      <div className='container '>
        <div className='row p-4  '>
          <div className='col-md-9  '>
            <div className="grid gap-0 column-gap-5 ">
              <div className="p-2 g-col-8 my-3  bg-white"><ProfilePhoto /></div>
              <div className="p-2 g-col-8 my-3  bg-white"><About /></div>
              <div className="p-2 g-col-4 my-3 bg-white"><Experience/></div>
              <div className="p-2 g-col-4 my-3 bg-white"><Skill/></div>
              <div className="p-2 g-col-4 my-3 bg-white"><Education/></div>
           
            </div>
          </div>
          <div className='col-md-3 '>
            <div className="grid gap-0 column-gap-3 ">
              <div className="p-2 g-col-8 my-3 bg-white">
                <div>
                  <div className='d-flex justify-content-between aglign-items-center'>
                    <h5>Profile language</h5>
                    <FiEdit2/>
                  </div>
                  <p className='fw-100'> English</p>
                </div>
                <hr/>
                <div className='d-flex justify-content-between aglign-items-center'>
                    <h5> Public Profile & URL</h5>
                    <FiEdit2/>
                  </div>
                  <p className="FW-100"> wwww.linkedin.com/in/</p>

              </div>
              <div className="p-2 g-col-4 bg-white">
                {/* <div className="my-2 bg-white">
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
</div> */}
<Advertsement/>
</div>

            </div>

          </div>
        </div>
      </div>
    </div>


  );
};

export default Profile;
