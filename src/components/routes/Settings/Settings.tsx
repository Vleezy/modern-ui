import React from "react";
import MainLayout from "components/layout/MainLayout";
import { Link } from "react-router-dom";

const Settings = () => {
  const sections = [
    {
      title: "Account Settings",
      subtitle: "Email address, password",
      url: "/#"
    },
    {
      title: "Hotel Settings",
      subtitle: "Alerts, trading & friends",
      url: "/#"
    },
    {
      title: "Profile Settings",
      subtitle: "Visual preferences",
      url: "/#"
    }
  ];
  return (
    <MainLayout>
      <div className="border-t flex-wrap border-gray-400 flex mb-2">
        {sections.map(section => (
          <Link
            to={section.url}
            href="/accountsettings.html"
            className="py-2 px-4 bg-white w-full border-b border-gray-300"
          >
            <div className="flex justify-between">
              <div className="flex flex-col leading-tight">
                <h4 className="text-gray-800">{section.title}</h4>
                <span className="text-gray-500 text-xs">
                  {section.subtitle}
                </span>
              </div>
              <i className="fas fa-caret-right text-sm self-center text-gray-500" />
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t flex-wrap border-b border-gray-400 flex mb-2">
        <a href="/accountsettings.html" className="py-2 px-4 bg-white w-full">
          <div className="flex justify-between">
            <div className="flex flex-col leading-tight">
              <h4 className="text-gray-800">Login History</h4>
              <span className="text-gray-500 text-xs">
                View previous login-attempts...
              </span>
            </div>
            <i className="fas fa-caret-right text-sm self-center text-gray-500" />
          </div>
        </a>
      </div>
      <div className="border-t flex-wrap border-b border-gray-400 flex mb-2">
        <a href="/accountsettings.html" className="py-2 px-4 bg-white w-full">
          <div className="flex justify-between">
            <div className="flex flex-col leading-tight">
              <h4 className="text-red-600 font-semibold">Log out</h4>
            </div>
            <i className="fas fa-caret-right text-sm self-center text-gray-500" />
          </div>
        </a>
      </div>
    </MainLayout>
  );
};

export default Settings;
