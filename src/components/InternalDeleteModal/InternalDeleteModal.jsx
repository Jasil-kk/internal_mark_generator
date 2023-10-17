import React from "react";
import classes from "./InternalDeleteModal.module.css";

const InternalDeleteModal = (props) => {
  return (
    <div className={classes.internalDeleteModal_main}>
      <div className={classes.internalDeleteModal_card}>
        <h2 className={classes.heading_text}>{props.heading}</h2>
        <p className={classes.para_text}>
          {props.para}
        </p>
        <div className={classes.actions}>
          <button className={`${classes.action_btn} ${classes.cancel_btn}`} onClick={props.handleCancel}>
            {props.cancelText}
          </button>
          <button className={`${classes.action_btn} ${classes.delete_btn}`}>
            {props.acceptText}
          </button>
        </div>
      </div>
      <div className={classes.modal_closer} onClick={props.handleCancel}></div>
    </div>
  );
};

export default InternalDeleteModal;
