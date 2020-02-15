import React, { useState } from "react";
/**
 * Dependencies
 */
import { orderBy, filter } from "lodash";
import { useSpring, animated } from "react-spring";
import OnOutsideClick from "react-outclick";

/**
 * Components
 */
import FriendlistItem from "components/FriendlistItem";

const FriendsTab = () => {
  const friends: any[] = [];

  const friendss = [
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

  const [searchExpanded, setSearchExpanded] = useState(false);

  const searchExpandAnim = useSpring({
    maxHeight: searchExpanded ? "100px" : "0px",
    opacity: searchExpanded ? 1 : 0
  });

  const searchBarAnim = useSpring({
    backgroundColor: searchExpanded ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"
  });

  return (
    <div className="p-2">
      {/* Search friends */}
      <OnOutsideClick onOutsideClick={(ev: Event) => setSearchExpanded(false)}>
        <div
          style={searchBarAnim}
          className="flex w-full flex-wrap bg-fadedblack-100 rounded text-sm dark:bg-gray-900"
        >
          <div>
            <i className="fas fa-search text-gray-500 self-center p-2 text-sm dark:text-gray-600" />
          </div>
          <input
            className="flex-1 py-1 px-1 pb-1 bg-transparent dark:text-gray-600 dark:placeholder-gray-600"
            type="text"
            placeholder="Search Habbos..."
            onFocus={() => setSearchExpanded(true)}
            // onBlur={() => setSearchExpanded(false)}
          />
          <animated.div
            style={searchExpandAnim}
            className="flex w-full overflow-hidden"
          >
            <div className="p-1 w-full flex-wrap flex">
              <h4 className="w-full font-semibold dark:text-gray-600">
                Criteria
              </h4>
              <label
                htmlFor="filter-friends"
                className="text-xs dark:text-gray-600 flex"
              >
                <input
                  id="filter-friends"
                  type="checkbox"
                  className="self-center mr-1"
                />
                Friends only
              </label>
            </div>
          </animated.div>
        </div>
      </OnOutsideClick>
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
          <div className="absolute top-0 right-0 h-full w-full flex justify-center">
            <div className="flex flex-col justify-center bg-gradient-b-gray-200 dark:bg-gradient-b-gray-900">
              <span className="text-2xl font-semibold text-gray-600 dark:text-gray-500 text-center">
                No friends!
              </span>
              <span className=" text-gray-600 text-sm px-10 text-center">
                You have no friends in your friendlist. Enter the hotel to meet
                new people!
              </span>
            </div>
          </div>
          {[...Array(5)].map((_, idx) => (
            <div className="w-full p-1 flex rounded mb-1" key={idx}>
              <div className="h-12 w-12 rounded bg-bg-secondary flex-shrink-0"></div>
              <div className="w-full flex flex-col pl-2">
                <div className="w-full rounded-sm h-full bg-bg-secondary"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsTab;
