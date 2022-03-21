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
import TweetTabPage from "components/TweetTabPage";
import TweetTabBody from "components/TweetTabBody";

const Tweets = () => {

  const [openTab, setOpenTab] = React.useState<string|number>(1);

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
              <TweetTabItem
                tabName="Tweets"
                setOpenTab={setOpenTab}
                openTab={openTab}
                tabId={1}
              />
              <TweetTabItem
                tabName={"Tweets & Replies"}
                setOpenTab={setOpenTab}
                openTab={openTab}
                tabId={2}
              />
              <TweetTabItem
                tabName="Media"
                setOpenTab={setOpenTab}
                openTab={openTab}
                tabId={3}
              />
              <TweetTabItem
                tabName="Likes"
                setOpenTab={setOpenTab}
                openTab={openTab}
                tabId={4}
              />
            </TweetTabHeader>
            {/* End Tabs Header */}

            {/* Tabs Body */}
            <TweetTabBody>
              <TweetTabPage
                pageLink="link1"
                className={openTab === 1 ? "block" : "hidden"}
              >
                <TweetItem />
                <TweetItem />
                <TweetItem />
              </TweetTabPage>
              <TweetTabPage
                pageLink="link2"
                className={openTab === 2 ? "block" : "hidden"}
              >
                <TweetItem />
              </TweetTabPage>
            </TweetTabBody>
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
