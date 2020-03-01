import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { IArticleComment } from "models/user/IArticleComment";
import { getUserById, getUserByUsername } from "api/fakeApi";
import { IUser } from "models/user/IUser";

/**
 * Components
 */
import UserHoverCard from "../shared/UserHovercard";
import ProfilePicture from "../shared/ProfilePicture";
import Skeleton from "components/Skeleton";

interface INewsCommentProp {
  comment: IArticleComment;
  mentionable?: boolean;
}

const Comment = (props: INewsCommentProp) => {
  const { comment, mentionable } = props;

  const [articleComment, setArticleComment] = useState<string>();

  useEffect(() => {
    setArticleComment(comment.comment);
  }, []);

  const [author, setAuthor] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const fAuthor = await getUserById(comment.created_by);
      setAuthor(fAuthor);
    })();
  }, [comment]);

  const findValidMentions = async (
    initialComment: string
  ): Promise<string[]> => {
    // Find all mentions by @
    const pattern: RegExp = /\B@[a-z0-9_-]+/gi;
    const mentions: RegExpMatchArray | null = initialComment.match(pattern);

    // Array of valid mentions to be returned.
    let verifiedMentions: string[] = [];

    // Return empty array if no mentions has been found.
    if (!mentions) return verifiedMentions;

    // Loop through all found mentions and check if the user exists.
    return Promise.all(
      mentions.map(async (mention: string) => {
        const username = mention.slice(1);
        try {
          await getUserByUsername(username);

          verifiedMentions.push(mention);
          return;
        } catch (err) {
          return;
        }
      })
    ).then(() => {
      return verifiedMentions;
    });
  };

  const [commentWithMentions, setCommentWithMentions] = useState<
    (string | React.ReactNode)[]
  >();

  const applyMentionsMarkup = (comment: string, mentions: string[]) => {
    if (!mentions.length) return;

    const pattern = new RegExp(`(${mentions.join("|")})`, "g");
    // Array to store string parts.
    let stringParts = comment.split(pattern);

    // Array to store finalized array including React nodes.
    let stringPartsArr: (string | React.ReactNode)[] = stringParts;

    // Loop through each string part and wrap it with React nodes if it's a valid mention.
    for (let i = 0; i < stringParts.length; i++) {
      if (mentions.includes(stringParts[i])) {
        const username = stringParts[i].slice(1);
        stringPartsArr[i] = (
          <Link
            to={`/profile/${username}`}
            className="bg-blue-200 px-1 py-px rounded-sm text-fadedblack-600"
          >
            {username}
          </Link>
        );
      }
    }

    return stringPartsArr;
  };

  useEffect(() => {
    if (!articleComment) return;

    (async () => {
      const mentions = await findValidMentions(articleComment);
      setCommentWithMentions(applyMentionsMarkup(articleComment, mentions));
    })();
  }, [articleComment]);

  return (
    <div className="flex lg:flex border-b border-gray-100 p-1 dark:border-gray-700">
      <UserHoverCard>
        <ProfilePicture
          figure={author?.look}
          styles="bg-gray-200 cursor-pointer"
        />
      </UserHoverCard>
      <div className="flex flex-1 flex-col ml-2">
        <div className=" flex flex-col">
          <span className="text-xs">
            <UserHoverCard>
              <Link
                to={`profile/${author?.username}`}
                className="text-blue-500 font-semibold "
              >
                {author ? author.username : <Skeleton className="w-8" />}
              </Link>
            </UserHoverCard>
            <span className="text-gray-400 ml-1">6 minutes ago</span>
          </span>
          {commentWithMentions ? (
            <p className="text-xs text-gray-600">{commentWithMentions}</p>
          ) : articleComment ? (
            <p className="text-xs text-gray-600">{articleComment}</p>
          ) : (
            <Skeleton />
          )}
        </div>

        <div className="w-full">
          <button
            // onClick={() => setReplyBoxVisible(!replyBoxVisible)}
            className=" rounded text-xs text-gray-500 mr-1 hover:bg-gray-100 hover:p-1"
          >
            Reply
          </button>
          <button className=" rounded text-xs text-gray-500 mr-1 hover:bg-gray-100 hover:p-1">
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
