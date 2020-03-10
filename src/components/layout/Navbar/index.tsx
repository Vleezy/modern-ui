import React from "react";
import { NavLink } from "react-router-dom";
import { useAppState } from "context/app.context";

const Navbar = () => {
  // Get user and theme color from context.
  const { user, themeColor } = useAppState();

  // Subpages to be rendered as links in the navbar.
  const subPages = [
    { url: "/me", name: "Home", icon: "fas fa-home" },
    {
      url: "/profile/" + user?.username || "",
      name: "My Profile",
      icon: "fas fa-user"
    },
    { url: "/community", name: "Community", icon: "fas fa-users" },
    { url: "help", name: "Help", icon: "fas fa-question-circle" }
  ];

  return (
    <div className="w-full bg-gray-100 border-b dark:border-gray-700 border-gray-400 py-1 hidden lg:block dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <nav className="w-full flex text-xs font-semibold text-gray-500">
          <div className="flex flex-1 text-on-brand">
            {subPages.map(page => (
              <NavLink
                to={page.url}
                key={page.name}
                activeStyle={{ color: themeColor }}
                className="py-2 px-4 rounded hover:bg-gray-200 dark-hover:bg-gray-700 flex"
              >
                {page.icon && (
                  <i
                    className={` ${page.icon} mr-2 text-brand self-center`}
                  ></i>
                )}
                <div className="flex flex-col self-center">
                  {page.name}
                  {/* {page.name === "Community" && <div>News</div>} */}
                </div>
              </NavLink>
            ))}
          </div>

          {/* Show login button if guest */}
          {!user && (
            <div className="flex">
              <NavLink
                to="#"
                className="py-2 px-4 rounded hover:bg-gray-100 bg-fade"
              >
                Sign up
              </NavLink>
              <NavLink
                to="#"
                className="py-2 px-4 text-white rounded hover:bg-blue-600 bg-blue-400 mr-1"
              >
                Login
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
