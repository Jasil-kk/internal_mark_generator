import React from "react";
import classes from "./BackButton.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const BackButton = () => {
  return (
    <div>
      <button className={classes.back_btn}>
        <KeyboardArrowLeftIcon sx={{ color: "#938F99", fontSize: 26 }} />
        Back
      </button>
    </div>
  );
};

export default BackButton;
