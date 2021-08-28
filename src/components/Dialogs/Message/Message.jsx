import React from "react";

import style from "./../Dialogs.module.css";

export const Message = (props) => {
  return <div className={style.dialog}>{props.message}</div>;
};
