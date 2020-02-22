import React from "react";

import { Link } from "react-router-dom";
import { IUser } from "models/user/IUser";

import ProfilePicture from "../shared/ProfilePicture";
import UserHovercard from "../shared/UserHovercard";

interface IFriendListItemProps {
  user: IUser;
}

const FriendlistItem = (props: IFriendListItemProps) => {
  const { user } = props;
  return (
    <div className="w-full border-b z-0 border-gray-200 flex p-1 dark:border-gray-700">
      <UserHovercard>
        <Link to="#">
          <ProfilePicture
            figure={user?.look}
            styles="bg-gray-300 flex-none relative z-0 rounded self-center w-12 h-12 bg-no-repeat bg-center dark:bg-gray-700"
            online={user.online}
          />
        </Link>
      </UserHovercard>
      <div className="flex-1 px-1">
        <span className="flex w-full justify-between">
          <Link
            to="#"
            className="text-blue-700 text-sm font-semibold self-center hover:text-blue-300"
          >
            {user.username}
          </Link>
          <span className="ml-1 text-xs text-gray-500 self-center dark:text-gray-700">
            Online for 2 hours
          </span>
        </span>
        <div className="w-full flex">
          <span className="text-xs text-gray-600 leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            aliquam voluptatem?
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendlistItem;
