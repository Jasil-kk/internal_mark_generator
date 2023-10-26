import React from "react";
import classes from "./InternalMarkCard.module.css";
import ScoreBox from "../ScoreBox/ScoreBox";

const InternalMarkCard2 = (props) => {
const internalMark = props.internalMark;

console.log(internalMark);
  return (
    <div className={classes.internaml_mark_card}>
      <h3 className={classes.heading_text}>Internal Mark</h3>
      <span className={classes.mark_text}>61</span>
      <div className={classes.mark_container}>
        <div className={classes.first_section}>
          <span className={classes.internal_mark_label}>Test marks</span>
          <div className={classes.row_container}>
            <ScoreBox labelText="TEST1" markText="13" />
            <ScoreBox labelText="TEST2" markText="14" />
          </div>
          <div className={classes.border_line}></div>
          <div className={classes.row_container2}>
            <ScoreBox labelText="Rough record" markText="08" />
            <ScoreBox labelText="Fair record" markText="07" />
            <ScoreBox labelText="Lab work" markText="14.5" />
          </div>
          <div className={`${classes.row_container} ${classes.row_container3}`}>
            <ScoreBox labelText="Open-ended" markText="05" />
            <ScoreBox labelText="Attendance mark" markText="13" />
          </div>
        </div>
        <div className={classes.second_section}>
          <span className={classes.internal_mark_label}>Average test mark</span>
          <ScoreBox markText="13.5" />
        </div>
      </div>
    </div>
  );
};

export default InternalMarkCard2;
