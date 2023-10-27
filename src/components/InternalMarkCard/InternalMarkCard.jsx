import React from "react";
import classes from "./InternalMarkCard.module.css";
import ScoreBox from "../ScoreBox/ScoreBox";

const InternalMarkCard = (props) => {
  const internalMark = props.internalMark;

  const formatTotalMark = (mark) => mark.toFixed(0);

  const formatMark = (mark) => {
    if (typeof mark === 'number') {
      const roundedMark = Math.round(mark * 10) / 10; 
      return roundedMark % 1 === 0 ? roundedMark.toFixed(0) : roundedMark.toFixed(1);
    }
    return mark;
  };
  

  return internalMark?.map((mark) => (
    <div key={mark?.id} className={classes.internaml_mark_card}>
      <h3 className={classes.heading_text}>Internal Mark</h3>
      <span className={classes.mark_text}>
        {formatTotalMark(mark?.total_internal_mark)}
      </span>
      <div className={classes.mark_container}>
        <div className={classes.first_section}>
          <span className={classes.internal_mark_label}>Series exam marks</span>
          <div className={classes.row_container}>
            <ScoreBox labelText="SE1" markText={formatMark(mark?.se1)} />
            <ScoreBox labelText="SE2" markText={formatMark(mark?.se2)} />
            <ScoreBox labelText="SE3" markText={formatMark(mark?.se3)} />
          </div>
          <span className={classes.internal_mark_label}>Assignment marks</span>
          <div className={classes.row_container}>
            <ScoreBox
              labelText="ASSG1"
              markText={formatMark(mark?.assignment1)}
            />
            <ScoreBox
              labelText="ASSG2"
              markText={formatMark(mark?.assignment2)}
            />
            <ScoreBox
              labelText="ASSG3"
              markText={formatMark(mark?.assignment3)}
            />
          </div>
          <span className={classes.internal_mark_label}>
            Attendance in percentage
          </span>
          <ScoreBox markText={`${formatMark(mark?.attendance_percentage)}%`} />
        </div>
        <div className={classes.second_section}>
          <span className={classes.internal_mark_label}>
            Average series exam mark
          </span>
          <ScoreBox markText={formatMark(mark?.average_internal_mark)} />
          <span className={classes.internal_mark_label}>
            Average assignment mark
          </span>
          <ScoreBox markText={formatMark(mark?.average_assignment_mark)} />
          <span className={classes.internal_mark_label}>Attendance mark</span>
          <ScoreBox markText={formatMark(mark?.attendance_percentage_mark)} />
        </div>
      </div>
    </div>
  ));
};

export default InternalMarkCard;
