import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Components
 */
import UserHoverCard from "./shared/UserHovercard";
import ProfilePicture from "./shared/ProfilePicture";

interface INewsCommentProps {
  comment: any;
}

const NewsComment = (props: INewsCommentProps) => {
  const [replyBoxVisible, setReplyBoxVisible] = useState(false);
  const { comment } = props;

  return (
    <div className="hidden lg:flex border-b border-gray-100 p-1">
      <UserHoverCard>
        <ProfilePicture figure={comment.user.look} styles="bg-gray-200 cursor-pointer" />
      </UserHoverCard>
      <div className="flex flex-1 flex-col ml-2">
        <div className=" flex flex-col">
          <span className="text-xs">
            <UserHoverCard>
              <Link
                to={`profile/${comment.user.username}`}
                className="text-blue-500 font-semibold "
              >
                {comment.user.username}
              </Link>
            </UserHoverCard>
            <span className="text-gray-400 ml-1">6 minutes ago</span>
          </span>
          <p className="text-xs text-gray-600">{comment?.comment}</p>
        </div>
        <div className="w-full">
          <button
            onClick={() => setReplyBoxVisible(!replyBoxVisible)}
            className=" rounded text-xs text-gray-500 mr-1 hover:bg-gray-100 hover:p-1"
          >
            Reply
          </button>
          <button className=" rounded text-xs text-gray-500 mr-1 hover:bg-gray-100 hover:p-1">
            Like
          </button>
        </div>

        {/* Render replies */}
        {comment.replies && (
          <div className="bg-gray-100 p-1 rounded">
            {comment.replies.map((reply: any) => (
              <div className="flex">
                <UserHoverCard>
                  <ProfilePicture figure={reply.user.look} styles="bg-gray-200 cursor-pointer" />
                </UserHoverCard>
                <div className="flex flex-1 flex-col ml-2">
                  <div className=" flex flex-col">
                    <span className="text-xs">
                      <UserHoverCard>
                        <Link
                          to={`profile/${reply.user.username}`}
                          className="text-blue-500 font-semibold "
                        >
                          {reply.user.username}
                        </Link>
                      </UserHoverCard>
                      <span className="text-gray-400 ml-1">6 minutes ago</span>
                    </span>
                    <p className="text-xs text-gray-600">{reply.comment}</p>
                  </div>
                  <div className="w-full">
                    <button className=" rounded text-xs text-gray-500 mr-1 hover:bg-gray-100 hover:p-1">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex bg-gray-400 justify-center rounded hover:bg-gray-500 bg-fade cursor-pointer">
              <span className="text-xs text-white">Load 7 more replies</span>
            </div>
          </div>
        )}
        {replyBoxVisible && (
          <div>
            <textarea
              className="w-full mt-1 rounded border border-gray-200 bg-gray-100 text-xs p-1"
              placeholder="Write reply..."
            ></textarea>
            <div className="flex justify-end">
              <button
                className="text-xs px-1 text-gray-600 mr-1 rounded border border-gray-200 bg-gray-100 "
                onClick={() => {
                  alert("Reply sent!");
                  setReplyBoxVisible(false);
                }}
              >
                Reply
              </button>
              <button
                className="text-xs px-1 text-gray-600 rounded border border-gray-200 bg-gray-100 "
                onClick={() => setReplyBoxVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsComment;
