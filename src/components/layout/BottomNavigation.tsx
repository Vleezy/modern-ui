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

  /**
   * Get current theme color and apply to active nav link.
   */
  const { themeColor } = useAppState();
  const NavLinkActiveStyling = {
    color: themeColor
  };

  return (
    <Fragment>
      <div className="lg:hidden w-full z-30 fixed bottom-0 flex flex-col ">
        <nav className="w-full bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-500 dark:text-gray-500 flex justify-between text-lg border-gray-400 bg-bottom-nav border-t">
          {pages.map(page => (
            <NavLink
              key={page.url}
              to={page.url}
              activeStyle={NavLinkActiveStyling}
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
