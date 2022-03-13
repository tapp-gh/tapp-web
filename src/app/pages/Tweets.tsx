import React from "react";
import * as Icons from "assets/icons/index";
import classes from "./Tweets.module.css";

const Tweets = () => {
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

  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      {/* Left Navbar */}
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
              src={Icons.BackIcon}
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
            <div className="mb-2">
              <p className="font-bold">{"Tony Stark"}</p>
              <p className="">{"@tony_stark"}</p>
            </div>
            <p className="mb-2">{"Best bio you'll ever see"}</p>
            <div className="flex items-center mb-2">
              <img
                className={`${classes.iconColorBlack} mr-4`}
                src={Icons.CalendarIcon}
                alt=""
              />
              <span>
                <p className="">{"Joined February 2022"}</p>
              </span>
            </div>
            <div className="flex items-center mb-2">
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
        <div className="flex flex-wrap">
          <div className="w-full">
            {/* Tabs Header */}
            <ul
              className="flex my-4 list-none flex-wrap flex-row border-b-2 border-b-purple-800"
              role="tablist"
            >
              <li
                className={`flex-auto
                  ${openTab === 1 && "border-b-4 border-b-purple-800"}`}
              >
                <a
                  className={"px-5 py-3 block"}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Tweets
                </a>
              </li>
              <li
                className={`flex-auto
                  ${openTab === 2 && "border-b-4 border-b-purple-800"}`}
              >
                <a
                  className={"px-5 py-3 block"}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  {"Tweets & Replies"}
                </a>
              </li>
              <li
                className={`flex-auto
                  ${openTab === 3 && "border-b-4 border-b-purple-800"}`}
              >
                <a
                  className={"px-5 py-3 block"}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Media
                </a>
              </li>
              <li
                className={`flex-auto
                  ${openTab === 4 && "border-b-4 border-b-purple-800"}`}
              >
                <a
                  className={"px-5 py-3 block"}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Likes
                </a>
              </li>
            </ul>
            {/* End Tabs Header */}

            {/* Tabs Body */}
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    {/* Tweet Card Component Here */}
                    <div className="flex flex-col w-full pb-4 border-b-2 border-b-purple-800">
                      {/* Retweet Indicator Text*/}
                      <div className="flex flex-row flex-nowrap mb-4">
                        <img
                          className={`${classes.iconColorBlack} mr-2 inline`}
                          src={Icons.RetweetIcon}
                          alt=""
                        />
                        <span>
                          <p className="">{"You Retweeted"}</p>
                        </span>
                      </div>
                      {/* End Retweet Indicator Text*/}

                      {/* Tweet Content */}
                      <div className="flex flex-row flex-nowrap">
                        {/* Profile Image */}
                        <img
                          className={`rounded-full ${classes.profilePicture}`}
                          src="https://via.placeholder.com/61/dedede.png?text=TS"
                          alt=""
                        />
                        {/* End Profile Image */}

                        {/* Tweet Sub Content */}
                        <div className="flex flex-col ml-4">
                          {/* Header */}
                          <div className="flex">
                            {/* Display Name */}
                            <span className="pr-2">
                              <p className="">{"Thor Odinson"}</p>
                            </span>
                            {/* Verified Status */}
                            <span className="pr-2">
                              <img
                                className={`${classes.iconColorBlack} mr-2 inline`}
                                src={Icons.VerifiedBadgeIcon}
                                alt=""
                              />
                            </span>

                            {/* Username */}
                            <span className="pr-2">
                              <p className="">@{"thor"}</p>
                            </span>

                            {/* Date */}
                            <span>
                              <p className="">· {"Jan 21"}</p>
                            </span>
                          </div>
                          {/* End Header */}

                          {/* Tweet Actual Content */}
                          <div>{"I miss Asgard 😭"}</div>
                          {/* End Tweet Actual Content */}
                        </div>
                        {/* End Tweet Sub Content */}
                      </div>
                      {/* End Tweet Content */}

                      {/* Tweet Footer & Metrics */}
                      <div className="flex pt-4">
                        <ul className="flex list-none flex-wrap flex-row w-full">
                          <li className="mr-2 last:mr-0 flex-auto flex flex-row flex-nowrap">
                            {/* Comments */}
                            <img
                              className={`${classes.iconColorBlack} mr-2 inline`}
                              src={Icons.TweetCommentIcon}
                              alt=""
                            />
                            <span className="">
                              <p className="">42k</p>
                            </span>
                          </li>

                          <li className="mr-2 last:mr-0 flex-auto flex flex-row flex-nowrap">
                            {/* Retweets */}
                            <img
                              className={`${classes.iconColorBlack} mr-2 inline`}
                              src={Icons.RetweetIcon}
                              alt=""
                            />
                            <span className="">
                              <p className="">200k</p>
                            </span>
                          </li>

                          <li className="mr-2 last:mr-0 flex-auto flex flex-row flex-nowrap">
                            {/* Likes */}
                            <img
                              className={`${classes.iconColorBlack} mr-2 inline`}
                              src={Icons.TweetLikeIcon}
                              alt=""
                            />
                            <span className="">
                              <p className="">700M</p>
                            </span>
                          </li>

                          <li className="mr-2 last:mr-0 flex-auto flex flex-row flex-nowrap">
                            {/* Share */}
                            <img
                              className={`${classes.iconColorBlack} mr-2 inline`}
                              src={Icons.TweetShareIcon}
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      {/* End Tweet Footer & Metrics */}
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    {/* Content Here */}
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    {/* Content Here */}
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link4"
                  >
                    {/* Content Here */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Tabs Body */}
          </div>
        </div>
        {/* End Tweets Tabs */}
      </main>

      {/* Right Sidebar */}
      <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4 border-l-2 border-l-purple-800">
        <div className="sticky top-0 px-4 w-full"></div>
      </div>
    </div>
  );
};

export default Tweets;
