import React, { useState } from "react";
import classes from "./AdminPanel.module.css";
import adminIcon from "../../assets/admin_icon.svg";
import visiblity from "../../assets/visibility.svg";
import face from "../../assets/face.png";
import menuBook from "../../assets/menu_book.png";
import bookmark from "../../assets/bookmark.svg";
import school from "../../assets/school.png";
import summarize from "../../assets/summarize.png";
import noteStack from "../../assets/semester.png";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import ItemCard from "../../components/ItemCard/ItemCard";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <div className={classes.adminPanel_main}>
        <img src={adminIcon} alt="Icon" className={classes.admin_icon} />
        <h1 className={classes.heading_text}>Administrator</h1>
        <p className={classes.para_text}>
          ©Internal Mark Generator for Diploma Revision 2021
        </p>
        <LogoutBtn onClick={handleLogoutModal} />
        <div className={classes.item_card_container}>
          <ItemCard
            backgroundIcon={noteStack}
            nameText="Semesters"
            count="06"
            labelIcon={bookmark}
            onClick={() => navigate("/semesters")}
          />
          <ItemCard
            backgroundIcon={menuBook}
            nameText="Subjects"
            count="64"
            labelIcon={bookmark}
            onClick={() => navigate("/subjects")}
          />
          <ItemCard
            backgroundIcon={face}
            nameText="Teachers"
            count="14"
            labelIcon={bookmark}
            onClick={() => navigate("/teachers")}
          />
          <ItemCard
            backgroundIcon={school}
            nameText="Students"
            count="326"
            labelIcon={bookmark}
            onClick={() => navigate("/students")}
          />
          <ItemCard
            backgroundIcon={summarize}
            nameText="Internal Mark"
            count="Report"
            labelIcon={visiblity}
            onClick={() => navigate("/internalMarks")}
          />
        </div>
      </div>
      {logoutModal && (
        <InternalDeleteModal
          handleAccept={handleLogout}
          handleCancel={handleLogoutModal}
          heading="Confirm logout"
          para="Are you sure you want to log out of your account?"
          cancelText="Cancel"
          acceptText="Logout"
        />
      )}
    </>
  );
};

export default AdminPanel;
