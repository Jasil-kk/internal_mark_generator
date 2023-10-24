import React from 'react'
import classes from "./SubmitButton.module.css"

const SubmitButton = (props) => {
  return (
    <div>
        <button className={classes.login_btn} onClick={props.onClick} disabled={props.disabled && true}>{props.text}</button>
    </div>
  )
}

export default SubmitButton