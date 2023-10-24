import React, { useEffect, useState } from "react";
import classes from "./SemesterPage.module.css";
import semester from "../../assets/semester_grey.png";
import deleteIcon from "../../assets/delete_pink.svg";
import AddSemesterModal from "../../components/AddSemesterModal/AddSemesterModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import PageHeader from "../../components/PageHeader/PageHeader";
import axiosApi from "../../AxiosMethod";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SemesterPage = () => {
  const [semesters, setSemesters] = useState([]);
  const [singleSemester, setSingleSemester] = useState({
    semesterId: "",
    semesterName: "",
  });
  const [addSemester, setAddSemester] = useState(false);
  const [deleteSemester, setDeleteSemester] = useState(false);
  const [open, setOpen] = useState({ open: false, type: "info", text: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false });
  };

  const handleShowAddSemester = () => {
    setAddSemester(!addSemester);
  };
  const handleDeleteSemesterModal = (semester) => {
    if (semester) {
      setSingleSemester({
        ...singleSemester,
        semesterId: semester?.id,
        semesterName: semester?.name,
      });
    }
    setDeleteSemester(!deleteSemester);
  };

  // Semester Getting
  useEffect(() => {
    axiosApi.get("/store/semester/").then((response) => {
      setSemesters(response.data);
    });
  }, []);

  // Semester Adding Function
  const handleAddSemester = (semester) => {
    console.log(semester);
    axiosApi
      .post("/store/semester/", { name: semester })
      .then((response) => {
        handleShowAddSemester();
        setOpen({
          open: true,
          type: "success",
          text: "Semester Added Successfully",
        });
        axiosApi.get("/store/semester/").then((response) => {
          setSemesters(response.data);
        });
      })
      .catch((error) => {
        setOpen({
          open: true,
          type: "error",
          text: "Semester Adding failed",
        });
        handleShowAddSemester();
      });
  };

  // Semester Deleting Function
  const handleDeleteSemester = () => {
    axiosApi
      .delete(`/store/semester/${singleSemester.semesterId}`)
      .then((response) => {
        axiosApi.get("/store/semester/").then((response) => {
          setSemesters(response.data);
        });
        handleDeleteSemesterModal();
        setOpen({
          open: true,
          type: "success",
          text: "Semester Deleted Successfully",
        });
      })
      .catch((error) => {
        console.error("Error", error);
        handleDeleteSemesterModal();
        setOpen({
          open: true,
          type: "error",
          text: "Semester Deletion Failed",
        });
      });
  };

  const checkedSemName = (name) => {
    let formattedName = "";
    if (name === "first semester") {
      formattedName = "semester 01";
    }
    if (name === "second semester") {
      formattedName = "semester 02";
    }
    if (name === "third semester") {
      formattedName = "semester 03";
    }
    if (name === "fourth semester") {
      formattedName = "semester 04";
    }
    if (name === "fifth semester") {
      formattedName = "semester 05";
    }
    if (name === "sixth semester") {
      formattedName = "semester 06";
    }
    return formattedName;
  };
  return (
    <>
      <div className={classes.semesterPage_main}>
        <PageHeader navText="Semesters" addClick={handleShowAddSemester} />
        {semesters.length !== 0 ? (
          <div className={classes.sem_card_container}>
            {semesters?.map((semester) => (
              <div key={semester?.id} className={classes.sem_card}>
                <h5 className={classes.card_heading}>
                  {checkedSemName(semester?.name)}
                </h5>
                <span className={classes.card_content}>0 Subjects</span>
                <span className={classes.card_content}>0 Teachers</span>
                <span className={classes.card_content}>0 Students</span>
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className={classes.delte_icon}
                  onClick={() => handleDeleteSemesterModal(semester)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.noSem_container}>
            <img src={semester} alt="Icon" className={classes.semester_icon} />
            <p className={classes.noSem_text}>
              No semesters added. Click '+' add semesters.
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
      {addSemester && (
        <AddSemesterModal
          handleAdd={handleAddSemester}
          handleModal={handleShowAddSemester}
        />
      )}
      {deleteSemester && (
        <InternalDeleteModal
          handleAccept={handleDeleteSemester}
          handleCancel={handleDeleteSemesterModal}
          heading="Delete semester"
          para={`Deleting the ${checkedSemName(
            singleSemester?.semesterName
          )} will delete all the subjects and students associated with the semester.`}
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default SemesterPage;
