import React from "react";

const TweetTabItem = (
  tabName: string,
  openTab: string,
  setOpenTab: (arg0: string) => void
): JSX.Element => {
  return (
    <li
      className={`flex-auto
                  ${
                    openTab === tabName.toLowerCase() &&
                    "border-b-4 border-b-purple-800"
                  }`}
    >
      <a
        className={"px-5 py-3 block"}
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(tabName.toLowerCase());
        }}
        data-toggle="tab"
        href={`#${tabName.toLowerCase()}`}
        role="tablist"
      >
        {tabName.toLowerCase().charAt(0).toUpperCase() + tabName.slice(1)}
      </a>
    </li>
  );
};

export default TweetTabItem;
