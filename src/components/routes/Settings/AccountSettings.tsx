import React from "react";
import MainLayout from "components/layout/MainLayout/MainLayout";

const AccountSettings = () => {
  return (
    <MainLayout>
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
              {/* <span className="text-sm text-gray-500">
                Click <a href="#">here</a> to recieve a verification email at
                fake-mail@gmail.com
              </span> */}
            </div>
          </div>
          <h4 className="text-xs text-gray-500 font-semibold">
            Account setting
          </h4>
          <div className="bg-white rounded border border-gray-400 p-1 mt-1">
            <div className="relative mt-6">
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
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;
