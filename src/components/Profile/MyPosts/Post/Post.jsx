import React from "react";

import style from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k_sfiQZVqjmPQFocuMaYfAxyHXixVWSsPQ&usqp=CAU"
        alt="Аватар"
      />
      <div>{props.message}</div>
      <span> like {props.likeCount}</span>
    </div>
  );
};
