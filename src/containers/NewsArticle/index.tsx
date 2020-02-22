import React from "react";
import NewsComment from "components/NewsComment";
import ProfilePicture from "components/shared/ProfilePicture";
import { useHistory } from "react-router-dom";
import MainLayout from "components/layout/MainLayout";

const NewsArticle = () => {
  const comments = [
    {
      id: 1,
      user: { username: "Chuckie", look: process.env.REACT_APP_HABBO_FIGURE },
      comment: "This article is great!!"
    },
    {
      id: 2,
      user: { username: "Chuckie", look: process.env.REACT_APP_HABBO_FIGURE },
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi corrupti minus velit sunt tempora libero? Illum nesciunt iusto itaque incidunt ipsam pariatur repellat at consequuntur numquam! Sunt quasi similique dicta nobis officiis, dolorum reiciendis explicabo sint sed placeat animi aut deleniti eos beatae id quam error nam, repellendus aliquam odio!",
      replies: [
        {
          user: {
            username: "SomeDude",
            look:
              "ch-805-85.hd-195-1.hr-3172-45.lg-285-1338.sh-300-110.ha-3156-110.he-3069-105-81.ea-.ca-.cc-3007-90-90.wa-"
          },
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorum?"
        },
        {
          user: {
            username: "SomeDude",
            look:
              "ch-805-85.hd-195-1.hr-3172-45.lg-285-1338.sh-300-110.ha-3156-110.he-3069-105-81.ea-.ca-.cc-3007-90-90.wa-"
          },
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorum?"
        }
      ]
    },
    {
      id: 3,
      user: { username: "Chuckie", look: process.env.REACT_APP_HABBO_FIGURE },
      comment: "This article is great!!"
    },
    {
      id: 4,
      user: { username: "Chuckie", look: process.env.REACT_APP_HABBO_FIGURE },
      comment: "This article is great!!"
    },
    {
      id: 5,
      user: { username: "Chuckie", look: process.env.REACT_APP_HABBO_FIGURE },
      comment: "This article is great!!"
    },
    {
      id: 6,
      user: { username: "Chuckie", look: process.env.REACT_APP_HABBO_FIGURE },
      comment: "This article is great!!"
    }
  ];

  const history = useHistory();
  return (
    <MainLayout>
      <div
        className="w-full h-40 flex flex-col justify-between bg-center border-b-2 dark:border-gray-800 border-gray-400"
        style={{
          backgroundImage: `url(/assets/images/news_images/lpromo_bawwalleeventfeb.png)`
        }}
      >
        <div className="flex justify-between text-white p-2">
          <div>
            <button onClick={() => history.goBack()} className="h-8 w-8">
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div className="flex"></div>
        </div>
        <div className="flex flex-col p-4">
          <h1 className="text-white text-2xl font-semibold">News Title 1</h1>
          <span className="text-xs opacity-50 text-white">
            Events | 16 Jan 2020
          </span>
        </div>
      </div>

      <div className="px-2">
        <div className=" my-2">
          <div className="w-full flex flex-wrap justify-between">
            <div className="flex">
              <ProfilePicture
                figure={process.env.REACT_APP_HABBO_FIGURE}
                online={true}
                styles="bg-gray-200"
              />
              <div className="flex flex-col leading-snug text-gray-700 px-2 self-center">
                <span className="text-blue-700 text-sm font-semibold flex">
                  Chuckie
                </span>
                <span className="text-gray-500 text-xs">Hotel Admin</span>
              </div>
            </div>
            <div className="flex self-center"></div>
          </div>
        </div>
        <button className="bg-gray-100 w-full flex justify-center text-xs text-gray-500 py-2 border rounded border-gray-400">
          Show comments (24){" "}
          <i className="fas fa-angle-down ml-1 self-center"></i>
        </button>

        <div className="text-gray-600 text-sm px-2 pt-2">
          <h2 className="text-gray-700 font-semibold text-lg">Header2</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          consectetur eligendi deleniti amet perspiciatis aliquid corrupti
          laborum impedit. Velit iste corporis consequuntur fugit ullam fuga
          earum pariatur quo dicta quasi, officiis vel quod cum asperiores
          quidem numquam nesciunt voluptate rem aliquam et, enim corrupti
          laudantium optio? Facilis porro repellat veritatis.
          <br />
          <br />
          <h3 className="text-gray-700 font-semibold text-base">Header3</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          consectetur eligendi deleniti amet perspiciatis aliquid corrupti
          laborum impedit. Velit iste corporis consequuntur fugit ullam fuga
          earum pariatur quo dicta quasi, officiis vel quod cum asperiores
          quidem numquam nesciunt voluptate rem aliquam et, enim corrupti
          laudantium optio? Facilis porro repellat veritatis.
          <br />
          <br />
          <h4 className="text-gray-700 font-semibold text-sm">Header3</h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          consectetur eligendi deleniti amet perspiciatis aliquid corrupti
          laborum impedit. Velit iste corporis consequuntur fugit ullam fuga
          earum pariatur quo dicta quasi, officiis vel quod cum asperiores
          quidem numquam nesciunt voluptate rem aliquam et, enim corrupti
          laudantium optio? Facilis porro repellat veritatis.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          consectetur eligendi deleniti amet perspiciatis aliquid corrupti
          laborum impedit. Velit iste corporis consequuntur fugit ullam fuga
          earum pariatur quo dicta quasi, officiis vel quod cum asperiores
          quidem numquam nesciunt voluptate rem aliquam et, enim corrupti
          laudantium optio? Facilis porro repellat veritatis.
          <br />
          <br />
        </div>
      </div>
      <div className="hidden lg:block">
        <textarea
          className="w-full rounded border border-gray-400 text-xs p-1"
          placeholder="Write some comment..."
        ></textarea>
        <h4 className="text-gray-500 my-1 self-center text-xs font-semibold self-center">
          Comments ({comments.length})
        </h4>
        <div className="bg-white border border-gray-400 rounded dark:bg-gray-800 dark:border-gray-700">
          {comments.map(comment => (
            <NewsComment comment={comment} />
          ))}
        </div>
      </div>
      <div className="mt-2">
        <h4 className="text-gray-500 my-1 self-center text-xs font-semibold self-center">
          Other articles
        </h4>
      </div>
    </MainLayout>
  );
};

export default NewsArticle;
