import React, { useEffect, useState } from "react";
import classes from "./SubjectsPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import menubook from "../../assets/menu_book_dark.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddSubjectModal from "../../components/AddSubjectModal/AddSubjectModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import axiosApi from "../../AxiosMethod";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SubjectsPage = () => {
  const [addSubject, setAddSubject] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [deleteSubject, setDeleteSubject] = useState(false);
  const [open, setOpen] = useState({ open: false, type: "info", text: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false, type: "", text: "" });
  };
  const handleAddSubjectModal = () => {
    setAddSubject(!addSubject);
  };

  const handleDeleteSubjectModal = (id) => {
    if (id) {
      setSubjectId(id);
    }
    setDeleteSubject(!deleteSubject);
  };

  // Subject Get
  useEffect(() => {
    axiosApi.get("/store/subject/").then((response) => {
      setSubjects(response.data);
    });
  }, []);

  const subjectsBySemester = subjects.reduce((acc, subject) => {
    const semesterName = subject.semester_name;
    if (!acc[semesterName]) {
      acc[semesterName] = [];
    }
    acc[semesterName].push(subject);
    return acc;
  }, {});

  // Subject Adding Function
  const handleAddSubject = (input) => {
    if (!input.semester || !input.name || !input.role) {
      setOpen({
        open: true,
        type: "warning",
        text: "Please fill in all the fields.",
      });
      return;
    }
    axiosApi
      .post("/store/subject/", input)
      .then((response) => {
        setOpen({
          open: true,
          type: "success",
          text: "Subject Added Successfully",
        });
        axiosApi.get("/store/subject/").then((response) => {
          setSubjects(response.data);
        });
        handleAddSubjectModal();
      })
      .catch((error) => {
        handleAddSubjectModal();
        setOpen({
          open: true,
          type: "error",
          text: "Adding Subject Failed",
        });
      });
  };

  // Subject Deleting Function
  const handleDeleteSubject = () => {
    axiosApi
      .delete(`/store/subject/${subjectId}/`)
      .then((response) => {
        setOpen({
          open: true,
          type: "success",
          text: "Subject Deleted Successfully",
        });
        axiosApi.get("/store/subject/").then((response) => {
          setSubjects(response.data);
        });
        handleDeleteSubjectModal();
      })
      .catch((error) => {
        handleDeleteSubjectModal();
        setOpen({
          open: true,
          type: "error",
          text: "Subject Deletion Failed",
        });
      });
  };

  return (
    <>
      <div className={classes.subjectsPage_main}>
        <PageHeader navText="Subjects" addClick={handleAddSubjectModal} />

        {subjects.length !== 0 ? (
          <div className={classes.subjects_container}>
            {Object.entries(subjectsBySemester).map(
              ([semesterName, semesterSubjects]) => (
                <div key={semesterName} className={classes.each_sem_section}>
                  <span className={classes.semester_label}>{semesterName}</span>
                  <div className={classes.subjects_card_container}>
                    {semesterSubjects.map((subject) => (
                      <div key={subject?.id} className={classes.subject_card}>
                        <h2 className={classes.subject_name}>
                          {subject?.name}
                        </h2>
                        <p className={classes.role_name}>{subject?.role}</p>
                        <img
                          src={deleteIcon}
                          alt="Delete icon"
                          className={classes.delete_icon}
                          onClick={() => handleDeleteSubjectModal(subject?.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className={classes.noSub_container}>
            <img src={menubook} alt="Icon" className={classes.subject_icon} />
            <p className={classes.noSub_text}>
              No subjects added. Click '+' add subject to each semester.
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
      {addSubject && (
        <AddSubjectModal
          handleAdd={handleAddSubject}
          handleModal={handleAddSubjectModal}
        />
      )}
      {deleteSubject && (
        <InternalDeleteModal
          handleAccept={handleDeleteSubject}
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
