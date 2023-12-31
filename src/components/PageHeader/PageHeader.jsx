import React from "react";
import classes from "./PageHeader.module.css";
import administrator from "../../assets/administrator.png";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

const PageHeader = (props) => {
  const navigate = useNavigate();
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
        onClick={() => navigate("/")}
      >
        Home/{props.navText}
      </Button>
      <Stack direction="row" marginLeft="auto">
        {props.addClick && (
          <IconButton
            aria-label="AddIcon"
            sx={{ ":hover": { background: "#2B2930" }, marginLeft: "auto" }}
            onClick={props.addClick}
          >
            <AddIcon sx={{ color: "#CAC4D0", fontSize: 32 }} />
          </IconButton>
        )}
        <img src={administrator} alt="Icon" className={classes.administrator} />
      </Stack>
    </header>
  );
};

export default PageHeader;
