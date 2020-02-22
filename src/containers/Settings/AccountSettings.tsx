import DefaultModal from "components/layout/Modal/DefaultModal";
import { useAppState } from "context/app.context";
import React, { useState } from "react";
import MainLayout from "components/layout/MainLayout";

const AccountSettings = () => {
  const [colorModalVisible, setColorModalVisible] = useState(false);
  const { user } = useAppState();

  return (
    <MainLayout>
      {colorModalVisible && (
        <DefaultModal closeModal={() => setColorModalVisible(false)}>
          test
        </DefaultModal>
      )}
      <div className="p-2 w-full">
        <div className="w-full">
          <div className="bg-white rounded border border-gray-400 flex py-1">
            <div className="flex mx-2">
              <div className="h-6 w-6 self-center border border-gray-400 flex justify-center rounded">
                {/* <i className="fas fa-check self-center text-blue-500 fa-xs"></i> */}
                <i className="fas fa-times self-center text-red-500 fa-xs"></i>
              </div>
            </div>
            <div className="flex flex-col p-1">
              <span className="text-gray-500 text-xs">
                You have not verified your account!
              </span>
            </div>
          </div>
          <h4 className="text-xs text-gray-500 font-semibold">
            Account setting
          </h4>
          <div className="bg-white rounded border border-gray-400 p-2 mt-1">
            <div className="relative mt-4">
              <span
                className="absolute text-xs text-gray-500"
                style={{ bottom: "25px" }}
              >
                Motto
              </span>
              <input
                type="text"
                className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-sm w-full"
                style={{ transition: `border 200ms ease-in-out` }}
                value={user?.motto}
              />
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
                <div className="w-full h-full rounded shadow bg-pink-500 self-center mr-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;