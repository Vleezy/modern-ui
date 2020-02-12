import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useAppState } from "context/app.context";

const BottomNavigation = () => {
  const { user } = useAppState();
  const pages = [
    { url: "/me", icon: "fas fa-home" },
    { url: `/profile/${user?.username || ""}`, icon: "fas fa-user" },
    { url: "/community", icon: "fas fa-users" }
  ];
  return (
    <Fragment>
      <div className="lg:hidden w-full z-30 fixed bottom-0 flex flex-col ">
        {/* <div className="bg-red-600 text-white text-sm  m-1 flex rounded p-2  shadow justify-center">
          Test alert!
        </div> */}
        <nav className="w-full flex justify-between text-lg text-gray-500 border-gray-400 bg-gray-100 border-t dark:bg-gray-800 dark:border-gray-700">
          {pages.map(page => (
            <NavLink
              key={page.url}
              to={page.url}
              activeClassName="text-blue-500"
              className="flex-1 text-center py-2"
            >
              <i className={page.icon} />
            </NavLink>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default BottomNavigation;
