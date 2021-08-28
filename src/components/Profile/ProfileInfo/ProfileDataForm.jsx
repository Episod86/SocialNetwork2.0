import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  TextArea,
} from "../../Commosn/FormsControl/FormsControl";

// import style from "../Commosn/FormsControl/FormsControl.module.css";
import style from "../../Commosn/FormsControl/FormsControl.module.css";

export const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>Full name: {createField("Full name", "fullName", Input)}</div>
      <div>
        Looking for a job:{" "}
        {createField(null, "lookingForAJob", Input, [], { type: "checkbox" })}
      </div>
      <div>
        My professional skils:{" "}
        {createField(
          "My professional skils",
          "lookingForAJobDescription",
          TextArea
        )}
      </div>
      <div>About me: {createField("About me", "aboutMe", TextArea)}</div>
      <div>
        Contacts:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}:{createField(key, `contacts.${key}`, Input)}{" "}
            </div>
            // <Contact contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>

      <div>
        <button>save</button>
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm({
  form: "editProfile",
})(ProfileDataForm);
