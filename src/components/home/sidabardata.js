import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Reposrt",
    path: "/admin/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/admin/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/admin/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/admin/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
