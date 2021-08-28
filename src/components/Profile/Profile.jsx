import React from "react";

import { ProfileInfo } from "./ProfileInfo";

import style from "./Profile.module.css";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};
