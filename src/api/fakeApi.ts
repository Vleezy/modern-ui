import { IArticle } from "./../models/user/IArticle";
import { IUser } from "models/user/IUser";
import { IArticleComment } from "models/user/IArticleComment";
import { rejects } from "assert";

const users: IUser[] = [
  {
    id: 1,
    username: "Mike",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: true
  },
  {
    id: 2,
    username: "Reis",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: true
  },
  {
    id: 3,
    username: "Chuckie",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 4,
    username: "Friend",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: true
  },
  {
    id: 5,
    username: "SomeName",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 6,
    username: "frien4",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 7,
    username: "frag",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 8,
    username: "Affress1",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 9,
    username: "Mads",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: true
  }
];

const articles: IArticle[] = [
  {
    id: 1,
    image: "lpromo_bawwalleeventfeb.png",
    title: "First article!",
    created_at: 1582747106550,
    created_by: 1,
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse laudantium sint architecto deleniti aliquid odit libero. Quas praesentium aperiam odit quibusdam facilis assumenda tempora eveniet ratione itaque expedita veniam ullam, corporis harum, magnam sint exercitationem. Cum blanditiis recusandae aperiam quasi voluptate excepturi laboriosam neque laudantium pariatur natus id atque est illum aspernatur nobis, soluta ipsum, tempora alias? Impedit corporis ipsam eos repellendus maiores corrupti fugit alias dolorum quas similique id nisi quod consequuntur cupiditate, rerum eaque voluptas commodi unde placeat harum? Sapiente architecto a adipisci harum, exercitationem ut similique nostrum dolorum, debitis repellat maxime? Perspiciatis inventore eveniet accusantium ipsa. "
  },
  {
    id: 2,
    title: "Ferirst article!",
    image: "lpromo_bawwalleeventfeb.png",
    created_at: 1582747106550,
    created_by: 3,
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse laudantium sint architecto deleniti aliquid odit libero. Quas praesentium aperiam odit quibusdam facilis assumenda tempora eveniet ratione itaque expedita veniam ullam, corporis harum, magnam sint exercitationem. Cum blanditiis recusandae aperiam quasi voluptate excepturi laboriosam neque laudantium pariatur natus id atque est illum aspernatur nobis, soluta ipsum, tempora alias? Impedit corporis ipsam eos repellendus maiores corrupti fugit alias dolorum quas similique id nisi quod consequuntur cupiditate, rerum eaque voluptas commodi unde placeat harum? Sapiente architecto a adipisci harum, exercitationem ut similique nostrum dolorum, debitis repellat maxime? Perspiciatis inventore eveniet accusantium ipsa. "
  },
  {
    id: 3,
    title: "First article!",
    image: "lpromo_bawwalleeventfeb.png",
    created_at: 1582747106550,
    created_by: 1,
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse laudantium sint architecto deleniti aliquid odit libero. Quas praesentium aperiam odit quibusdam facilis assumenda tempora eveniet ratione itaque expedita veniam ullam, corporis harum, magnam sint exercitationem. Cum blanditiis recusandae aperiam quasi voluptate excepturi laboriosam neque laudantium pariatur natus id atque est illum aspernatur nobis, soluta ipsum, tempora alias? Impedit corporis ipsam eos repellendus maiores corrupti fugit alias dolorum quas similique id nisi quod consequuntur cupiditate, rerum eaque voluptas commodi unde placeat harum? Sapiente architecto a adipisci harum, exercitationem ut similique nostrum dolorum, debitis repellat maxime? Perspiciatis inventore eveniet accusantium ipsa. "
  },
  {
    id: 4,
    title: "First article!",
    image: "lpromo_bawwalleeventfeb.png",
    created_at: 1582747106550,
    created_by: 1,
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit esse laudantium sint architecto deleniti aliquid odit libero. Quas praesentium aperiam odit quibusdam facilis assumenda tempora eveniet ratione itaque expedita veniam ullam, corporis harum, magnam sint exercitationem. Cum blanditiis recusandae aperiam quasi voluptate excepturi laboriosam neque laudantium pariatur natus id atque est illum aspernatur nobis, soluta ipsum, tempora alias? Impedit corporis ipsam eos repellendus maiores corrupti fugit alias dolorum quas similique id nisi quod consequuntur cupiditate, rerum eaque voluptas commodi unde placeat harum? Sapiente architecto a adipisci harum, exercitationem ut similique nostrum dolorum, debitis repellat maxime? Perspiciatis inventore eveniet accusantium ipsa. "
  }
];

const newsComments: IArticleComment[] = [
  {
    id: 1,
    article_id: 2,
    created_by: 2,
    comment: "This @Chuckie article @Reis is great!!"
  },
  {
    id: 2,
    article_id: 2,
    created_by: 2,
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi corrupti minus velit sunt tempora libero? Illum nesciunt iusto itaque incidunt ipsam pariatur repellat at consequuntur numquam! Sunt quasi similique dicta nobis officiis, dolorum reiciendis explicabo sint sed placeat animi aut deleniti eos beatae id quam error nam, repellendus aliquam odio!"
  },
  {
    id: 3,
    article_id: 2,
    created_by: 2,
    comment: "@Chuckie check this out"
  },
  {
    id: 4,
    article_id: 2,
    created_by: 2,
    comment: "This user does not exist - @Tuuutujeiur"
  },
  {
    id: 5,
    article_id: 2,
    created_by: 2,
    comment: "This article is great!!"
  },
  {
    id: 6,
    article_id: 2,
    created_by: 2,
    comment: "This article is great!!"
  }
];

const LOAD_TIME = 200;

export const getArticleComments = (articleId: number) => {
  return new Promise<IArticleComment[]>(resolve => {
    console.log("fetching comments...");
    setTimeout(() => {
      resolve(newsComments.filter(comment => comment.article_id === articleId));
    }, LOAD_TIME);
  });
};

/**
 *
 */
export const getArticleById = (id: number) => {
  return new Promise<IArticle>(resolve => {
    setTimeout(() => {
      resolve(articles.find(article => article.id === id));
    }, LOAD_TIME);
  });
};

/**
 * Returns an array of users that matches the username string.
 */
export const getUsersByUsername = (username: string) => {
  return new Promise<IUser[]>(resolve => {
    setTimeout(() => {
      resolve(
        users.filter(user =>
          user.username.toLowerCase().includes(username.toLowerCase())
        )
      );
    }, LOAD_TIME);
  });
};

/**
 * Returns a single user object from user id.
 */
export const getUserById = (id: number) => {
  return new Promise<IUser>(resolve => {
    setTimeout(() => {
      resolve(users.find(user => user.id === id));
    }, LOAD_TIME);
  });
};

/**
 * Returns a single user object from user username.
 */
export const getUserByUsername = (username: string) => {
  return new Promise<IUser>((resolve, reject) => {
    setTimeout(() => {
      if (users.find(user => user.username === username)) {
        resolve(users.find(user => user.username === username));
      } else {
        reject("user not found");
      }
    }, LOAD_TIME);
  });
};

/**
 * Wrapper that returns contract for Suspense.
 */
const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      else if (status === "error") throw result;
      else if (status === "success") return result;
    }
  };
};
