import React from "react";
import NewsPreviewItem from "components/NewsPreviewItem";
import { Link } from "react-router-dom";

const NewsTab = () => {
  return (
    <div className="">
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
      <div className="p-2">
        {[...Array(5)].map((article, idx) => (
          <div className="mb-1">
            <NewsPreviewItem key={idx} />
          </div>
        ))}
      </div>

      {/* <div className="pl-2">
        <div className="p-1 pb-2 rounded bg-gray-300 overflow-x-auto w-full flex dark:bg-gray-800">
          {[...Array(4)].map((_, index) => (
            <NewsPreviewItem key={index} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default NewsTab;
