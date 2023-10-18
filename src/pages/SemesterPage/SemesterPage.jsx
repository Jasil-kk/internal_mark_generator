import React, { useState } from "react";
import classes from "./SemesterPage.module.css";
import administrator from "../../assets/administrator.png";
import semester from "../../assets/semester_grey.png";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import deleteIcon from "../../assets/delete_pink.svg";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import AddSemesterModal from "../../components/AddSemesterModal/AddSemesterModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";

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
        <div className={classes.semesterPage_header}>
          <Button
            variant="text"
            startIcon={<NavigateBeforeIcon />}
            sx={{ color: "#938F99", padding: "10px", fontSize: "13px" }}
          >
            Home/Semesters
          </Button>
          <IconButton
            aria-label="AddIcon"
            sx={{ ":hover": { background: "#2B2930" }, marginLeft: "auto" }}
            onClick={handleShowAddSemester}
          >
            <AddIcon sx={{ color: "#CAC4D0", fontSize: 32 }} />
          </IconButton>
          <img
            src={administrator}
            alt="Icon"
            className={classes.administrator}
          />
        </div>
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
