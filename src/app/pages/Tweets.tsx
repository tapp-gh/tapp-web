import React from "react";

const Tweets = () => {
  const MenuData = [
    {
      title: "Home",
      icon: "",
    },
    {
      title: "Explore",
      icon: "",
    },
    {
      title: "Notifications",
      icon: "",
    },
    {
      title: "Lists",
      icon: "",
    },
    {
      title: "Profile",
      icon: "",
    },
    {
      title: "More",
      icon: "",
    },
  ];

  return (
    <>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-2 flex flex-col min-h-screen group">
          {MenuData.map((item, index) => (
            <div key={index} className="my-2">
              <div key={index} className="flex px-4 py-1 cursor-pointer">
                <span className="text-lg text-gray-500" />
                <p className="ml-4 text-sm font-bold text-gray-400">
                  {" "}
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-8 bg-gray-300">2</div>
        <div className="col-span-2">3</div>
      </div>
    </>
  );
};

export default Tweets;
