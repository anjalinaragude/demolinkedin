import '../Post/Post.css';
import {FiMoreVertical} from 'react-icons/fi';
import {Users} from '../../Data'
const Post = ({post}) => {
 

  return (
    <div className='post'>
         <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                   
                    <img src={Users.filter((u)=> u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u)=> u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                   <FiMoreVertical/> 
                </div>
            </div>
            
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                 <img src="/img/post.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/img/like.png" alt="" className="likeIcon" />
                <img src="/img/likebutton.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">{post?.like}</span>
                </div>
                <div className="postBottomright">
                    <span className="postCommentText">{post?.comment}</span>
                </div>
            </div>
         </div>
      
    </div>
  );
}

export default Post;
