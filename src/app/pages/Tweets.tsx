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
  CalendarIcon,
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
      {/* Left Navbar */}
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

      {/* Main Middle Content */}
      <main
        role="main"
        className="w-full h-full min-h-screen flex-grow p-4 overflow-auto"
      >
        {/* Header */}
        <div className="flex py-[10px]">
          <a href="#" className={`flex items-center px-4 py-1 cursor-pointer`}>
            <img
              className={`${classes.icon} ${classes.iconColorBlack} mr-4 inline`}
              src={BackIcon}
              alt=""
            />
          </a>
          <span>
            <div className="flex flex-col">
              <p className="font-bold">{"Tony Stark"}</p>
              <p className="">{"1k Tweets"}</p>
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

        {/* Profile Summary */}
        <div className="flex flex-col">
          <div className="flex justify-end my-4 mx-5">
            <button className="rounded-full bg-gray-200 px-4 py-3">
              Edit Profile
            </button>
          </div>

          <div className="flex flex-col">
            <p className="font-bold">{"Tony Stark"}</p>
            <p className="">{"@tony_stark"}</p>
            <p className="">{"Best bio you'll ever see"}</p>
            <div className="flex items-center">
              <img
                className={`${classes.iconColorBlack} mr-4`}
                src={CalendarIcon}
                alt=""
              />
              <span>
                <p className="">{"Joined February 2022"}</p>
              </span>
            </div>
            <div className="flex items-center">
              <span>
                <p className="mr-4">
                  <span className="font-bold">1k</span> Following
                </p>
              </span>
              <span>
                <p className="">
                  <span className="font-bold">200M</span> Followers
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* End Profile Summary */}

        {/* Tweets Tabs */}
        <div></div>
        {/* End Tweets Tabs */}
      </main>

      {/* Right Sidebar */}
      <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 px-4 w-full"></div>
      </div>
    </div>
  );
};

export default Tweets;
