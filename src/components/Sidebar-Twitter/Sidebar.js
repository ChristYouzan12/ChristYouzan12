import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SidebarLink from "./SidebarLink";
import "./style.css";
import { useState } from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Sidebar = () => {
  const Btn = styled.button`
    border: none;
    background: none;

    &:hover {
      border-radius: 20px;
    }
  `;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("works");
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sidebar">
      <SidebarLink text="Home" Icon={HomeIcon} />
      <SidebarLink text="Search" Icon={SearchIcon} />
      <SidebarLink text="  Notifications" Icon={NotificationsNoneIcon} />
      <SidebarLink text="  Messages" Icon={MailOutlineIcon} />
      <SidebarLink text="   Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarLink text=" Lists" Icon={ListAltIcon} />
      <SidebarLink text="   Profile" Icon={PersonOutlineIcon} />
      <Btn onClick={handleOpen}>
        <SidebarLink text="More" Icon={MoreHorizIcon} />
      </Btn>
      <button id="btn"> Tweet</button>

      <Menu id="long-menu" open={open} onClose={handleClose}>
        <MenuItem></MenuItem>
      </Menu>
    </div>
  );
};

export default Sidebar;
