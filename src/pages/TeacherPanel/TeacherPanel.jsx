import React, { useEffect, useState } from "react";
import classes from "./TeacherPanel.module.css";
import Face3Icon from "@mui/icons-material/Face3";
import IconButton from "@mui/material/IconButton";
import arrow from "../../assets/arrow_circle_right.svg";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import axiosApi from "../../AxiosMethod";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TeacherPanel = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const [details, setDetails] = useState({});
  const [semesters, setSemesters] = useState([]);
  const navigate = useNavigate();

  const teacherId = localStorage.getItem("id");
  const handleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("subjectType");
    localStorage.removeItem("subjectId");
    window.location.reload();
  };

  useEffect(() => {
    axiosApi
      .get(`/store/teacher/registration/${teacherId}/`)
      .then((response) => {
        setDetails(response.data);
      });
    axiosApi.get("/store/subject/").then((response) => {
      setSemesters(response.data);
    });
  }, []);

  console.log(semesters);
  const handleNavigate = (data) => {
    if (data?.id) {
      navigate(`/students/${data?.id}`);
    }
    if (data?.role) {
      localStorage.setItem("subjectType", data?.role);
    }
    if (data?.subjectId) {
      localStorage.setItem("subjectId", data?.subjectId);
    }
  };
  return (
    <>
      <div className={classes.teacherPanel_main}>
        <IconButton aria-label="Face3Icon" sx={{ marginTop: "5ch" }}>
          <Face3Icon sx={{ color: "#D0BCFF", fontSize: 60 }} />
        </IconButton>
        <h2 className={classes.teacherPanel_name_text}>{details?.full_name}</h2>
        <div className={classes.teacherPanel_course_container}>
          {details?.subject_name?.map((subject, index) => (
            <Chip
              key={index}
              label={subject}
              sx={{
                background: "#2d2d2e",
                color: "#c4c2c4",
                textTransform: "capitalize",
              }}
            />
          ))}
        </div>
        <LogoutBtn onClick={handleLogoutModal} />
        <div className={classes.sem_card_container}>
          {semesters?.map((semester) => (
            <div
              key={semester?.id}
              className={classes.sem_card}
              onClick={() =>
                handleNavigate({
                  id: semester?.semester,
                  role: semester?.role,
                  subjectId: semester?.id,
                })
              }
            >
              <span className={classes.sem_text}>Semester</span>
              <span className={classes.sem_number}>
                {semester?.semester_name.replace("semester ", "")}
              </span>
              <span className={classes.role_text}>{semester?.role}</span>
              <img src={arrow} alt="Arrow" className={classes.arrow_image} />
            </div>
          ))}
        </div>
      </div>
      {logoutModal && (
        <InternalDeleteModal
          handleAccept={handleLogout}
          handleCancel={handleLogoutModal}
          heading="Confirm logout"
          para="Are you sure you want to log out of your account?"
          cancelText="Cancel"
          acceptText="Logout"
        />
      )}
    </>
  );
};

export default TeacherPanel;
