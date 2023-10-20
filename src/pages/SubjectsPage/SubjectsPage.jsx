import React, { useState } from "react";
import classes from "./SubjectsPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import menubook from "../../assets/menu_book_dark.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddSubjectModal from "../../components/AddSubjectModal/AddSubjectModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";

const SubjectsPage = () => {
  const [addSubject, setAddSubject] = useState(false);
  const [deleteSubject, setDeleteSubject] = useState(false);

  const handleAddSubjectModal = () => {
    setAddSubject(!addSubject);
  };

  const handleDeleteSubjectModal = () => {
    setDeleteSubject(!deleteSubject);
  };
  return (
    <>
      <div className={classes.subjectsPage_main}>
        <PageHeader navText="Subjects" addClick={handleAddSubjectModal} />
        {/* <div className={classes.noSub_container}>
        <img src={menubook} alt="Icon" className={classes.subject_icon} />
        <p className={classes.noSub_text}>
          No subjects added. Click '+' add subject to each semester.
        </p>
      </div> */}

        <div className={classes.subjects_container}>
          <div className={classes.each_sem_section}>
            <span className={classes.semester_label}>Semester 01</span>
            <div className={classes.subjects_card_container}>
              <div className={classes.subject_card}>
                <h2 className={classes.subject_name}>Computer Architecture</h2>
                <p className={classes.teacher_name}>Aagneya</p>
                {/* <p
              className={`${classes.teacher_name} ${classes.no_teacher_text}`}
            >
              No teacher assigned
            </p> */}
                <img
                  src={deleteIcon}
                  alt="Delete icon"
                  className={classes.delete_icon}
                  onClick={handleDeleteSubjectModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {addSubject && <AddSubjectModal handleModal={handleAddSubjectModal} />}
      {deleteSubject && (
        <InternalDeleteModal
          handleCancel={handleDeleteSubjectModal}
          heading="Delete subject"
          para="Are you sure you want to delete the subject?"
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default SubjectsPage;
