import React, { useState } from "react";
import classes from "./TeacherPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import faceIcon from "../../assets/face_dark.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddTeacherModal from "../../components/AddTeacherModal/AddTeacherModal";
import SelectSubjectModal from "../../components/SelectSubjectModal/SelectSubjectModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";

const TeacherPage = () => {
  const [addTeacher, setAddTeacher] = useState(false);
  const [selectSubject, setSelectSubject] = useState(false);
  const [deleteTeacher, setDeleteTeacher] = useState(false);

  const handleAddTeacherModal = () => {
    setAddTeacher(!addTeacher);
  };

  const handleSelectSubjectModal = () => {
    setSelectSubject(!selectSubject);
  };

  const deleteTeacherModal = () => {
    setDeleteTeacher(!deleteTeacher);
  };

  function nameReducer(str) {
    if (str.length <= 25) {
      return str;
    }
    return str.slice(0, 25) + "...";
  }
  return (
    <>
      <div className={classes.teacherPage_main}>
        <PageHeader navText="Teachers" addClick={handleSelectSubjectModal} />
        {/* <div className={classes.noTeachers_container}>
          <img src={faceIcon} alt="Icon" className={classes.teachers_icon} />
          <p className={classes.noTeachers_text}>
            No teachers added. Click '+' add teacher to each semester.
          </p>
        </div> */}
        <div className={classes.teacher_card_container}>
          <div className={classes.teacher_card}>
            <h5 className={classes.card_heading}>
              {nameReducer("Rathna Kumar")}
            </h5>
            <div className={classes.details_row}>
              <label htmlFor="username">username:</label>
              <span id="username" className={classes.card_content}>
                kumarratna
              </span>
            </div>
            <div className={classes.details_row}>
              <label htmlFor="username">password:</label>
              <span id="username" className={classes.card_content}>
                1234876
              </span>
            </div>
            <img
              src={deleteIcon}
              alt="Delete Icon"
              className={classes.delte_icon}
              onClick={deleteTeacherModal}
            />
          </div>
        </div>
      </div>
      {/* {addTeacher && <AddTeacherModal handleModal={handleAddTeacherModal} />} */}
      {selectSubject && (
        <SelectSubjectModal handleModal={handleSelectSubjectModal} />
      )}
      {deleteTeacher && (
        <InternalDeleteModal
          handleCancel={deleteTeacherModal}
          heading="Delete teacher"
          para="Are you sure you want to delete this teacher?"
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default TeacherPage;
