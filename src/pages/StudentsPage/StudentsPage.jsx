import React, { useState } from "react";
import classes from "./StudentsPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import school from "../../assets/school_dark.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddStudentModal from "../../components/AddStudentModal/AddStudentModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const StudentsPage = () => {
  const [addStudent, setAddStudent] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddStudentModal = () => {
    setAddStudent(!addStudent);
  };

  const handleDeleteStudentModal = () => {
    setDeleteStudent(!deleteStudent);
  };

  function nameReducer(str) {
    if (str.length <= 25) {
      return str;
    }
    return str.slice(0, 25) + "...";
  }

  const filterItems = [
    "All Semesters",
    "Semester 01",
    "Semester 02",
    "Semester 03",
    "Semester 04",
    "Semester 05",
    "Semester 06",
  ];

  return (
    <>
      <div className={classes.studentsPage_main}>
        <PageHeader navText="Students" addClick={handleAddStudentModal} />
        {/* <div className={classes.noStudents_container}>
        <img src={school} alt="Icon" className={classes.students_icon} />
        <p className={classes.noStudents_text}>
          No students added. Click '+' add students to each semester.
        </p>
      </div> */}
        <Button
          sx={{
            marginLeft: "10%",
            color: "#E8DEF8",
            textTransform: "capitalize",
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={<FilterListIcon />}
          size="medium"
        >
          Filter by semester
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            style: {
              background: "#211F26",
              color: "#E6E0E9",
              minWidth: "200px",
              borderRadius: "5px",
              boxShadow: "none",
            },
          }}
        >
          {filterItems.map((item) => (
            <MenuItem
              key={item}
              sx={{ padding: "15px", ":hover": { background: "#2e2c31" } }}
              onClick={handleClose}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        <div className={classes.allStudents_container}>
          <div className={classes.each_sem_section}>
            <span className={classes.semester_label}>Semester 01</span>
            <div className={classes.student_card_container}>
              <div className={classes.student_card}>
                <h5 className={classes.card_heading}>
                  {nameReducer("Christopher Walken")}
                </h5>
                <div className={classes.details_row}>
                  <label htmlFor="rollNo" className={classes.card_label}>
                    Roll no. :
                  </label>
                  <span id="rollNo">19</span>
                </div>
                <div className={classes.details_row}>
                  <label htmlFor="regNo" className={classes.card_label}>
                    Reg no. :
                  </label>
                  <span id="regNo">36951767</span>
                </div>
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className={classes.delte_icon}
                  onClick={handleDeleteStudentModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {addStudent && <AddStudentModal handleModal={handleAddStudentModal} />}
      {deleteStudent && (
        <InternalDeleteModal
          handleCancel={handleDeleteStudentModal}
          heading="Delete student"
          para="Are you sure you want to delete the student?"
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default StudentsPage;
