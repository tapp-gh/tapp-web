import React from "react";
import {
  UserIcon,
  BellIcon,
  BookmarkIcon,
  HashtagIcon,
  HomeIcon,
  ListIcon,
  MessageIcon,
  MoreIcon,
} from "assets/icons/index";
import classes from "./Tweets.module.css";

const Tweets = () => {
  const MenuData = [
    {
      title: "Home",
      icon: HomeIcon,
    },
    {
      title: "Explore",
      icon: HashtagIcon,
    },
    {
      title: "Notifications",
      icon: BellIcon,
    },
    {
      title: "Messages",
      icon: MessageIcon,
    },
    {
      title: "Bookmarks",
      icon: BookmarkIcon,
    },
    {
      title: "Lists",
      icon: ListIcon,
    },
    {
      title: "Profile",
      icon: UserIcon,
    },
    {
      title: "More",
      icon: MoreIcon,
    },
  ];

  console.log("asdd: " + classes.iconColorBlack);

  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 px-4 w-full">
          <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
            {MenuData.map((item, index) => (
              <li className="py-2" key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-1 cursor-pointer`}
                >
                  <img
                    className={`${classes.iconColorBlack} w-7 sm:mx-2 me-2 inline`}
                    src={item.icon}
                    alt=""
                  />
                  <span>
                    <p className=" hidden sm:inline ml-4 text-sm font-bold text-gray-400">
                      {" "}
                      {item.title}
                    </p>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main role="main" className="w-full h-full flex-grow p-4 overflow-auto">
        <h1 className="text-3xl md:text-5xl mb-4 font-extrabold" id="home">
          Single-page App Layout
        </h1>
        <p className="py-2 text-xl">
          This single-page "app" style layout features a{" "}
          <span className="font-bold">sidebar</span>,{" "}
          <span className="font-bold">main</span>
          content area, and <span className="font-bold">footer</span>. This
          full-height layout is never more than viewport height. The content
          area scrolls independently as needed. For this example, we're using
          the{" "}
          <a className="text-indigo-600" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          utility framework. As part of it's default classNamees, Tailwind
          includes Flexbox classNamees which make this layout implementation
          simple!
        </p>
        <p className="py-2 text-xl">
          Additionally, this layout is{" "}
          <span className="italic">responsive</span>. As screen width decreases
          down to 640px (the smallest Tailwind breakpoint), the layout stacks
          vertically. The sidebar orientation is flipped from vertical to
          horizontal (<code>flex-col sm:flex-row</code>), and the main content
          area fills the remaining height above the footer.
        </p>
      </main>
      <div className="sm:w-3/12 md:3/12 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 px-4 w-full"></div>
      </div>
    </div>
  );
};

export default Tweets;
