import React from "react";
import classes from "components/components.module.css";
import { CalendarIcon } from "assets/icons/index";

const TweetTabHeader = (props: {
  children: React.ReactChild | React.ReactFragment | null | undefined;
}) => {
  return (
    <ul
      className="flex my-4 list-none flex-wrap flex-row border-b-2 border-b-purple-800"
      role="tablist"
    >
      {props.children}
    </ul>
  );
};
export default TweetTabHeader;
