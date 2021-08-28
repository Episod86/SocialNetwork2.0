import React, { useState } from "react";

import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
// import { ProfileDataForm, ProfileDataFormReduxForm } from "./ProfileDataForm";

import userPhoto from "../../../image/photoUser.png";
import { ProfileDataFormReduxForm } from "./ProfileDataForm";
// import ProfileDataForm from "./ProfileDataForm";
// import ProfileDataFormReduxForm from "./ProfileDataForm";

// import style from "./ProfileStatus.module.css";

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  if (!profile) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      <div>
        <img src={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      {editMode ? (
        <ProfileDataFormReduxForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          activateEditMode={activateEditMode}
          profile={profile}
          isOwner={isOwner}
        />
      )}
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      <div>Full name: {profile.fullName}</div>

      <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJob && (
        <div>My professional skils: {profile.lookingForAJobDescription}</div>
      )}
      <div>About me: {profile.aboutMe}</div>
      <div>
        Contacts:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>edit</button>
        </div>
      )}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  );
};
