import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCollapseOnScroll } from "hooks/useCollapseOnScroll";
import ProfilePicture from "components/shared/ProfilePicture";
import isDayTime from "utils/isDayTime";
import HeaderDropDown from "./HeaderDropDown";
import { useAppState, useAppDispatch } from "context/app.context";
import { setHomeTab } from "context/app.actions";

interface IHeaderProps {
  collapsed?: boolean;
  toggleSidebar: (visible: boolean) => void;
  isHomepage: boolean;
  setTab: (tab: string) => void;
}

const Header = (props: IHeaderProps) => {
  const { collapsed = true, toggleSidebar, isHomepage, setTab } = props;

  const headerBackgroundDay = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(256, 256, 256, 0.1), rgba(256, 256, 256, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const headerBackgroundNight = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const homeTabs = [
    { url: "/me/news", name: "News", key: "NEWS" },
    { url: "/me/friends", name: "Friends", key: "FRIENDS" },
    { url: "/me/badges", name: "Badges", key: "BADGES" }
  ];

  const subPages = [
    { url: "/me", name: "Home", icon: "fas fa-home" },
    { url: "/profile/:id", name: "My Profile", icon: "fas fa-user" },
    { url: "/community", name: "Community", icon: "fas fa-users" },
    { url: "help", name: "Help", icon: "fas fa-question-circle" }
  ];

  const isScrolled = useCollapseOnScroll();

  const isCollapsed = !isHomepage || isScrolled;

  const { user, currentHomeTab } = useAppState();
  const dispatch = useAppDispatch();

  const handleTabClick = (tabKey: string) => {
    dispatch(setHomeTab(tabKey));
  };

  return (
    <div className="w-full sticky top-0 z-10">
      <div
        className="w-full lg:h-24 bg-blue-200 bg-center border-b border-gray-400 shadow lg:shadow-none dark:border-gray-700"
        style={isDayTime() ? headerBackgroundDay : headerBackgroundNight}
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
          <h3 className="self-center text-white font-semibold">
            {user?.username}
          </h3>
          <Link
            to="settings"
            className="text-lg text-white self-center w-8 h-8 p-2 flex justify-center"
          >
            <i className="fas fa-cog" />
          </Link>
        </div>
        {isCollapsed || (
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
          className={`${isCollapsed &&
            `hidden`} mt-8 lg:hidden flex mb-0 justify-between text-white`}
        >
          {isHomepage &&
            homeTabs.map(page => (
              <button
                key={page.key}
                onClick={() => handleTabClick(page.key)}
                className={`font-semibold text-center flex-1 border-b-2 border-transparent focus:outline-none ${currentHomeTab ===
                  page.key && "border-white"}`}
              >
                {page.name}
              </button>
            ))}
        </div>
      </div>

      {/* Subnav (:lg screens) */}
      <div className="bg-white w-full rounded-b border-b border-r border-l border-gray-400 py-1 hidden lg:block dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <nav className="w-full flex text-xs font-semibold text-gray-500">
            <div className="flex flex-1">
              {subPages.map(page => (
                <NavLink
                  exact
                  to={page.url}
                  key={page.name}
                  activeClassName="text-blue-500"
                  className="py-2 px-4 rounded hover:bg-gray-200 dark-hover:bg-gray-700"
                >
                  {page.icon && <i className={` ${page.icon} mr-2 `}></i>}
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
