import React from "react";
import * as Icons from "assets/icons/index";
import classes from "components/components.module.css";

const LeftNavBar = () => {
  const MenuData = [
    {
      title: "Home",
      icon: Icons.HomeIcon,
    },
    {
      title: "Explore",
      icon: Icons.HashtagIcon,
    },
    {
      title: "Notifications",
      icon: Icons.BellIcon,
    },
    {
      title: "Messages",
      icon: Icons.MessageIcon,
    },
    {
      title: "Bookmarks",
      icon: Icons.BookmarkIcon,
    },
    {
      title: "Lists",
      icon: Icons.ListIcon,
    },
    {
      title: "Profile",
      icon: Icons.UserIcon,
    },
    {
      title: "More",
      icon: Icons.MoreIcon,
    },
  ];

  return (
    <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4 border-r-2 border-r-purple-800">
      <div className="sticky top-0 px-4 w-full">
        <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
          {MenuData.map((item, index) => (
            <li className="py-2" key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-1 cursor-pointer`}
              >
                <img
                  className={`${classes.icon} ${classes.iconColorBlack} mr-4 inline`}
                  src={item.icon}
                  alt=""
                />
                <span>
                  <p className="hidden sm:inline"> {item.title}</p>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNavBar;
