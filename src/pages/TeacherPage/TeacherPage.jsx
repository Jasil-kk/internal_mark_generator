import React, { useEffect, useState } from "react";
import classes from "./TeacherPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import faceIcon from "../../assets/face_dark.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddTeacherModal from "../../components/AddTeacherModal/AddTeacherModal";
import SelectSubjectModal from "../../components/SelectSubjectModal/SelectSubjectModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import axiosApi from "../../AxiosMethod";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const TeacherPage = () => {
  const [addTeacher, setAddTeacher] = useState(false);
  const [selectSubject, setSelectSubject] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [teacherDetails, setTeacherDetails] = useState({
    full_name: "",
    username: "",
    password: "",
    subject: [],
  });
  const [deleteTeacher, setDeleteTeacher] = useState(false);
  const [open, setOpen] = useState({ open: false, type: "info", text: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false });
  };

  const handleAddTeacherModal = () => {
    setAddTeacher(!addTeacher);
  };

  const handleSelectSubjectModal = () => {
    setSelectSubject(!selectSubject);
  };

  const deleteTeacherModal = (id) => {
    if (id) {
      setTeacherId(id);
    }
    setDeleteTeacher(!deleteTeacher);
  };

  function nameReducer(str) {
    if (str.length <= 25) {
      return str;
    }
    return str.slice(0, 25) + "...";
  }

  // Teachers Getting
  useEffect(() => {
    axiosApi.get("/store/teacher/registration/").then((response) => {
      setTeachers(response.data);
    });
  }, []);

  // Teacher Adding Functions
  const handleGetDetails = (data) => {
    if (!data.fullName || !data.userName || !data.password) {
      setOpen({
        open: true,
        type: "warning",
        text: "Please fill in all the fields.",
      });
      return;
    }
    setTeacherDetails({
      ...teacherDetails,
      full_name: data.fullName,
      username: data.userName,
      password: data.password,
    });
    handleAddTeacherModal();
    handleSelectSubjectModal();
  };

  const handleAddTeacher = (input) => {
    if (!input || input.length === 0) {
      setOpen({
        open: true,
        type: "error",
        text: "Please select a subject.",
      });
      return; 
    }
    const data = {
      full_name: teacherDetails.full_name,
      username: teacherDetails.username,
      password: teacherDetails.password,
      subject: input,
    };

    axiosApi
      .post("/store/teacher/registration/", data)
      .then((response) => {
        setOpen({
          open: true,
          type: "success",
          text: "Teacher Added Successfully!",
        });
        axiosApi.get("/store/teacher/registration/").then((response) => {
          setTeachers(response.data);
        });
        handleSelectSubjectModal();
      })
      .catch((error) => {
        setOpen({
          open: true,
          type: "error",
          text: "Adding Teacher Failed!",
        });
        handleSelectSubjectModal();
      });
  };

  // Teacher Deleting Function
  const handleDeleteTeacher = () => {
    axiosApi
      .delete(`/store/teacher/registration/${teacherId}/`)
      .then((response) => {
        setOpen({
          open: true,
          type: "success",
          text: "Teacher Deleted Successfully!",
        });
        axiosApi.get("/store/teacher/registration/").then((response) => {
          setTeachers(response.data);
        });
        deleteTeacherModal();
      })
      .catch((error) => {
        setOpen({
          open: true,
          type: "error",
          text: "Teacher Deleting Failed!",
        });
        deleteTeacherModal();
      });
  };

  return (
    <>
      <div className={classes.teacherPage_main}>
        <PageHeader navText="Teachers" addClick={handleAddTeacherModal} />

        {teachers.length !== 0 ? (
          <div className={classes.teacher_card_container}>
            {teachers?.map((teacher) => (
              <div key={teacher?.id} className={classes.teacher_card}>
                <h5 className={classes.card_heading}>
                  {nameReducer(teacher?.full_name)}
                </h5>
                <div className={classes.details_row}>
                  <label htmlFor="username">username:</label>
                  <span id="username" className={classes.card_content}>
                    {teacher?.username}
                  </span>
                </div>
                <div className={classes.details_row}>
                  <label htmlFor="password">password:</label>
                  <span id="password" className={classes.card_content}>
                    {teacher?.copy_pass}
                  </span>
                </div>
                <div className={classes.subjectList_row}>
                  <label htmlFor="subjects">subjects:</label>
                  <ul id="subjects" className={classes.subjectList_container}>
                    {teacher?.subject_name.map((subject, index) => (
                      <li key={index} className={classes.subjectList}>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className={classes.delte_icon}
                  onClick={() => deleteTeacherModal(teacher?.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.noTeachers_container}>
            <img src={faceIcon} alt="Icon" className={classes.teachers_icon} />
            <p className={classes.noTeachers_text}>
              No teachers added. Click '+' add teacher to each semester.
            </p>
          </div>
        )}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open.open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={open.type}
            sx={{ width: "100%" }}
          >
            {open.text}
          </Alert>
        </Snackbar>
      </div>
      {addTeacher && (
        <AddTeacherModal
          handleSubmit={handleGetDetails}
          handleModal={handleAddTeacherModal}
        />
      )}
      {selectSubject && (
        <SelectSubjectModal
          handleSubmit={handleAddTeacher}
          handleModal={handleSelectSubjectModal}
        />
      )}
      {deleteTeacher && (
        <InternalDeleteModal
          handleAccept={handleDeleteTeacher}
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
