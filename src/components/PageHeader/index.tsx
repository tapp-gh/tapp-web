import React from "react";
import * as Icons from "assets/icons/index";
import classes from "components/components.module.css";

const PageHeader = () => {
  return (
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
  );
};

export default PageHeader;
