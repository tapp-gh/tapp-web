import React from "react";
import classes from "components/components.module.css";
import { CalendarIcon } from "assets/icons/index";

const ProfileDetails = () => {
  return (
    <>
      {/* Cover and Profile Picture */}
      <div className="relative">
        <img
          className="w-full"
          src="https://via.placeholder.com/730x230/a1a1a1.png?text=CoverImageHere"
          alt=""
        />
        <img
          className={`absolute -bottom-[50px] ml-[15px] rounded-full ${classes.profilePicture}`}
          src="https://via.placeholder.com/115/dedede.png?text=TS"
          alt=""
        />
      </div>
      {/* End Cover and Profile Picture */}

      {/* Profile Summary */}
      <div className="flex flex-col">
        <div className="flex justify-end my-4 mx-5">
          <button className="rounded-full bg-gray-200 px-4 py-3">
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-2">
            <p className="font-bold">{"Tony Stark"}</p>
            <p className="">{"@tony_stark"}</p>
          </div>
          <p className="mb-2">{"Best bio you'll ever see"}</p>
          <div className="flex items-center mb-2">
            <img
              className={`${classes.iconColorBlack} mr-4`}
              src={CalendarIcon}
              alt=""
            />
            <span>
              <p className="">{"Joined February 2022"}</p>
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span>
              <p className="mr-4">
                <span className="font-bold">1k</span> Following
              </p>
            </span>
            <span>
              <p className="">
                <span className="font-bold">200M</span> Followers
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* End Profile Summary */}
    </>
  );
};
export default ProfileDetails;
