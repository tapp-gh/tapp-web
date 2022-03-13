import React from "react";

const TweetTabPage = (
  pageLink: string,
  openTab: number,
  props: {
    children: React.ReactChild | React.ReactFragment | null | undefined;
  }
) => {
  return (
    <div className={openTab === 2 ? "block" : "hidden"} id={pageLink}>
      {props}
    </div>
  );
};

export default TweetTabPage;
