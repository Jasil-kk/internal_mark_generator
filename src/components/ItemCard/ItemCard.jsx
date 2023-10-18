import React from "react";
import classes from "./ItemCard.module.css"

const ItemCard = (props) => {
  return (
    <div className={classes.item_card} onClick={props.onClick}>
      <div className={classes.first_sec}>
        <img src={props.backgroundIcon} alt="Icon"  className={classes.background_icon}/>
      </div>
      <div className={classes.second_sec}>
        <div className={classes.details}>
        <span className={classes.name_text}>{props.nameText}</span>
        <span className={classes.count_text}>{props.count}</span></div>
        <img src={props.labelIcon} alt="Icon" className={classes.label_icon}/>
      </div>
    </div>
  );
};

export default ItemCard;
