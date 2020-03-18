import FriendlistItem from 'components/FriendlistItem';
import HovercraftSpinner from 'components/shared/spinners/HovercraftSpinner';
import { IUser } from 'models/user/IUser';
import React from 'react';

interface UsersListProps {
  loading?: boolean;
  users: IUser[];
}

const UsersList = (props: UsersListProps) => {
  const { loading, users } = props;

  if (loading) return <HovercraftSpinner />;

  if (!users.length) return <>"No users found"</>;

  return (
    <div className="flex flex-wrap">
      {users.map((user, idx) => (
        <FriendlistItem key={idx} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
