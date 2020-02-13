import React from "react";
/**
 * Dependencies
 */
import { orderBy, filter } from "lodash";

/**
 * Components
 */
import FriendlistItem from "components/FriendlistItem";

const FriendsTab = () => {
  const noFriendsStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), #1a202c)`
  };

  const friendi: any[] = [];

  const friends = [
    {
      id: 1,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: true
    },
    {
      id: 2,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: true
    },
    {
      id: 3,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: false
    },
    {
      id: 4,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: true
    },
    {
      id: 5,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: false
    },
    {
      id: 6,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: false
    },
    {
      id: 7,
      username: "Friend",
      look: process.env.REACT_APP_HABBO_FIGURE || "",
      online: true
    }
  ];
  return (
    <div className="p-2">
      {/* Search friends */}
      <div className="flex w-full bg-gray-300 rounded text-sm border border-gray-400 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <i className="fas fa-search text-gray-500 self-center p-2 text-sm" />
        </div>
        <input
          className="flex-1 bg-gray-300 py-1 px-1 pb-1 dark:bg-gray-800"
          type="text"
          placeholder="Search Habbos..."
        />
      </div>

      {/* Online friends */}
      {friends.length ? (
        <>
          <h4 className="text-gray-500 mb-1 self-center text-xs font-semibold self-center mt-1">
            Friends (
            {
              filter(friends, o => {
                if (o.online) return o;
              }).length
            }{" "}
            online)
          </h4>
          <div className="w-full border border-gray-400 bg-gray-100 rounded dark:bg-gray-800 dark:border-gray-700">
            {orderBy(friends, ["online"], "desc").map((friend, idx) => (
              <FriendlistItem key={idx} user={friend} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col mt-2 relative">
          <div className=" absolute top-0 right-0 h-full w-full flex justify-center">
            <div
              className="flex flex-col justify-center"
              style={noFriendsStyles}
            >
              <span className="text-2xl font-semibold dark:text-gray-500 text-center">
                No friends!
              </span>
              <span className="dark:text-gray-600 text-sm px-10 text-center">
                You have no friends in your friendlist. Enter the hotel to meet
                new people!
              </span>
            </div>
          </div>
          {[...Array(5)].map((_, idx) => (
            <div className="w-full p-1 flex rounded mb-1" key={idx}>
              <div className="h-12 w-12 rounded bg-fadedblack-300 flex-shrink-0"></div>
              <div className="w-full flex flex-col pl-2">
                <div className="w-full rounded-sm h-full bg-fadedblack-300"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsTab;
