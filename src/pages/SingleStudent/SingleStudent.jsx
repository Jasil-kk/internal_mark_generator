import React, { useState } from "react";
import classes from "./SingleStudent.module.css";
import BackButton from "../../components/BackButton/BackButton";
import AddIcon from "@mui/icons-material/Add";
import deleteIcon from "../../assets/delete_icon.svg";
import InternalMarkModal from "../../components/InternalMarkModal/InternalMarkModal";
import ScoreBox from "../../components/ScoreBox/ScoreBox";

const SingleStudent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className={classes.singleStudent_main}>
        <BackButton />
        <div className={classes.SingleStudent_card}>
          <span className={classes.student_number}>01</span>
          <div className={classes.studentName_container}>
            <label className={classes.label_text}>Name</label>
            <h3 className={classes.name_text}>Tommy Vercetti</h3>
          </div>
          <span className={classes.reg_text}>Reg No: 367916</span>
        </div>
        <button className={classes.add_btn} onClick={handleModal}>
          <AddIcon sx={{ color: "#381E72", fontSize: 20 }} /> Add Internal Mark
        </button>
        <div className={classes.internal_mark_container}>
          {/* <p className={classes.noItem_text}>
            No internal mark added. Click '+ Add Internal Mark' to start.
          </p> */}

          <div className={classes.internaml_mark_container}>
            <div className={classes.internaml_mark_card}>
              <h3 className={classes.heading_text}>Internal Mark</h3>
              <span className={classes.mark_text}>47</span>
              <div className={classes.mark_container}>
                <div className={classes.first_section}>
                  <label htmlFor="" className={classes.internal_mark_label}>
                    Series exam marks
                  </label>
                  <div className={classes.row_container}>
                    <ScoreBox labelText="SE1" markText="25" />
                    <ScoreBox labelText="SE2" markText="18" />
                    <ScoreBox labelText="SE3" markText="16" />
                  </div>
                  <label htmlFor="" className={classes.internal_mark_label}>
                    Assignment marks
                  </label>
                  <div className={classes.row_container}>
                    <ScoreBox labelText="ASSG1" markText="18" />
                    <ScoreBox labelText="ASSG2" markText="17" />
                    <ScoreBox labelText="ASSG3" markText="18" />
                  </div>
                  <label htmlFor="" className={classes.internal_mark_label}>
                    Attendance in percentage
                  </label>
                  <ScoreBox markText="90%" />
                </div>
              </div>
            </div>
            <img
              src={deleteIcon}
              alt="Delete"
              className={classes.delete_icon}
            />
          </div>
        </div>
      </div>
      {showModal && <InternalMarkModal handleModal={handleModal} />}
    </>
  );
};

export default SingleStudent;
