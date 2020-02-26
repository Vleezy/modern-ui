import React from "react";

import { useAppState } from "context/app.context";
import loadable from "utils/loadable";

import MainLayout from "components/layout/MainLayout";
import NewsPreviewContainer from "components/NewsPreviewContainer";
import HovercraftSpinner from "components/shared/spinners/HovercraftSpinner";

const Me = () => {
  const { currentHomeTab } = useAppState();

  const renderTab = (currentTab: string) => {
    switch (currentTab) {
      case "NEWS":
        // Lazy load component.
        const NewsTab = loadable(() => import("../NewsTab"), {
          fallback: <HovercraftSpinner />
        });
        return <NewsTab />;

      case "FRIENDS":
        // Lazy load component.
        const FriendsTab = loadable(() => import("../FriendsTab"), {
          fallback: <HovercraftSpinner />
        });
        return <FriendsTab />;

      default:
        break;
    }
  };

  return (
    <MainLayout isHomepage={true}>
      <div className="hidden lg:flex">
        <div className="bg-background rounded w-2/3 flex justify-between border border-gray-400 p-1 flex flex-col mr-2 self-start dark:bg-gray-800 dark:border-gray-700">
          <div
            className="bg-center w-full h-32 rounded-t flex justify-end bg-surface"
            style={{ backgroundImage: `url(/assets/images/view_ca_wide.png)` }}
          >
            <div className="h-full flex flex-col justify-center">
              <button className="self-center flex px-4 py-2 bg-green-600 mr-2 border border-green-500 rounded">
                Enter hotel _>
              </button>
            </div>
          </div>
          <div className="relative h-10 rounded-b-sm flex">
            <div
              className="absolute bg-no-repeat bg-bottom -mt-24 ml-2"
              style={{
                backgroundImage: `url(/assets/images/podium.png)`,
                padding: `0 25px 38px 22px`
              }}
            >
              <img
                alt="Habbo Figure"
                src={`https://www.habbo.nl/habbo-imaging/avatarimage?figure=${process.env.REACT_APP_HABBO_FIGURE}`}
              />
            </div>
            <div className="ml-32"></div>
            <div className="bg-blue-400">Test</div>
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-400 rounded w-1/3 p-1 self-start dark:bg-gray-800 dark:border-gray-700">
          <NewsPreviewContainer />
        </div>
      </div>
      <div className="block lg:hidden">
        {renderTab(currentHomeTab || "NEWS")}
      </div>
    </MainLayout>
  );
};

export default Me;
