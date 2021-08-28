import React from "react";

import { Post } from "./Post";

import style from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/Validators";
import { TextArea } from "../../Commosn/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

export const MyPosts = (props) => {
  let postElement = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost} />
      <div className={style.posts}>{postElement}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name={"newPostText"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "addPostForm",
})(AddNewPostForm);
