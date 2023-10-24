import React from "react";
import classes from "./SubmitButton.module.css";
import { CircularProgress } from "@mui/material";

const SubmitButton = (props) => {
  return (
    <div>
      <button
        className={classes.login_btn}
        onClick={props.onClick}
        disabled={props.disabled && true}
        style={{padding:props.isLoading ? "0.5rem 0" : "0.75rem 0"}}
      >
        {props.isLoading ? <CircularProgress size={25} color="secondary"/> :props.text}

      </button>
    </div>
  );
};

export default SubmitButton;
