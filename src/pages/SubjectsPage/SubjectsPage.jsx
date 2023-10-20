import React, { useState } from "react";
import classes from "./SubjectsPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import menubook from "../../assets/menu_book_dark.png";
import AddSubjectModal from "../../components/AddSubjectModal/AddSubjectModal";

const SubjectsPage = () => {
  const [addSubject, setAddSubject] = useState(false);

  const handleAddSubjectModal = () => {
    setAddSubject(!addSubject);
  };
  return (
    <>
    <div className={classes.subjectsPage_main}>
      <PageHeader navText="Subjects" addClick={handleAddSubjectModal} />
      <div className={classes.noSub_container}>
        <img src={menubook} alt="Icon" className={classes.subject_icon} />
        <p className={classes.noSub_text}>
          No subjects added. Click '+' add subject to each semester.
        </p>
      </div>
    </div>
    {addSubject && <AddSubjectModal handleModal={handleAddSubjectModal}/>}
    </>
  );
};

export default SubjectsPage;
