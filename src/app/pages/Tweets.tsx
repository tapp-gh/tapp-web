import React from "react";
import {
  UserIcon,
  BellIcon,
  BookmarkIcon,
  HashtagIcon,
  HomeIcon,
  ListIcon,
  MessageIcon,
  MoreIcon,
  BackIcon,
} from "assets/icons/index";
import classes from "./Tweets.module.css";

const Tweets = () => {
  const MenuData = [
    {
      title: "Home",
      icon: HomeIcon,
    },
    {
      title: "Explore",
      icon: HashtagIcon,
    },
    {
      title: "Notifications",
      icon: BellIcon,
    },
    {
      title: "Messages",
      icon: MessageIcon,
    },
    {
      title: "Bookmarks",
      icon: BookmarkIcon,
    },
    {
      title: "Lists",
      icon: ListIcon,
    },
    {
      title: "Profile",
      icon: UserIcon,
    },
    {
      title: "More",
      icon: MoreIcon,
    },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 px-4 w-full">
          <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
            {MenuData.map((item, index) => (
              <li className="py-2" key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-1 cursor-pointer`}
                >
                  <img
                    className={`${classes.icon} ${classes.iconColorBlack} sm:mx-2 me-2 inline`}
                    src={item.icon}
                    alt=""
                  />
                  <span>
                    <p className=" hidden sm:inline ml-4 text-sm font-bold text-gray-400">
                      {" "}
                      {item.title}
                    </p>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main
        role="main"
        className="w-full h-full min-h-screen flex-grow p-4 overflow-auto"
      >
        {/* Header */}
        <div className="flex py-[10px]">
          <a href="#" className={`flex items-center px-4 py-1 cursor-pointer`}>
            <img
              className={`${classes.icon} ${classes.iconColorBlack} sm:mx-2 me-2 inline`}
              src={BackIcon}
              alt=""
            />
          </a>
          <span>
            <div className="flex flex-col">
              <p className=" hidden sm:inline ml-4 text-sm font-bold text-gray-400">
                {"Tony Stark"}
              </p>
              <p className=" hidden sm:inline ml-4 text-sm font-bold text-gray-400">
                {"1k Tweets"}
              </p>
            </div>
          </span>
        </div>
        {/* End Header */}

        {/* Cover and Profile Picture */}
        <div className="relative">
          <img
            className="w-full"
            src="https://via.placeholder.com/730x230/a1a1a1.png?text=CoverImageHere"
            alt=""
          />
          <img
            className={`absolute -bottom-[50px] ml-[15px] rounded-full ${classes.profilePicture}`}
            src="https://via.placeholder.com/115/dedede.png?text=TS"
            alt=""
          />
        </div>
        {/* End Cover and Profile Picture */}
      </main>
      <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 px-4 w-full"></div>
      </div>
    </div>
  );
};

export default Tweets;
