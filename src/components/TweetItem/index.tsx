import React from "react";
import classes from "components/components.module.css";
import * as Icons from "assets/icons/index";

const TweetItem = () => {
  return (
    <div className="flex flex-col w-full mt-4 pb-4 border-b-2 border-b-purple-800">
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
  );
};

export default TweetItem;
