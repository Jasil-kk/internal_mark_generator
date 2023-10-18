import React, { useState } from "react";
import classes from "./SemesterPage.module.css";
import administrator from "../../assets/administrator.png";
import semester from "../../assets/semester_grey.png";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import AddSemesterModal from "../../components/AddSemesterModal/AddSemesterModal";

const SemesterPage = () => {
  const [addSemester, setAddSemester] = useState(false);

  const handleShowAddSemester = () => {
    setAddSemester(!addSemester);
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
        <div className={classes.noSem_container}>
          <img src={semester} alt="Icon" className={classes.semester_icon} />
          <p className={classes.noSem_text}>
            No semesters added. Click '+' add semesters.
          </p>
        </div>
      </div>
      {addSemester && <AddSemesterModal handleModal={handleShowAddSemester} />}
    </>
  );
};

export default SemesterPage;
