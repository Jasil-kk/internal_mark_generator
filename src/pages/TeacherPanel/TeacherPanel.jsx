import React from "react";
import classes from "./TeacherPanel.module.css";
import Face3Icon from "@mui/icons-material/Face3";
import IconButton from "@mui/material/IconButton";
import arrow from "../../assets/arrow_circle_right.svg";

const TeacherPanel = () => {
  return (
    <div className={classes.teacherPanel_main}>
      <IconButton aria-label="Face3Icon">
        <Face3Icon sx={{ color: "#D0BCFF", fontSize: 60 }} />
      </IconButton>
      <h2 className={classes.teacherPanel_name_text}>Rosemary Telesco</h2>
      <div className={classes.teacherPanel_course_container}>
        <p className={classes.teacherPanel_course_text}>
          Digital Computer Principle
        </p>
        <div className={classes.teacherPanel_dot}></div>
        <p className={classes.teacherPanel_course_text}>Cloud Computing</p>
        <p className={classes.teacherPanel_course_text}>Software Testing</p>
        <div className={classes.teacherPanel_dot}></div>
        <p className={classes.teacherPanel_course_text}>Software Testing</p>
      </div>
      <button className={classes.logout_btn}>Logout</button>
      <div className={classes.sem_card_container}>
        <div className={classes.sem_card}>
          <span className={classes.sem_text}>Semester</span>
          <span className={classes.sem_number}>01</span>
          <img src={arrow} alt="Arrow" className={classes.arrow_image} />
        </div>
        <div className={classes.sem_card}>
          <span className={classes.sem_text}>Semester</span>
          <span className={classes.sem_number}>02</span>
          <img src={arrow} alt="Arrow" className={classes.arrow_image} />
        </div>
        <div className={classes.sem_card}>
          <span className={classes.sem_text}>Semester</span>
          <span className={classes.sem_number}>03</span>
          <img src={arrow} alt="Arrow" className={classes.arrow_image} />
        </div>
        <div className={classes.sem_card}>
          <span className={classes.sem_text}>Semester</span>
          <span className={classes.sem_number}>04</span>
          <img src={arrow} alt="Arrow" className={classes.arrow_image} />
        </div>
        <div className={classes.sem_card}>
          <span className={classes.sem_text}>Semester</span>
          <span className={classes.sem_number}>05</span>
          <img src={arrow} alt="Arrow" className={classes.arrow_image} />
        </div>
        <div className={classes.sem_card}>
          <span className={classes.sem_text}>Semester</span>
          <span className={classes.sem_number}>06</span>
          <img src={arrow} alt="Arrow" className={classes.arrow_image} />
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;
