// Post.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, addLike, removeLike } from '../../store/slices/postSlice';
import '../Post/Post.css';

const Post = () => {
    const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const img = useSelector((state) => state.profilePhoto.img);
  const   {userData} = useSelector((s)=>s.user)

  const handleLikeClick = (postId) => {
    // Check if the post is already liked or not
    const isLiked = posts.find((post) => post.date === postId)?.isLiked || false;

    // Dispatch the appropriate action
    if (isLiked) {
      dispatch(removeLike({ postId }));
    } else {
      dispatch(addLike({ postId }));
    }
  };


  return (
    <div>
      {posts.map((post) => (
        <div key={post.date} className='post'>
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                {/* <img src={post.userProfilePicture} alt="" className="postProfileImg" /> */}
                <img src={img? URL.createObjectURL(img) :  userData?.profilePicture} alt="" width={60} className="profile1Img rounded-pill"
                      height={60}  />

                 <span className=" postUserName">{userData?.username}</span>
                <span className="postDate">{post.date.toLocaleString()}</span>
              </div>
              <div className="postTopRight"> {/* Add your additional components here */}</div>
            </div>

            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              {post.image && (
  <img
    src={post.image instanceof Blob ? URL.createObjectURL(post.image) : post.image}
    alt=""
    className="postImg"
    onLoad={() => console.log('Image loaded successfully')}
    onError={() => console.log('Error loading image')}
  />
)}

{post.video && (
  <video controls className="postVideo" width="100%" height="auto">
    <source src={post.video instanceof Blob ? URL.createObjectURL(post.video) : post.video} type="video/mp4" />
  </video>
)}
 </div>

            <div className="postBottom">
              <div className="postBottomLeft">
              <img
              src="/img/like.png"
              alt=""
              className="likeIcon"
              onClick={() => handleLikeClick(post.date)}
            />
            <img
              src="/img/likebutton.png"
              alt=""
              className="likeIcon"
              onClick={() => handleLikeClick(post.date)}
            />
            <span className="postLikeCounter">{post.like}</span> </div>
              <div className="postBottomright">
                <span className="postCommentText">{post.comment}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
