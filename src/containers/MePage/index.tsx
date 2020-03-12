import React, { useState, useEffect } from "react";

import { useModal } from "context/modal/modal.context";
import { useAppState } from "context/app.context";

import loadable from "utils/loadable";

import MainLayout from "components/layout/MainLayout";
import NewsPreviewContainer from "components/NewsPreviewContainer";
import HovercraftSpinner from "components/shared/spinners/HovercraftSpinner";
import Modal from "components/Modal";

const Me = () => {
  const { currentHomeTab } = useAppState();

  const renderTab = (currentTab: string) => {
    switch (currentTab) {
      case "NEWS":
        // Lazy load component
        const NewsTab = loadable(() => import("../NewsTab"), {
          fallback: <HovercraftSpinner />
        });
        return <NewsTab />;

      case "FRIENDS":
        // Lazy load component
        const FriendsTab = loadable(() => import("../FriendsTab"), {
          fallback: <HovercraftSpinner />
        });
        return <FriendsTab />;

      default:
        break;
    }
  };

  const { showModal, closeModal } = useModal();

  const currencies = [
    {
      name: "credits",
      icon: "/assets/images/icons/credits.png",
      amount: 420
    },
    {
      name: "pixels",
      icon: "/assets/images/icons/pixel.png",
      amount: 293
    },
    {
      name: "diamonds",
      icon: "/assets/images/icons/diamonds.png",
      amount: 3219
    }
  ];

  const MyModal = () => (
    <div>
      <h4>Hey</h4>
      <div></div>
    </div>
  );

  // useEffect(() => {
  //   showModal(MyModal);
  // }, []);

  const habboViewBg = {
    backgroundImage: `url(/assets/images/view_ca_wide.png)`
  };

  return (
    <MainLayout isHomepage={true}>
      <div className="hidden lg:flex">
        <div className="bg-background rounded w-2/3 flex justify-between bg-white border border-gray-400 p-1 flex flex-col mr-2 self-start dark:bg-gray-800 dark:border-gray-700">
          <div
            className="bg-center w-full h-32 rounded-t flex flex-col justify-end bg-surface"
            style={habboViewBg}
          >
            <div className="w-full flex justify-end mb-2">
              <button className="self-center flex px-4 py-2 bg-green-600 mr-2 border border-green-500 rounded self-end">
                Enter hotel ->
              </button>
            </div>
            <div className="w-full flex flex-col justify-end">
              <div className="flex ml-32 mr-2 rounded mb-1">
                {currencies.map(currency => (
                  <div className="flex mr-8" key={currency.name}>
                    <div
                      className="w-6 h-6 bg-center bg-no-repeat mr-1"
                      style={{ backgroundImage: `url(${currency.icon})` }}
                    ></div>
                    <span className="text-gray-200 self-center text-xs">
                      {currency.amount}
                    </span>
                  </div>
                ))}
                {/* {[...Array(4)].map(() => (
                <div className="flex" key={currency.name}>
                  <div
                    className="w-6 h-6 bg-center bg-no-repeat mr-1"
                    style={{ backgroundImage: `url(${currency.icon})` }}
                  ></div>
                  <span className="text-gray-200 self-center font-semibold text-xs">
                    {currency.amount}
                  </span>
                </div>
                ))} */}
              </div>
            </div>
          </div>
          <div className="relative h-10 rounded-b-sm flex mt-1">
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
            <button
              className="px-2 py-1 rounded bg-blue-100 text-xs font-semibold text-blue-600"
              onClick={() => showModal(MyModal)}
            >
              Notifications (4)
            </button>
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
