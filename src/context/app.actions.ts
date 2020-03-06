/**
 * Models
 */
import { Action } from "./app.context";
import { IUser } from "models/user/IUser";
import environment from "relay/Environment";

/**
 * Dependencies
 */
import { fetchQuery } from "react-relay";

// const graphql = require("babel-plugin-relay/macro");
import { graphql } from "babel-plugin-relay/macro";

export const fetchUser = (): Action => {
  // Fetch user from server
  const query = graphql`
    query appActionsQuery($userID: Int!) {
      user(id: $userID) {
        username
        look
      }
    }
  `;

  const variables = {
    userID: 1
  };
  fetchQuery(environment, query, variables).then(data => {
    console.log(data);
  });

  const user: IUser = {
    username: "Chuckie",
    look: process.env.REACT_APP_HABBO_FIGURE ?? "",
    motto: "this is my motto"
  };

  return {
    type: "setUser",
    value: user
  };
};

export const setHomeTab = (tabKey: string): Action => {
  return {
    type: "setHomeTab",
    value: tabKey || "NEWS"
  };
};

export const setThemeColor = (color: string): Action => {
  return {
    type: "setThemeColor",
    value: color || "FFFFFF" // Return color or white.
  };
};
