import React from "react";
import { NavLink } from "react-router-dom";
import { useAppState } from "context/app.context";

const Navbar = () => {
  // Get user from context.
  const { user } = useAppState();

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
    <div className="w-full bg-gray-100 border-b border-gray-400 py-1 hidden lg:block">
      <div className="max-w-4xl mx-auto">
        <nav className="w-full flex text-xs font-semibold text-gray-500">
          <div className="flex flex-1 text-on-brand">
            {subPages.map(page => (
              <NavLink
                to={page.url}
                key={page.name}
                activeClassName="text-brand"
                className="py-2 px-4 rounded hover:bg-gray-200 dark-hover:bg-gray-700"
              >
                {page.icon && (
                  <i className={` ${page.icon} mr-2 text-brand`}></i>
                )}
                {page.name}
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
