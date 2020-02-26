import React from "react";
import NewsPreviewItem from "components/NewsPreviewItem";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const NewsTab = () => {
  const categories = [
    { name: "Events", icon: "fas fa-calendar" },
    { name: "Announcements", icon: "fas fa-bullhorn" },
    { name: "ROTW", icon: "" }
  ];
  return (
    <article>
      <Helmet>
        <title>News</title>
      </Helmet>
      <div className="px-2 mt-2">
        <h4 className="text-gray-500 self-center text-xs font-semibold self-center">
          Articles by category
        </h4>
        <div className="flex justify-between">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex flex-col w-1/3 rounded bg-gray-300 dark:bg-gray-800 dark:text-gray-600 text-gray-500 py-4 text-center ${idx !==
                2 && "mr-1"}`}
            >
              <span className="text-xs mb-1">{cat.name}</span>
              <i className={`${cat.icon}`}></i>
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-2 justify-between pb-1">
        <h4 className="text-gray-500 self-center text-xs font-semibold self-center">
          Featured news
        </h4>
        <Link
          to="/news"
          className="text-gray-500 self-center text-xs self-center font-semibold"
        >
          All articles »
        </Link>
      </div>

      <div className="pl-2">
        <div className="p-1 pb-2 rounded bg-gray-300 overflow-x-auto w-full flex dark:bg-gray-800">
          {[...Array(4)].map((_, index) => (
            <NewsPreviewItem key={index} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default NewsTab;
