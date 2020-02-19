import * as React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * Dependencies
 */

import { merge } from "lodash";
import { useCollapseOnScroll } from "hooks/useCollapseOnScroll";
import isDayTime from "utils/isDayTime";
import { useAppState, useAppDispatch } from "context/app.context";
import { setHomeTab } from "context/app.actions";
import { findIndex } from "lodash";

/**
 * Components
 */
import HeaderDropDown from "./HeaderDropDown";
import ProfilePicture from "components/shared/ProfilePicture";

interface IHeaderProps {
  toggleSidebar: (visible: boolean) => void;
  isHomepage: boolean;
}

const Header = (props: IHeaderProps) => {
  const { toggleSidebar, isHomepage } = props;

  const { user, currentHomeTab } = useAppState();
  const dispatch = useAppDispatch();

  const handleTabClick = (tabKey: string) => {
    dispatch(setHomeTab(tabKey));
  };

  const headerBackground = {
    night: {
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
    },
    day: {
      backgroundImage:
        "linear-gradient(to bottom, rgba(256, 256, 256, 0.1), rgba(256, 256, 256, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
    }
  };

  const homeTabs = [
    { url: "/me/news", name: "News", key: "NEWS" },
    { url: "/me/friends", name: "Friends", key: "FRIENDS" },
    { url: "/me/badges", name: "Badges", key: "BADGES" }
  ];

  const getTabPosition = () => {
    return findIndex(homeTabs, n => n.key === currentHomeTab);
  };

  console.log(currentHomeTab);

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

  const isScrolled = useCollapseOnScroll();

  const isCollapsed = !isHomepage || isScrolled;

  return (
    <div className={`w-full sticky top-0 z-10`}>
      <div
        className="w-full lg:h-24 bg-blue-200 bg-center border-b border-gray-400 shadow lg:shadow-none dark:border-gray-700"
        // style={isDayTime() ? headerBackground.day : headerBackground.night}
        style={merge(
          isDayTime() ? headerBackground.day : headerBackground.night
        )}
      >
        <div className="lg:flex hidden h-full max-w-4xl mx-auto">
          <div className="w-full flex justify-between">
            <div className="font-semibold flex text-white">
              <div className="flex self-center hover:bg-fadedwhite-100 py-2 px-1 rounded">
                <Link to="/">
                  <img src="/assets/images/logo/logo.gif" alt="Hotel logo" />
                </Link>
              </div>
            </div>
            <div className="flex justify-end self-center">
              <HeaderDropDown />
            </div>
          </div>
        </div>
        <div className="lg:hidden p-2 w-full flex justify-between">
          {/* <i className="fas fa-chevron-left text-sm text-white ml-2"></i> */}
          <button
            className=" text-lg text-white self-center flex justify-center active:bg-blue-400"
            onClick={() => toggleSidebar(true)}
          >
            {isCollapsed ? (
              <div
                className="relative h-8 w-8 border border-blue-500 rounded bg-blue-700"
                style={{
                  backgroundImage: `url(https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}&size=s)`,
                  backgroundPositionY: `-6px`
                }}
              >
                <span className="absolute bg-red-500 -m-px rounded-full top-0 right-0 w-2 h-2"></span>
              </div>
            ) : (
              <i className="fas fa-bars m-2 relative">
                <span className="absolute bg-red-500 -mr-1 -mt-px rounded-full top-0 right-0 w-2 h-2"></span>
              </i>
            )}
          </button>
          <Link to="/me" className="self-center text-white font-semibold">
            {user?.username}
          </Link>
          <NavLink
            to="/settings"
            activeClassName="text-blue-500"
            className="text-lg text-white self-center w-8 h-8 p-2 flex justify-center"
          >
            <i className="fas fa-cog" />
          </NavLink>
        </div>
        {!isCollapsed && (
          <div className="mt-4 flex lg:hidden flex-wrap mx-3">
            <ProfilePicture
              styles={"bg-gray-300 border border-gray-400"}
              figure={process.env.REACT_APP_HABBO_FIGURE}
            />
            <button
              id="btn-enter-hotel"
              className="arrow_box bg-green-500 text-white border font-semibold rounded flex-1 ml-2 border-green-400  leading-tight"
            >
              Enter Hotel
              <br />
              <span className="text-xs text-green-300 font-light">
                ... to join 54 other Habbos!
              </span>
            </button>
          </div>
        )}

        {/* Tabs */}
        <div
          className={`${
            isCollapsed ? `mt-0` : `mt-8`
          }  lg:hidden flex mb-0 justify-between`}
        >
          {isHomepage &&
            homeTabs.map(page => (
              <button
                key={page.key}
                onClick={() => handleTabClick(page.key)}
                className="font-semibold text-white text-center flex-1 border-b-2 border-transparent focus:outline-none"
              >
                {page.name}
              </button>
            ))}
        </div>
        {isHomepage && (
          <div
            className="w-full relative lg:hidden"
            style={{
              height: "2px"
            }}
          >
            <div
              className="absolute bg-white dark:bg-pink-500 h-full tab-indicator"
              style={{
                left: (100 / homeTabs.length) * getTabPosition() + "%",
                width: 100 / homeTabs.length + "%"
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Subnav (:lg screens) */}
      <div className="w-full bg-surface-primary border-b border-border-primary py-1 hidden lg:block">
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
