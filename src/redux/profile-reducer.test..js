import {
  addPostActionCreator,
  deletePost,
  profileReducer,
} from "./profile-reducer";

let state = {
  posts: [
    { id: "1", message: "hi", likeCount: 11 },
    { id: "2", message: "first post", likeCount: 15 },
    { id: "3", message: "first33333", likeCount: 1 },
  ],
};

it("length of posts should be encremented", () => {
  let action = addPostActionCreator("New Post");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it("text message should be correct", () => {
  let action = addPostActionCreator("New Post");

  let newState = profileReducer(state, action);

  expect(newState.posts[3].message).toBe("New Post");
});

it("length of posts after delete should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

it("length of posts after delete shouldn't if id be incorrect", () => {
  let action = deletePost(100);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});
