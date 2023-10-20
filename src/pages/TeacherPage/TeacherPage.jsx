import React from "react";
import classes from "./TeacherPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import faceIcon from "../../assets/face_dark.png";

const TeacherPage = () => {
  return (
    <>
      <div className={classes.teacherPage_main}>
        <PageHeader navText="Teachers" addClick="" />
        <div className={classes.noTeachers_container}>
          <img src={faceIcon} alt="Icon" className={classes.teachers_icon} />
          <p className={classes.noTeachers_text}>
            No teachers added. Click '+' add teacher to each semester.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeacherPage;
