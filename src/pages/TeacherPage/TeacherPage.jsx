import React, { useState } from "react";
import classes from "./TeacherPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import faceIcon from "../../assets/face_dark.png";
import AddTeacherModal from "../../components/AddTeacherModal/AddTeacherModal";
import SelectSubjectModal from "../../components/SelectSubjectModal/SelectSubjectModal";

const TeacherPage = () => {
  const [addTeacher, setAddTeacher] = useState(false);
  const [selectSubject, setSelectSubject] = useState(false);

  const handleAddTeacherModal = () => {
    setAddTeacher(!addTeacher);
  };

  const handleSelectSubjectModal = () => {
    setSelectSubject(!selectSubject);
  };
  return (
    <>
      <div className={classes.teacherPage_main}>
        <PageHeader navText="Teachers" addClick={handleSelectSubjectModal} />
        <div className={classes.noTeachers_container}>
          <img src={faceIcon} alt="Icon" className={classes.teachers_icon} />
          <p className={classes.noTeachers_text}>
            No teachers added. Click '+' add teacher to each semester.
          </p>
        </div>
      </div>
      {/* {addTeacher && <AddTeacherModal handleModal={handleAddTeacherModal} />} */}
      {selectSubject && <SelectSubjectModal/>}
    </>
  );
};

export default TeacherPage;
