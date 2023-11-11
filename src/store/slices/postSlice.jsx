// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      desc: 'Initial post',
      image: "",
      video: "img/vvideo.mp4",
      date: new Date(),
      like: 56,
      comment: 0,
      userProfilePicture: 'img/profile2.jpg', // replace with actual data
      username: 'Anjali reddy', // replace with actual data
    },
  ],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const {
        desc,
        image,
        video,
        like,
        comment,
        userProfilePicture,
        username,
      } = action.payload;

      // Set the current date when adding a post
      const date = new Date();

      state.posts.push({
        desc,
        image,
        video,
        date,
        like,
        comment,
        userProfilePicture,
        username,
      });
    },
    addLike: (state, action) => {
      const { postId } = action.payload;
      const post = state.posts.find((p) => p.date === postId);
      if (post) {
        post.like += 1;
        post.isLiked = true;
      }
    },
    removeLike: (state, action) => {
      const { postId } = action.payload;
      const post = state.posts.find((p) => p.date === postId);
      if (post && post.like > 0) {
        post.like -= 1;
        post.isLiked = false;
      }
    },
    // Add other post-related actions if needed
  },
});

export const { addPost, removeLike, addLike } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
