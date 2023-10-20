import React from "react";
import classes from "./PageHeader.module.css";
import administrator from "../../assets/administrator.png";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const PageHeader = (props) => {
  return (
    <header className={classes.semesterPage_header}>
      <Button
        variant="text"
        startIcon={<NavigateBeforeIcon />}
        sx={{
          color: "#938F99",
          padding: "10px",
          fontSize: "14px",
          textTransform: "capitalize",
        }}
      >
        Home/{props.navText}
      </Button>
      <IconButton
        aria-label="AddIcon"
        sx={{ ":hover": { background: "#2B2930" }, marginLeft: "auto" }}
        onClick={props.addClick}
      >
        <AddIcon sx={{ color: "#CAC4D0", fontSize: 32 }} />
      </IconButton>
      <img src={administrator} alt="Icon" className={classes.administrator} />
    </header>
  );
};

export default PageHeader;
