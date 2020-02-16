import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import isDayTime from "utils/isDayTime";
import { useToasts } from "react-toast-notifications";
import { useDarkMode } from "hooks/useDarkMode";
import Switch from "components/shared/Switch";

interface ISidebarProps {
  toggleSidebar: (visible: boolean) => void;
  sidebarVisible: boolean;
}

const Sidebar = (props: ISidebarProps) => {
  const { toggleSidebar, sidebarVisible } = props;
  const currencies = [
    {
      name: "Credits",
      icon: "/assets/images/icons/credits.png",
      amount: 420
    },
    {
      name: "Pixels",
      icon: "/assets/images/icons/pixel.png",
      amount: 293
    },
    {
      name: "Diamonds",
      icon: "/assets/images/icons/diamonds.png",
      amount: 3219
    }
  ];

  const headerBackgroundDay = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(256, 256, 256, 0.1), rgba(256, 256, 256, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const headerBackgroundNight = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/assets/images/profile_backgrounds/star_sky.gif)"
  };

  const [darkTheme, setDarkTheme] = useDarkMode();

  const { addToast } = useToasts();

  const submitToast = () => {
    addToast("Error message!");
  };

  return (
    <CSSTransition
      in={sidebarVisible}
      timeout={200}
      classNames="sidebar"
      unmountOnExit
    >
      <div className="z-50 h-screen fixed overflow-x-hidden lg:hidden">
        <div
          className="h-full bg-surface-secondary flex flex-col"
          id="sidebar__content"
        >
          <div
            className="w-full flex shadow flex-col bg-bg-secondary relative p-2 border-r border-bd-primary-100"
            style={isDayTime() ? headerBackgroundDay : headerBackgroundNight}
          >
            {/* Sidebar topbar */}
            <div className="w-full flex justify-between">
              <span className="text-white text-center font-semibold w-full self-center">
                Chuckie
              </span>
              <button
                onClick={() => toggleSidebar(false)}
                className="text-white w-8 h-8 flex justify-center active:bg:blue-600"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            {/* Sidebar avatar */}
            <div
              className="w-20 h-32 z-30 bg-no-repeat bg-center"
              style={{
                backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}")`,
                backgroundPositionY: "-3px",
                backgroundPositionX: "7px"
              }}
            />

            {/* Sidebar currencies */}
            <div className="flex justify-between w-full px-2">
              {currencies.map(currency => (
                <div className="flex" key={currency.name}>
                  <div
                    className="w-6 h-6 bg-center bg-no-repeat mr-1"
                    style={{ backgroundImage: `url(${currency.icon})` }}
                  ></div>
                  <span className="text-white self-center font-semibold text-xs">
                    {currency.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full pb-auto border-r flex flex-col border-bd-primary dark:border-gray-700">
            <Link
              to="#"
              className="block w-full p-3 rounded text-on-surface-primary text-sm"
            >
              <i className="fas fa-cog w-5 text-on-surface-primary-500" />
              <span className="ml-1">Account Settings</span>
            </Link>

            <Link
              to="#"
              className="block w-full p-3 text-on-surface-primary text-sm flex"
            >
              <div className="flex-1">
                <i className="fas fa-inbox text-on-surface-primary-500 w-5 relative"></i>
                <span className="ml-1">Minimail</span>
              </div>
              <div className="flex ">
                <span className="text-white flex text-xs font-semibold py-px h-4 w-4 justify-center rounded-sm self-center bg-red-500 ">
                  <span className="self-center">3</span>
                </span>
              </div>
            </Link>

            <div className="h-px w-full bg-bd-primary-500 my-1 dark:bg-gray-700" />

            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              <div className="w-full p-3 text-on-surface-primary text-sm">
                <i className="fas fa-moon text-on-surface-primary-500 w-5" />
                <span className="ml-1">Dark mode</span>
                <Switch
                  onChange={() => setDarkTheme(!darkTheme)}
                  checked={darkTheme}
                />
              </div>
            </label>

            <div className="h-px w-full bg-bd-primary-500 my-1 flex mt-auto" />
            <div className="flex p-2">
              <button
                className="block p-2 text-red-500 flex-1 rounded bg-gray-100 text-sm dark:bg-gray-700"
                onClick={() => submitToast()}
              >
                <i className="fas fa-sign-out-alt w-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
