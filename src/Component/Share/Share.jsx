import "../Share/Share.css";
import {MdPermMedia,MdEmojiEmotions} from 'react-icons/md';
import {FaLocationDot} from 'react-icons/fa6';
import {PiTagSimpleFill} from 'react-icons/pi';
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
    <img src="/asset/profile5.jpg" alt="" className="shareProfileImg" />
    <input type="text" placeholder="what's  in your mind " className="shareinput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
         <div className="shareOption">
            <MdPermMedia htmlColor="tomato" className="shareIcon"/>
            <span className="shareOptionText">photo/Video</span>
         </div>
         <div className="shareOption">
            <PiTagSimpleFill className="shareIcon"/>
            <span className="shareOptionText">Tag</span>
         </div>
         <div className="shareOption">
            <FaLocationDot className="shareIcon"/>
            <span className="shareOptionText">Location</span>
         </div>
         <div className="shareOption">
            <MdEmojiEmotions className="shareIcon"/>
            <span className="shareOptionText">Feelings</span>
         </div>
         </div>
         <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
