// import NavBar from "../NavBar/NavBar";
import { useContext, useState } from "react";
import "../Home/Home.css";
import {GrNotes} from 'react-icons/gr'
import { Link } from "react-router-dom";
import { BsFillBookmarkFill,BsCalendarEvent } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import {MdPermMedia} from 'react-icons/md';
import {TbSquareLetterI} from 'react-icons/tb'
import { MyProvider } from "../Hook/MyProvider";
function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDropdown = () => {
    setShowContent(!showContent);
  };
  const userData = useContext(MyProvider)
  console.log(userData)
  return (
    <div>
      
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-md-2  col-lg-2   ">

          <div className="card " style={{width: "11rem"}}>
  <div class="card-body">
  <div className=" profile  ">
              <div className="Img">
                <div className="backImg">
                  <img
                    src="img/post.jpg"
                    width={"180"}
                    height={80}
                    alt=""
                    className="backgroundImg"
                  />
                </div>
                <div className="proImg">
                  <Link to="/profile">
                    {" "}
                    <img
                      src={userData.img}
                      alt=""
                      width={70}
                      height={70}
                      className="profile1Img rounded-pill"
                    />
                  </Link>
                </div>
              </div>
              <div className="desc my-3">
                <span className=" postUserName">{userData.fullname}</span>
                <span className="postDesc fs-6 fw-light"> {userData.role}</span>
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



<div class="card mt-2" style={{width:"11rem" }}>
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
            <p className=""><Link to="/groups" >Groups</Link></p>
            <div className="d-flex justify-content-between">
                <p><Link to="/events">Events</Link></p>
                <AiOutlinePlus/>
            </div>
            <div className="dropdown">
              <div className="d-flex justify-content-between">
              <span className="">Followed Hashtags</span>
              <button
                onClick={handleDropdown}
                className="dropdown-toggle border-0 bg-white ms-3"
                disabled={isDisabled}
              ></button></div>
              {showContent && (
                <div className="dropdown-content">
                  <div className="d-flex align-items-center">
                    <BiHash />
                    <span className="fw-light ps-3">tstschie</span>
                  </div>
                  <div  className="">
                  <p className="fw-light ps-4 fs-6">  See all</p>
                  </div>
                </div>
              )}
            </div>
            <button className="text-center border-0 mt-2" style={{width:'120px'}}>Discover more</button>
        
            </div>
</div>





{/* <div className="grid gap-0 row-gap-3 ">
            <div className=" profile  ">
              <div className="Img">
                <div className="backImg">
                  <img
                    src="img/post.jpg"
                    width={"190"}
                    height={80}
                    alt=""
                    className="backgroundImg"
                  />
                </div>
                <div className="proImg">
                  <Link to="/profile">
                    {" "}
                    <img
                      src="/img/profile1.jpg"
                      alt=""
                      width={70}
                      height={70}
                      className="profile1Img rounded-pill"
                    />
                  </Link>
                </div>
              </div>
              <div className="desc my-3">
                <span className=" postUserName">Anjali Reddy</span>
                <span className="postDesc fs-6 fw-light"> Software Engg</span>
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
            <div className="bg-white  gap-row-2 my-2">
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
            <p className=""><Link to="/groups" >Groups</Link></p>
            <div className="d-flex justify-content-between">
                <p><Link to="/events">Events</Link></p>
                <AiOutlinePlus/>
            </div>
            <div className="dropdown">
              <div className="d-flex justify-content-between">
              <span className="">Followed Hashtags</span>
              <button
                onClick={handleDropdown}
                className="dropdown-toggle border-0 bg-white ms-3"
                disabled={isDisabled}
              ></button></div>
              {showContent && (
                <div className="dropdown-content">
                  <div className="d-flex align-items-center">
                    <BiHash />
                    <span className="fw-light ps-3">tstschie</span>
                  </div>
                  <div  className="">
                  <p className="fw-light ps-4 fs-6">  See all</p>
                  </div>
                </div>
              )}
            </div>
            <button className="text-center border-0 mt-2 mb-2" style={{width:'270px'}}>Discover more</button>
        
            </div>
            </div> */}
          </div>

          <div className="col-md-6 col-lg-6  mx-2">
            <div className="">
              <div className="row ">
                
                <div className="col-md-12 bg-white rounded-4 ">
                  <div className="ProfileImg  d-flex align-items-center">
                    <img
                      src={userData.img}
                      alt=""
                      width={80}
                      height={80}
                      className="rounded-pill p-2"
                    />

                    <div className="inputProfile">
                      <input
                        type="text"
                        className="inputpost rounded-pill"
                        placeholder=" Start a post"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="p-2">
                      <MdPermMedia />
                      <span className="px-2">Media</span>
                    </div>
                    <div className="p-2">
                      <BsCalendarEvent/>
                      <span className="px-2">Event</span>
                    </div>
                    <div className="p-2">
                      <GrNotes/>
                      <span > Write article</span>
                    </div>
                  </div>
                </div>
                <hr className="m-3"/>
                <div className="col-md-12 bg-white rounded-4 ">
                <div>
                   <span className="">Recommanded for you </span> 
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img src="img/profile3.jpg" width={40} height={40} alt="" className="rounded-pill" />
                    </div>
                    <div className="d-flex flex-column px-2">
                     <span className=""> Nisha Reddy</span>
                     <span className="">Recruiter : Techphosy tech pvt. limited </span> 
                     <span>people Skilled in javascript also follow these page </span>
                    </div>
                    <div>
                      <button className="bg-white  border-primary rounded-pill">+ Follow</button>
                    </div>
                    
                  </div>
                  <hr/>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img src="img/profile3.jpg" width={40} height={40} alt="" className="rounded-pill" />
                    </div>
                    <div className="d-flex flex-column px-2">
                     <span className=""> Nisha Reddy</span>
                     <span className="">Recruiter : Techphosy tech pvt. limited </span> 
                     <span>people Skilled in javascript also follow these page </span>
                    </div>
                    <div>
                      <button className="bg-white  border-primary rounded-pill">+ Follow</button>
                    </div>
                    
                  </div>
                  <hr/>
                  <div className="d-flex justify-content-between align-items-center p-1">
                    <div>
                      <img src="img/profile3.jpg" width={40} height={40} alt="" className="rounded-pill" />
                    </div>
                    <div className="d-flex flex-column px-2">
                     <span className=""> Nisha Reddy</span>
                     <span className="">Recruiter : Techphosy tech pvt. limited </span> 
                     <span>people Skilled in javascript also follow these page </span>
                    </div>
                    <div>
                      <button className="bg-white  border-primary rounded-pill">+ Follow</button>
                    </div>
                    
                  </div>

                  </div>

                </div>

                <div className="col-md-12 bg-white rounded-4 my-2">
                <div>hds</div>

                </div>

              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 ">
<div className="bg-white">
  <div className=" d-flex justify-content-around align-items-center">
    <span className="span"><b>Linkedin News</b></span>
    <TbSquareLetterI/>
  </div>
  <ul>
    <li className="d-flex flex-coloum">
      <span><b> Hydrabad placements here to stay </b></span>
     <span className=""> 1 day ago .771 readers</span>
    </li>
    <li className="">
      <span><b> Finance Seeks fresh  talent  </b></span>
     <span className=""> 3 day ago .451 readers</span>
    </li>
    <li className="">
      <span><b> Hydrabad placements here to stay </b></span>
     <span className=""> 1 day ago .771 readers</span>
    </li>
    <li className="">
      <span><b> Hydrabad placements here to stay </b></span>
     <span className=""> 1 day ago .771 readers</span>
    </li>
  </ul>
  <div className="p-1 px-3">
<button className=""> Show  more</button>
</div>
</div>

<div className="my-2 bg-white">
  <div className="s">
    <div className='text-end'>Ad ...</div>
  </div>
  <div className="ps-1">
    <p className="fw-400">Anjali uncover Opportuniaties with Linkedin Perminum </p>
  </div>
  <div className="d-flex align-items-center">
    <img src={userData.img}    width={50} height={50} alt="" className="ms-5 rounded-pill" />
    <img src="img/post.jpg" width={50} height={50} alt="" className="ms-3" />
  </div>
  <div className="ps-1">
    <span className="fw-200 ">See who's viewed your profile in  the last 90 days</span>
  </div>
  <button className="bg-white border-primary rounded-pill p-1 ms-5 mb-3 mt-2">try for free!</button>
</div>





          </div>
        </div>
        <div class="row py-3 ">
          <div className="col-md-2  col-lg-2 bg-white  ">
           
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
            <p className=""><Link to="/groups" >Groups</Link></p>
            <div className="d-flex justify-content-between">
                <p><Link to="/events">Events</Link></p>
                <AiOutlinePlus/>
            </div>
            <div className="dropdown">
              <div className="d-flex justify-content-between">
              <span className="">Followed Hashtags</span>
              <button
                onClick={handleDropdown}
                className="dropdown-toggle border-0 bg-white ms-3"
                disabled={isDisabled}
              ></button></div>
              {showContent && (
                <div className="dropdown-content">
                  <div className="d-flex align-items-center">
                    <BiHash />
                    <span className="fw-light ps-3">tstschie</span>
                  </div>
                  <div  className="">
                  <p className="fw-light ps-4 fs-6">  See all</p>
                  </div>
                </div>
              )}
            </div>
            <button className="text-center border-0 mt-2 mb-2" style={{width:'270px'}}>Discover more</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Home;
