import React, { useEffect, useState } from "react";
import classes from "./StudentsPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import school from "../../assets/school_dark.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddStudentModal from "../../components/AddStudentModal/AddStudentModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import axiosApi from "../../AxiosMethod";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const StudentsPage = () => {
  const [addStudent, setAddStudent] = useState(false);
  const [students, setStudents] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [filterItem, setFilterItem] = useState("All Semesters");
  const [selectedMenuItem, setSelectedMenuItem] = useState("All Semesters");
  const [deleteStudent, setDeleteStudent] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "info",
    text: "",
  });

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ open: false });
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    if (id) {
      setFilterItem(id);
      setSelectedMenuItem(id);
      if (id === "All Semesters") {
        axiosApi.get("/store/student/add/").then((response) => {
          setStudents(response.data);
        });
      } else {
        axiosApi
          .get(`/store/student/add/?semester_id=${id}`)
          .then((response) => {
            setStudents(response.data);
          });
      }
    }
    setAnchorEl(null);
  };

  const handleAddStudentModal = () => {
    setAddStudent(!addStudent);
  };

  const handleDeleteStudentModal = (id) => {
    if (id) {
      setStudentId(id);
    }
    setDeleteStudent(!deleteStudent);
  };

  function nameReducer(str) {
    if (str.length <= 25) {
      return str;
    }
    return str.slice(0, 25) + "...";
  }

  useEffect(() => {
    axiosApi.get("/store/semester/").then((response) => {
      setSemesters(response.data);
    });
  }, [filterItem]);

  // Students Get
  useEffect(() => {
    if (filterItem === "All Semesters") {
      axiosApi.get("/store/student/add/").then((response) => {
        setStudents(response.data);
      });
    }
  }, []);

  const studentsBySemester = students.reduce((acc, student) => {
    const semesterName = student.semester_name;
    if (!acc[semesterName]) {
      acc[semesterName] = [];
    }
    acc[semesterName].push(student);
    return acc;
  }, {});

  // Filtering Student
  const handleGetStudent = () => {
    axiosApi.get(`/store/student/add/?semester_id=${1}`).then((response) => {
      console.log(response.data);
    });
  };

  // Students Adding Function
  const handleAddStudent = (input) => {
    if (
      !input.semester ||
      !input.name ||
      !input.register_number ||
      !input.roll_number
    ) {
      setSnackbar({
        open: true,
        type: "warning",
        text: "Please fill in all the fields.",
      });
      return;
    }

    axiosApi
      .post("/store/student/add/", input)
      .then((response) => {
        handleAddStudentModal();
        setSnackbar({
          open: true,
          type: "success",
          text: "Student Added Successfully",
        });
        axiosApi.get("/store/student/add/").then((response) => {
          setStudents(response.data);
        });
      })
      .catch((error) => {
        handleAddStudentModal();
        setSnackbar({
          open: true,
          type: "error",
          text: "Adding Student Failed",
        });
      });
  };

  // Students Deleting Function
  const handleDeleteStudent = () => {
    axiosApi
      .delete(`/store/student/add/${studentId}/`)
      .then((response) => {
        console.log(response.data);
        setSnackbar({
          open: true,
          type: "success",
          text: "Student Deleted Successfully",
        });
        axiosApi.get("/store/student/add/").then((response) => {
          setStudents(response.data);
        });
        handleDeleteStudentModal();
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          type: "error",
          text: "Deleting Student Failed",
        });
        handleDeleteStudentModal();
      });
  };

  return (
    <>
      <div className={classes.studentsPage_main}>
        <PageHeader navText="Students" addClick={handleAddStudentModal} />
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
            },
          }}
        >
          <MenuItem
            sx={{
              padding: "15px",
              ":hover": { background: "#2e2c31" },
              backgroundColor:
                selectedMenuItem === "All Semesters" ? "#3b3449" : "inherit",
            }}
            onClick={() => handleClose("All Semesters")}
          >
            All Semesters
          </MenuItem>
          {semesters.map((semester) => (
            <MenuItem
              key={semester?.id}
              sx={{
                padding: "15px",
                ":hover": { background: "#2e2c31" },
                backgroundColor:
                  selectedMenuItem === semester?.id ? "#3b3449" : "inherit",
              }}
              onClick={() => handleClose(semester?.id)}
            >
              {semester?.name}
            </MenuItem>
          ))}
        </Menu>
        {students.length !== 0 ? (
          <div className={classes.allStudents_container}>
            {Object.entries(studentsBySemester)
              .sort(([semesterNameA], [semesterNameB]) => {
                const semesterA = parseInt(semesterNameA.split(" ")[1]);
                const semesterB = parseInt(semesterNameB.split(" ")[1]);
                return semesterA - semesterB;
              })
              .map(([semesterName, studentDetails]) => (
                <div key={semesterName} className={classes.each_sem_section}>
                  <span className={classes.semester_label}>{semesterName}</span>
                  <div className={classes.student_card_container}>
                    {studentDetails.map((student) => (
                      <div key={student?.id} className={classes.student_card}>
                        <h5 className={classes.card_heading}>
                          {nameReducer(student?.name)}
                        </h5>
                        <div className={classes.details_row}>
                          <label
                            htmlFor="rollNo"
                            className={classes.card_label}
                          >
                            Roll no. :
                          </label>
                          <span id="rollNo">{student?.roll_number}</span>
                        </div>
                        <div className={classes.details_row}>
                          <label htmlFor="regNo" className={classes.card_label}>
                            Reg no. :
                          </label>
                          <span id="regNo">{student?.register_number}</span>
                        </div>
                        <img
                          src={deleteIcon}
                          alt="Delete Icon"
                          className={classes.delte_icon}
                          onClick={() => handleDeleteStudentModal(student?.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className={classes.noStudents_container}>
            <img src={school} alt="Icon" className={classes.students_icon} />
            <p className={classes.noStudents_text}>
              No students have been added to this semester yet. Click the "+"
              button to add students.
            </p>
          </div>
        )}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleSnackClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity={snackbar.type}
            sx={{ width: "100%" }}
          >
            {snackbar.text}
          </Alert>
        </Snackbar>
      </div>
      {addStudent && (
        <AddStudentModal
          handleAdd={handleAddStudent}
          handleModal={handleAddStudentModal}
        />
      )}
      {deleteStudent && (
        <InternalDeleteModal
          handleAccept={handleDeleteStudent}
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
