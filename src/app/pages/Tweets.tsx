import React from "react";
import * as Icons from "assets/icons/index";
import classes from "./Tweets.module.css";
import LeftNavBar from "components/LeftNavBar";
import RightSideBar from "components/RightSideBar";
import PageHeader from "components/PageHeader";
import ProfileDetails from "components/ProfileDetails";
import TweetTabHeader from "components/TweetTabHeader";
import TweetTabItem from "components/TweetTabItem";
import TweetItem from "components/TweetItem";

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
      <LeftNavBar />

      {/* Main Middle Content */}
      <main
        role="main"
        className="w-full h-full min-h-screen flex-grow p-4 overflow-auto"
      >
        {/* Header */}
        <PageHeader />
        {/* End Header */}

        {/* Profile Details */}
        <ProfileDetails />
        {/* End Profile Details */}

        {/* Tweets Tabs */}
        <div className="flex flex-wrap">
          <div className="w-full">
            {/* Tabs Header */}
            <TweetTabHeader>
              {/* <TweetTabItem /> */}
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
            </TweetTabHeader>
            {/* End Tabs Header */}

            {/* Tabs Body */}
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <TweetItem />
                    <TweetItem />
                    <TweetItem />
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
      <RightSideBar />
    </div>
  );
};

export default Tweets;
