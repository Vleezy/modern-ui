import React, { useState, useEffect } from "react";
/**
 * Dependencies
 */
import { orderBy } from "lodash";
import useDebounce from "hooks/useDebounce";
import { getUsersByUsername } from "api/fakeApi";

/**
 * Components
 */
import FriendlistItem from "components/FriendlistItem";
import UsersList from "components/UsersList";
import Searchbar from "containers/Searchbar";
import Helmet from "react-helmet";

const FriendsTab = () => {
  const friends: any[] = [];

  /**
   * User search
   */
  const [userSearch, setUserSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const debouncedUserSearch = useDebounce(userSearch, 300);

  // Store fetched users.
  const [fetchedUsers, setFetchedUsers] = useState(Array(0));

  /**
   * Fetch users when debouncedUserSearch value changes and set isSearching value accordingly.
   */
  useEffect(() => {
    if (debouncedUserSearch) {
      setIsLoading(true);
      setFetchedUsers([]);

      getUsersByUsername(debouncedUserSearch).then(users => {
        setIsLoading(false);
        setFetchedUsers(users);
      });
    }
  }, [debouncedUserSearch]);

  /**
   * Render tab content
   */
  const renderContent = () => {
    if (debouncedUserSearch) {
      return <UsersList users={fetchedUsers} loading={isLoading} />;
    }

    if (friends.length)
      return (
        <div className="w-full border border-gray-400 bg-gray-100 rounded dark:bg-gray-800 dark:border-gray-700">
          {orderBy(friends, ["online"], "desc").map((friend, idx) => (
            <FriendlistItem key={idx} user={friend} />
          ))}
        </div>
      );

    return (
      <div className="flex flex-col mt-2 relative">
        <div className="absolute top-0 right-0 h-full w-full flex justify-center">
          <div className="flex flex-col justify-center bg-gradient-b-gray-200 dark:bg-gradient-b-gray-900">
            <span className="text-2xl font-semibold text-gray-500 dark:text-gray-600 text-center">
              No friends!
            </span>
            <span className="text-gray-600 text-sm px-10 text-center">
              You have no friends in your friendlist. Enter the hotel to meet
              new people!
            </span>
          </div>
        </div>
        {[...Array(5)].map((_, idx) => (
          <div className="w-full p-1 flex rounded mb-1" key={idx}>
            <div className="h-12 w-12 rounded bg-gray-300 dark:bg-gray-800 flex-shrink-0"></div>
            <div className="w-full flex flex-col pl-2">
              <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-sm h-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <article className="p-2">
      <Helmet>
        <title>Friends</title>
      </Helmet>
      <Searchbar onChangeFunc={setUserSearch} />

      {renderContent()}
    </article>
  );
};

export default FriendsTab;
