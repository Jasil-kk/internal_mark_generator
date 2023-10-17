import React from "react";
import classes from "./InternalMarkCard.module.css"
import ScoreBox from "../ScoreBox/ScoreBox";

const InternalMarkCard = () => {
  return (
    <div className={classes.internaml_mark_card}>
      <h3 className={classes.heading_text}>Internal Mark</h3>
      <span className={classes.mark_text}>47</span>
      <div className={classes.mark_container}>
        <div className={classes.first_section}>
          <span className={classes.internal_mark_label}>Series exam marks</span>
          <div className={classes.row_container}>
            <ScoreBox labelText="SE1" markText="25" />
            <ScoreBox labelText="SE2" markText="18" />
            <ScoreBox labelText="SE3" markText="16" />
          </div>
          <span className={classes.internal_mark_label}>Assignment marks</span>
          <div className={classes.row_container}>
            <ScoreBox labelText="ASSG1" markText="18" />
            <ScoreBox labelText="ASSG2" markText="17" />
            <ScoreBox labelText="ASSG3" markText="18" />
          </div>
          <span className={classes.internal_mark_label}>
            Attendance in percentage
          </span>
          <ScoreBox markText="90%" />
        </div>
        <div className={classes.second_section}>
          <span className={classes.internal_mark_label}>
            Average series exam mark
          </span>
          <ScoreBox markText="20" />
          <span className={classes.internal_mark_label}>
            Average assignment mark
          </span>
          <ScoreBox markText="17" />
          <span className={classes.internal_mark_label}>Attendance mark</span>
          <ScoreBox markText="10" />
        </div>
      </div>
    </div>
  );
};

export default InternalMarkCard;
