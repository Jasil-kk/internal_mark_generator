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

    setOpen({ open: false, type: "", text: "" });
  };

  const handleShowAddSemester = () => {
    setAddSemester(!addSemester);
  };
  const handleDeleteSemesterModal = (semester) => {
    if (semester) {
      setSingleSemester({
        ...singleSemester,
        semesterId: semester?.semester_id,
        semesterName: semester?.semester_name,
      });
    }
    setDeleteSemester(!deleteSemester);
  };

  // Semester Getting
  useEffect(() => {
    axiosApi.get("/store/admin/semester_counts/").then((response) => {
      setSemesters(response.data);
    });
  }, []);

  // Semester Adding Function
  const handleAddSemester = (semester) => {
    const semesterNameExists = semesters.some(
      (s) => s.semester_name === semester
    );

    if (semesterNameExists) {
      setOpen({
        open: true,
        type: "warning",
        text: "Semester with the same name already exists",
      });
      return;
    }
    axiosApi
      .post("/store/semester/", { name: semester })
      .then((response) => {
        handleShowAddSemester();
        setOpen({
          open: true,
          type: "success",
          text: "Semester Added Successfully",
        });
        axiosApi.get("/store/admin/semester_counts/").then((response) => {
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
      .delete(`/store/semester/${singleSemester.semesterId}/`)
      .then((response) => {
        axiosApi.get("/store/admin/semester_counts/").then((response) => {
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
        handleDeleteSemesterModal();
        setOpen({
          open: true,
          type: "error",
          text: "Semester Deletion Failed",
        });
      });
  };

  const formatCountWithLeadingZeros = (count) => {
    return count.toString().padStart(2, "0");
  };
  return (
    <>
      <div className={classes.semesterPage_main}>
        <PageHeader navText="Semesters" addClick={handleShowAddSemester} />
        {semesters.length !== 0 ? (
          <div className={classes.sem_card_container}>
            {semesters?.map((semester) => (
              <div key={semester?.semester_id} className={classes.sem_card}>
                <h5 className={classes.card_heading}>
                  {semester?.semester_name}
                </h5>
                <span className={classes.card_content}>
                  {formatCountWithLeadingZeros(semester?.subjects_count)}{" "}
                  Subjects
                </span>
                <span className={classes.card_content}>
                  {formatCountWithLeadingZeros(semester?.teachers_count)}{" "}
                  Teachers
                </span>
                <span className={classes.card_content}>
                  {formatCountWithLeadingZeros(semester?.students_count)}{" "}
                  Students
                </span>
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
          semesters={semesters}
        />
      )}
      {deleteSemester && (
        <InternalDeleteModal
          handleAccept={handleDeleteSemester}
          handleCancel={handleDeleteSemesterModal}
          heading="Delete semester"
          para={`Deleting the ${singleSemester?.semesterName} will delete all the subjects and students associated with the semester.`}
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default SemesterPage;
