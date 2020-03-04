import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "context/app.context";
import { useDarkMode } from "hooks/useDarkMode";
import Switch from "components/shared/Switch";

const HeaderDropDown = () => {
  const [visible, setVisible] = useState(false);

  const { user } = useAppState();

  const habboFigure = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${user?.look}&size=s")`,
    backgroundPositionY: "-4px",
    backgroundPositionX: "1px"
  };

  const tabs = [
    { name: "Inbox", icon: "fas fa-inbox" },
    { name: "Logout", icon: "fas fa-sign-out-alt" }
  ];

  const [darkTheme, setDarkTheme] = useDarkMode();

  return (
    <div
      className="hover:bg-bg-primary-100  rounded relative inline-block w-32"
      onMouseEnter={() => setVisible(!visible)}
      onMouseLeave={() => setVisible(!visible)}
    >
      <div
        className={`w-full relative flex border-gray-400 z-50 cursor-pointer`}
      >
        <button className="flex p-1 w-full justify-between">
          <div
            className="h-8 w-8 bg-center flex-shrink-0 bg-no-repeat rounded bg-white-500"
            style={habboFigure}
          ></div>
          <div className="flex flex-col w-full self-center">
            <span className="text-white text-center flex-grow self-center mx-1 font-semibold text-sm">
              {user?.username}
            </span>
            <div
              style={{ transition: "100ms" }}
              className={`${
                visible ? "h-2" : "h-0"
              } overflow-hidden flex justify-center`}
            >
              <i
                className={`fas fa-caret-down self-center text-xs text-white-500`}
              ></i>
            </div>
          </div>
        </button>
      </div>
      {visible && (
        <div className="absolute w-40 right-0">
          <div className="bg-surface-primary mt-2 px-1 flex shadow-lg flex-col w-full rounded border border-bd-primary dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col text-xs border-b border-bd-primary-500 p-1">
              <span className="text-on-bg-primary">Logged in as</span>
              <span className="font-semibold text-on-bg-primary-800">
                {user?.username}
              </span>
            </div>
            <div className="flex flex-col py-1">
              <label
                htmlFor="toogleA"
                className="px-1 flex items-center cursor-pointer"
              >
                <div className="w-full text-gray-500 text-xs">
                  <i className="fas fa-moon" />
                  <span className="ml-1">Dark mode</span>
                  <Switch
                    onChange={() => setDarkTheme(!darkTheme)}
                    checked={darkTheme}
                  />
                </div>
              </label>
              {tabs.map(tab => (
                <Link
                  key={tab.name}
                  className="p-1 text-xs text-gray-500 rounded hover:bg-gray-200"
                  to="#"
                >
                  {tab.icon && <i className={tab.icon}></i>}
                  <span className="ml-1">{tab.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropDown;
