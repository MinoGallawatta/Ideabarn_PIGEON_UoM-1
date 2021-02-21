import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Dashboard",
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
    title: "Settings",
    path: "/Settings",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },


  {
    title: "Contacts",
    path: "/People",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text",
  },

  {
    title: "Templates",
    path: "/templates",
    icon: <IoIcons.IoMdPhotos />,
    cName: "nav-text",
  },

  {
    title: "Campaign",
    path: "/campaign",
    icon: <IoIcons.IoMdMegaphone />,
    cName: "nav-text",
  },


  {
    title: "Pricing",
    path: "/Pricing",
    icon: <IoIcons.IoIosPricetag />,
    cName: "nav-text",
  },



  {
    title: "Notes",
    path: "/NoteSection",
    icon: <IoIcons.IoIosBook />,
    cName: "nav-text",
  },


  {
    title: "Priority Management",
    path: "/Prioritymanagement",
    icon: <IoIcons.IoIosList />,
    cName: "nav-text",
  },

  
  {
    title: "Support",
    path: "/Support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
