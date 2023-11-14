
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { BsFillBookmarkFill } from 'react-icons/bs';
import "../Home/Home.css";
const HomeProfile = () => {
  const img = useSelector((state) => state.profilePhoto.img);
  const   {userData} = useSelector((s)=>s.user)
  const backgroundImg = useSelector((state) => state.profilePhoto.backgroundImg);
  return (
    <div>
       <div className="card " >
              <div class="card-body">
                <div className=" profile  ">
                  <div className="Img">
                    <div className="backImg">
                      {/* <img
                        src="img/post.jpg"
                        width={"180"}
                        height={80}
                        alt=""
                        className="backgroundImg"
                      /> */}
                       <img
          src={backgroundImg ? URL.createObjectURL(backgroundImg) : "img/post.jpg"}
          alt="Background"
          className="popup-background-image p-2"
          width={180}
          height={80}
        />  
                    </div>
                    <div className="proImg">
                <Link to="/profile">
                 
                   <img src={img? URL.createObjectURL(img) :  userData?.profilePicture} alt="" width={60} className="profile1Img rounded-pill"
                      height={60}  />
                </Link>
              </div>
                  </div>
                  <div className="desc my-3">
                    <span className=" postUserName">{userData?.username}</span>
                    <span className="postDesc fs-6 fw-light">
                      {userData?.role}
                    </span>
                  </div>
                  <hr style={{ width: "100%" }}></hr>
                  <Link
                    to="/mynetwork"
                    className="text-decoration-none bg-body-secondary "
                    style={{ width: "20" }}
                  >
                    <div className="connections d-flex justify-content-between align-items-center">
                      <div className="connect  text-black ">
                        <span className="fw-lighter">Connections </span>
                        <br />
                        <span>
                          <b>Grow your network</b>
                        </span>
                      </div>
                      <div>
                        <span className="">39</span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/profile-view"
                    className="text-decoration-none bg-body-secondary "
                    style={{ width: "20" }}
                  >
                    <div className="">
                      <div className="connection d-flex justify-content-between align-items-center">
                        <span className="fw-lighter text-black">
                          Who's viewed your profile
                        </span>
                        <span className="">14</span>
                      </div>
                    </div>
                  </Link>
                  <hr />
                  <Link
                    to="/my-items/saved-jobs/"
                    className=" text-decoration-none text-black"
                  >
                    <div className="d-flex align-items-center">
                      <BsFillBookmarkFill className="" />
                      <span className="fw-b p-2 ">
                        <b>My items</b>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
    </div>
  );
}

export default HomeProfile;
