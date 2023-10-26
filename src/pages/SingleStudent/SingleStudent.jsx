import React, { useEffect, useState } from "react";
import classes from "./SingleStudent.module.css";
import BackButton from "../../components/BackButton/BackButton";
import AddIcon from "@mui/icons-material/Add";
import deleteIcon from "../../assets/delete_icon.svg";
import InternalMarkModal from "../../components/InternalMarkModal/InternalMarkModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import InternalMarkModal2 from "../../components/InternalMarkModal2/InternalMarkModal2";
import InternalMarkCard from "../../components/InternalMarkCard/InternalMarkCard";
import InternalMarkCard2 from "../../components/InternalMarkCard/InternalMarkCard2";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../AxiosMethod";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SingleStudent = () => {
  const [details, setDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [internalMark, setInternalMark] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [open, setOpen] = useState({ open: false, type: "info", text: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({ open: false });
  };

  const studentId = params.studentId;
  const semesterId = params.id;
  const subjectType = localStorage.getItem("subjectType");
  const subjectId = localStorage.getItem("subjectId");

  const handleInternalMarkModal = () => {
    if (subjectType === "Lab") {
      setShowModal2(!showModal2);
    } else {
      setShowModal(!showModal);
    }
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  useEffect(() => {
    axiosApi.get(`/store/student/add/${studentId}/`).then((response) => {
      setDetails(response.data);
    });
  }, []);

  const formatCountWithLeadingZeros = (count) => {
    return count?.toString().padStart(2, "0");
  };

  useEffect(() => {
    if (subjectType === "Lab") {
      axiosApi
        .get(
          `/store/lab/internalmark/?student_id=${details?.id}&subject_id=${subjectId}`
        )
        .then((response) => {
          console.log(response.data);
          setInternalMark(response.data);
        });
    } else {
      axiosApi
        .get(
          `/store/theory/internalmark/?student_id=${details?.id}&subject_id=${subjectId}`
        )
        .then((response) => {
          console.log(response.data);
          setInternalMark(response.data);
        });
    }
  }, []);

  // Internal Mark Adding Function
  const handleAddLabMark = (input) => {
    if (
      !input.test1 ||
      !input.test2 ||
      !input.roughRecordMark ||
      !input.fairRecordMark ||
      !input.labWorkMark ||
      !input.openEndedMark ||
      !input.attendanceInMark
    ) {
      setOpen({
        open: true,
        type: "warning",
        text: "Please fill in all the fields.",
      });
      return;
    }
    const data = {
      student: details?.id,
      subject: subjectId,
      semester: semesterId,
      test1: input.test1,
      test2: input.test2,
      rough_record_mark: input.roughRecordMark,
      fair_record_mark: input.fairRecordMark,
      lab_work_mark: input.labWorkMark,
      open_ended_mark: input.openEndedMark,
      attendance_mark: input.attendanceInMark,
    };
    axiosApi
      .post("/store/lab/internalmark/", data)
      .then((response) => {
        console.log(response.data);
        setOpen({
          open: true,
          type: "success",
          text: "Internal Mark Added Successfully",
        });
        axiosApi
          .get(
            `/store/lab/internalmark/?student_id=${details?.id}&subject_id=${subjectId}`
          )
          .then((response) => {
            setInternalMark(response.data);
          });
      })
      .catch((error) => {
        setOpen({
          open: true,
          type: "error",
          text: "Internal Mark Adding Failed",
        });
      });
  };

  // Internal Mark Deleting Function
  const handleDeleteIntenalMark = () => {
    if (subjectType === "Lab") {
      axiosApi.delete(`/store/lab/internalmark/${id}`).then((response) => {
        console.log(response);
      });
    } else {
      axiosApi.delete(`/store/theory/internalmark/${id}`).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <>
      <div className={classes.singleStudent_main}>
        <BackButton onClick={() => navigate(`/students/${semesterId}`)} />
        <div className={classes.SingleStudent_card}>
          <span className={classes.student_number}>
            {formatCountWithLeadingZeros(details?.roll_number)}
          </span>
          <div className={classes.studentName_container}>
            <span className={classes.label_text}>Name</span>
            <h3 className={classes.name_text}>{details?.name}</h3>
          </div>
          <span className={classes.reg_text}>
            Reg No: {details?.register_number}
          </span>
        </div>
        {internalMark.length === 0 && (
          <button className={classes.add_btn} onClick={handleInternalMarkModal}>
            <AddIcon sx={{ color: "#381E72", fontSize: 20 }} /> Add Internal
            Mark
          </button>
        )}
        <div className={classes.internal_mark_section}>
          {internalMark.length !== 0 ? (
            <div className={classes.internal_mark_container}>
              {subjectType === "Lab" ? (
                <InternalMarkCard2 internalMark={internalMark} />
              ) : (
                <InternalMarkCard />
              )}
              <img
                src={deleteIcon}
                alt="Delete"
                className={classes.delete_icon}
                onClick={handleDeleteModal}
              />
            </div>
          ) : (
            <p className={classes.noItem_text}>
              No internal mark added. Click '+ Add Internal Mark' to start.
            </p>
          )}
        </div>
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
      {showModal && (
        <InternalMarkModal handleModal={() => setShowModal(!showModal)} />
      )}
      {showModal2 && (
        <InternalMarkModal2
          handleSubmit={handleAddLabMark}
          handleModal={() => setShowModal2(!showModal2)}
        />
      )}
      {showDeleteModal && (
        <InternalDeleteModal
          handleCancel={handleDeleteModal}
          heading="Remove added mark"
          para="Are you sure you want to remove the mark you added earlier? You can
          always add it again to display the mark for the student."
          cancelText="Cancel"
          acceptText="Delete"
        />
      )}
    </>
  );
};

export default SingleStudent;
