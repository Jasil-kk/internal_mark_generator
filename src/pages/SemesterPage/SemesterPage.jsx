import React, { useState } from "react";
import classes from "./SemesterPage.module.css";
import semester from "../../assets/semester_grey.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddSemesterModal from "../../components/AddSemesterModal/AddSemesterModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import PageHeader from "../../components/PageHeader/PageHeader";

const SemesterPage = () => {
  const [addSemester, setAddSemester] = useState(false);
  const [deleteSemester, setDeleteSemester] = useState(false);

  const handleShowAddSemester = () => {
    setAddSemester(!addSemester);
  };
  const handleDeleteSemester = () => {
    setDeleteSemester(!deleteSemester);
  };
  return (
    <>
      <div className={classes.semesterPage_main}>
      <PageHeader navText="Semesters" addClick={handleShowAddSemester}/>
        {/* <div className={classes.noSem_container}>
          <img src={semester} alt="Icon" className={classes.semester_icon} />
          <p className={classes.noSem_text}>
            No semesters added. Click '+' add semesters.
          </p>
        </div> */}
        <div className={classes.sem_card_container}>
          <div className={classes.sem_card}>
            <h5 className={classes.card_heading}>Semester 01</h5>
            <span className={classes.card_content}>0 Subjects</span>
            <span className={classes.card_content}>0 Teachers</span>
            <span className={classes.card_content}>0 Students</span>
            <img
              src={deleteIcon}
              alt="Delete Icon"
              className={classes.delte_icon}
              onClick={handleDeleteSemester}
            />
          </div>
        </div>
      </div>
      {addSemester && <AddSemesterModal handleModal={handleShowAddSemester} />}
      {deleteSemester && (
        <InternalDeleteModal
          handleCancel={handleDeleteSemester}
          heading="Delete semester"
          para="Deleting the semester 01 will delete all the subjects and students associated with the semester."
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default SemesterPage;
