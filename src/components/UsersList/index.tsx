import React from "react";

import { IUser } from "models/user/IUser";
import FriendlistItem from "components/FriendlistItem";
import HovercraftSpinner from "components/shared/spinners/HovercraftSpinner";

const UsersList = (props: UsersListProps) => {
  const { loading = true, users } = props;

  if (loading) return <HovercraftSpinner />;

  if (!users.length) return <>"No users found"</>;

  return (
    <>
      {users.map((user, idx) => (
        <div key={idx}>
          <FriendlistItem user={user} />
        </div>
      ))}
    </>
  );
};

interface UsersListProps {
  loading: boolean;
  users: IUser[];
}

export default UsersList;
