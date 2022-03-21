import React from "react";

type Props = {
  pageLink: string;
  children?: React.ReactNode;
  className?: string;
};

const TweetTabPage: React.FC<Props> = ({ pageLink, className, children }) => {
  return (
    <div className={className} id={pageLink}>
      {children}
    </div>
  );
};

export default TweetTabPage;
