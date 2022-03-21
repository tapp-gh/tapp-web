import React from "react";

type Props = {
  tabName: string;
  openTab: string | number;
  tabId: string|number,
  setOpenTab: (value: string | number) => void;
  children?: React.ReactNode;
  className?: string;
};

const TweetTabItem: React.FC<Props> = (props: Props): JSX.Element => {

  return (
    <li
      className={`flex-auto
                  ${
                    props.tabId === props.openTab &&
                    "border-b-4 border-b-purple-800"
                  }`}
    >
      <a
        className={"px-5 py-3 block"}
        onClick={(e) => {
          e.preventDefault();
          props.setOpenTab(props.tabId);
        }}
        data-toggle="tab"
        href={`#${props.tabName.toLowerCase()}`}
        role="tablist"
      >
        {props.tabName.toLowerCase().charAt(0).toUpperCase() + props.tabName.slice(1)}
        {props.children}
      </a>
    </li>
  );
};

export default TweetTabItem;
