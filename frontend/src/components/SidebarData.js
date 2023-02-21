import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Welcome",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoIosPerson />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <FaIcons.FaCalendar />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <IoIcons.IoIosListBox />,
    cName: "nav-text",
  },
];