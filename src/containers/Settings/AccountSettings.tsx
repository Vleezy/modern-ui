import DefaultModal from "components/layout/Modal/DefaultModal";
import { useAppState, useAppDispatch } from "context/app.context";
import React, { useState } from "react";
import MainLayout from "components/layout/MainLayout";
import { useLocalStorage } from "hooks/useLocalStorage";

const AccountSettings = () => {
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const { user } = useAppState();
  const dispatch = useAppDispatch();

  const themeColors = [
    "#a0aec0",
    "#e53e3e",
    "#ed8936",
    "#ecc94b",
    "#48bb78",
    "#4fd1c5",
    "#4299e1",
    "#5a67d8",
    "#6b46c1",
    "#ed64a6"
  ];

  const [themeColor, setThemeColor] = useLocalStorage("themeColor", "#ed64a6");

  /**
   * handleColorClick method handles clicking on colors in the colors modal by updating the theme color and closing the active modal.
   */
  const handleColorClick = (idx: number) => {
    const color = themeColors[idx];

    // Update color in localStorage using setLocalStorage hook.
    setThemeColor(color);

    // Update current context themeColor using using dispatch.
    dispatch({ type: "setThemeColor", value: color });

    // Remove modal.
    setColorModalVisible(false);
  };

  /**
   * Change motto.
   */
  const [motto, setMotto] = useState(user?.motto);

  return (
    <MainLayout>
      {colorModalVisible && (
        <DefaultModal closeModal={() => setColorModalVisible(false)}>
          <div className="p-2">
            <h4 className="text-xs text-gray-500 font-semibold">
              Select theme color
            </h4>
            <div className="flex flex-wrap bg-gray-200 p-1 rounded">
              {themeColors.map((color, idx) => (
                <div
                  className="p-px h-12 self-center w-12 m-1 rounded border border-gray-400"
                  data-color-id={idx}
                  key={idx}
                  onClick={() => handleColorClick(idx)}
                >
                  <div
                    className="w-full h-full rounded shadow self-center mr-4"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </DefaultModal>
      )}

      <div className="w-full">
        <div className="p-2">
          <h1 className="text-xl font-bold text-gray-700">Account Settings</h1>
          <p className="text-xs text-gray-600">
            Manage email address and login credentials
          </p>
        </div>

        <div className="w-full">
          <div className="bg-gray-300 rounded-sm p-2">
            <h2 className="text-sm text-gray-600 my-1">Motto</h2>
            <div className="flex rounded bg-gray-100">
              <input
                type="text"
                value={motto}
                onChange={e => setMotto(e.target.value)}
                style={{ transition: `border 200ms ease-in-out` }}
                className="w-full rounded-l border border-gray-400 focus:border-blue-500 focus:outline-none p-2 text-xs"
                placeholder="Write your motto here..."
              />
              <button className="border-t border-r border-b border-gray-400 rounded-r flex justify-center py-2 px-3 text-gray-600 text-xs">
                <i className="fas fa-save"></i>
              </button>
            </div>
            <div className="w-full flex justify-between mt-4">
              <div className="flex flex-col leading-snug">
                <span className="text-sm text-gray-600 font-semibold">
                  Theme color
                </span>
                <span className="text-xs text-gray-500">
                  The color used in various features such as navigation and
                  highlighting
                </span>
              </div>
              <div
                className="p-px h-8 self-center mr-4 w-8 rounded border border-gray-400"
                onClick={() => setColorModalVisible(true)}
              >
                <div
                  className="w-full h-full rounded shadow self-center mr-4"
                  style={{ backgroundColor: themeColor }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;
