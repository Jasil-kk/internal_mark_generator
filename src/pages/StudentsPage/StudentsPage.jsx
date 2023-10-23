import React, { useState } from "react";
import classes from "./StudentsPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import school from "../../assets/school_dark.png";
import AddStudentModal from "../../components/AddStudentModal/AddStudentModal";

const StudentsPage = () => {
  const [addStudent,setAddStudent] = useState(false);

  const handleAddStudentModal = () => {
    setAddStudent(!addStudent);
  }
  return (
    <>
    <div className={classes.studentsPage_main}>
      <PageHeader navText="Students" addClick={handleAddStudentModal} />
      <div className={classes.noStudents_container}>
        <img src={school} alt="Icon" className={classes.students_icon} />
        <p className={classes.noStudents_text}>
          No students added. Click '+' add students to each semester.
        </p>
      </div>
    </div>
    {addStudent && <AddStudentModal handleModal={handleAddStudentModal}/>}
    </>
  );
};

export default StudentsPage;
