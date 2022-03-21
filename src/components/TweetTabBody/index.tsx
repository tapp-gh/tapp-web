import React from "react";

const TweetTabBody = (props: {
  children: React.ReactChild | React.ReactFragment | null | undefined;
}) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
      <div className="px-4 py-5 flex-auto">
        <div className="tab-content tab-space">{props.children}</div>
      </div>
    </div>
  );
};
export default TweetTabBody;
