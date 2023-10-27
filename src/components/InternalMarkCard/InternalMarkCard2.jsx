import React from "react";
import classes from "./InternalMarkCard.module.css";
import ScoreBox from "../ScoreBox/ScoreBox";

const InternalMarkCard2 = (props) => {
  const internalMark = props.internalMark;

  const formatTotalMark = (mark) => mark.toFixed(0);

  const formatMark = (mark) => {
    if (typeof mark === "number") {
      const roundedMark = Math.round(mark * 10) / 10;
      return roundedMark % 1 === 0
        ? roundedMark.toFixed(0)
        : roundedMark.toFixed(1);
    }
    return mark;
  };

  return internalMark?.map((mark) => (
    <div key={mark?.id} className={classes.internaml_mark_card}>
      <h3 className={classes.heading_text}>Internal Mark</h3>
      <span className={classes.mark_text}>
        {formatTotalMark(mark?.total_lab_mark)}
      </span>
      <div className={classes.mark_container}>
        <div className={classes.first_section}>
          <span className={classes.internal_mark_label}>Test marks</span>
          <div className={classes.row_container}>
            <ScoreBox labelText="TEST1" markText={formatMark(mark?.test1)} />
            <ScoreBox labelText="TEST2" markText={formatMark(mark?.test2)} />
          </div>
          <div className={classes.border_line}></div>
          <div className={classes.row_container2}>
            <ScoreBox
              labelText="Rough record"
              markText={formatMark(mark?.rough_record_mark)}
            />
            <ScoreBox
              labelText="Fair record"
              markText={formatMark(mark?.fair_record_mark)}
            />
            <ScoreBox
              labelText="Lab work"
              markText={formatMark(mark?.lab_work_mark)}
            />
          </div>
          <div className={`${classes.row_container} ${classes.row_container3}`}>
            <ScoreBox
              labelText="Open-ended"
              markText={formatMark(mark?.open_ended_mark)}
            />
            <ScoreBox
              labelText="Attendance mark"
              markText={formatMark(mark?.attendance_mark)}
            />
          </div>
        </div>
        <div className={classes.second_section}>
          <span className={classes.internal_mark_label}>Average test mark</span>
          <ScoreBox markText={formatMark(mark?.average_test_mark)} />
        </div>
      </div>
    </div>
  ));
};

export default InternalMarkCard2;
