import { IUser } from "models/user/IUser";

const users = [
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
    username: "User203",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 7,
    username: "Yoda",
    look: "hd-205-3.ch-255-1193.lg-280-1208.hr-115-1054.sh-290-62",
    online: false
  },
  {
    id: 8,
    username: "Modern",
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

/**
 * Wrapper that returns contract for Suspense.
 */
// const wrapPromise = (promise: Promise<any>) => {
//   let status = "pending";
//   let result: any;
//   let suspender = promise.then(
//     r => {
//       status = "success";
//       result = r;
//     },
//     e => {
//       status = "error";
//       result = e;
//     }
//   );

//   return {
//     read() {
//       if (status === "pending") throw suspender;
//       else if (status === "error") throw result;
//       else if (status === "success") return result;
//     }
//   };
// };

export const getUsersByUsername = (username: string) => {
  return new Promise<IUser[]>((resolve, reject) => {
    setTimeout(() => {
      console.log("fetching users...");
      resolve(
        users.filter(user =>
          user.username.toLowerCase().includes(username.toLowerCase())
        )
      );
    }, 2000);
  });
};
