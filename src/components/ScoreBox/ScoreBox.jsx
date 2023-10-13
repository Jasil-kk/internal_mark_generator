import React from "react";
import classes from "./ScoreBox.module.css";

const ScoreBox = (props) => {
  return (
    <div className={classes.scoreBox_card}>
      <span className={classes.label_text}>{props.labelText}</span>
      <span className={classes.score_text}>{props.markText}</span>
    </div>
  );
};

export default ScoreBox;
