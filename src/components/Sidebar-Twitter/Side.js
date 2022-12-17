import React from "react";
import MoreItem from "./MoreItem";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ChatIcon from "@mui/icons-material/Chat";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BrushIcon from "@mui/icons-material/Brush";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import "./style.css";
const Side = () => {
  return (
    <div className="more-item">
      <MoreItem text="Bookmarks" Icon={BookmarkBorderIcon} />
      <MoreItem text="List" Icon={ListAltIcon} />
      <MoreItem text="Analytics" Icon={AnalyticsIcon} />
      <MoreItem text="Topic" Icon={ChatIcon} />
      <MoreItem text="Twitter Ads" Icon={NorthEastIcon} />
      <MoreItem text="List" Icon={ListAltIcon} />
      <MoreItem text="Settings" Icon={SettingsIcon} />
      <MoreItem text="Help center" Icon={HelpOutlineIcon} />
      <MoreItem text="Display" Icon={BrushIcon} />
      <MoreItem text="Keyboard shortcuts" Icon={AccessibilityIcon} />
    </div>
  );
};

export default Side;
