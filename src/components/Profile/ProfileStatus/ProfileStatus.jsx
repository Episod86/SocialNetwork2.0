import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>
            {props.status || "Изменить статус"}
          </span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};
