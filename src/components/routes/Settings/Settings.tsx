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
    },
    {
      title: "Login History",
      subtitle: "View previous login attempts",
      url: "/#",
      break: true
    }
  ];
  return (
    <MainLayout>
      <div className="flex-wrap flex mb-2 border-gray-400">
        {sections.map((section, idx) => (
          <Link
            key={idx}
            to={section.url}
            href="/accountsettings.html"
            className={`py-2 px-4 bg-white w-full border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700 ${section.break &&
              "mt-2 border-t"}`}
          >
            <div className="flex justify-between">
              <div className="flex flex-col leading-tight">
                <h4 className="text-gray-800 dark:text-gray-500">
                  {section.title}
                </h4>
                <span className="text-gray-500 text-xs dark:text-gray-600">
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
