import React from "react";
import classes from "./LogoutBtn.module.css"

const LogoutBtn = (props) => {
  return (
    <div>
      <button className={classes.logout_btn} onClick={props.onClick}>
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
