import { useSelector } from "react-redux";


const Advertsement = () => {
  const img = useSelector((state) => state.profilePhoto.img);
  const {userData} = useSelector(s=>s.user)
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
                  src={img? URL.createObjectURL(img) : userData?.profilePicture || "img/profile2.jpg"}
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
