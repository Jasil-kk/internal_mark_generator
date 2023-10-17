import React from "react";
import classes from "./StudentList.module.css";
import menuBook from "../../assets/menu_book.svg";
import BackButton from "../../components/BackButton/BackButton";

const StudentList = () => {
  function truncateString(str) {
    if (str.length <= 30) {
      return str;
    }
    return str.slice(0, 30) + "...";
  }
  return (
    <div className={classes.studentList_main}>
      <BackButton />
      <img src={menuBook} alt="Icon" className={classes.icon_image} />
      <h2 className={classes.course_name}>Digital Computer Principle</h2>
      <p className={classes.sem_text}>Semester 01</p>
      <div className={classes.StudentList_text}>Students list</div>
      <span className={classes.noStudent_container}>
        No students have been added to this semester yet.
      </span>
      {/* <div className={classes.studentCard_container}>
        <div className={classes.studentCard}>
          <span className={classes.student_number}>01</span>
          <div className={classes.studentName_container}>
            <label className={classes.label_text}>Name</label>
            <h3 className={classes.name_text}>
              {truncateString("Tommy Vercetti")}
            </h3>
          </div>
          <span className={classes.reg_text}>Reg No: 367916</span>
        </div>
      </div> */}
    </div>
  );
};

export default StudentList;
