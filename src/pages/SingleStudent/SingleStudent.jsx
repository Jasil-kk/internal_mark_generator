import React, { useState } from "react";
import classes from "./SingleStudent.module.css";
import BackButton from "../../components/BackButton/BackButton";
import AddIcon from "@mui/icons-material/Add";
import deleteIcon from "../../assets/delete_icon.svg";
import InternalMarkModal from "../../components/InternalMarkModal/InternalMarkModal";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import InternalMarkModal2 from "../../components/InternalMarkModal2/InternalMarkModal2";
import InternalMarkCard from "../../components/InternalMarkCard/InternalMarkCard";
import InternalMarkCard2 from "../../components/InternalMarkCard/InternalMarkCard2";

const SingleStudent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleModal2 = () => {
    setShowModal2(!showModal2);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  return (
    <>
      <div className={classes.singleStudent_main}>
        <BackButton />
        <div className={classes.SingleStudent_card}>
          <span className={classes.student_number}>01</span>
          <div className={classes.studentName_container}>
            <span className={classes.label_text}>Name</span>
            <h3 className={classes.name_text}>Tommy Vercetti</h3>
          </div>
          <span className={classes.reg_text}>Reg No: 367916</span>
        </div>
        {/* <button className={classes.add_btn} onClick={handleModal2}>
          <AddIcon sx={{ color: "#381E72", fontSize: 20 }} /> Add Internal Mark
        </button> */}
        <div className={classes.internal_mark_section}>
          {/* <p className={classes.noItem_text}>
            No internal mark added. Click '+ Add Internal Mark' to start.
          </p> */}

          <div className={classes.internal_mark_container}>
            {/* <InternalMarkCard /> */}
            <InternalMarkCard2 />
            <img
              src={deleteIcon}
              alt="Delete"
              className={classes.delete_icon}
              onClick={handleDeleteModal}
            />
          </div>
        </div>
      </div>
      {showModal && <InternalMarkModal handleModal={handleModal} />}
      {showModal2 && <InternalMarkModal2 handleModal={handleModal2} />}
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
