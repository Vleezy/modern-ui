import FriendlistItem from 'components/FriendlistItem';
import HovercraftSpinner from 'components/shared/spinners/HovercraftSpinner';
import { IUser } from 'models/user/IUser';
import React from 'react';

interface UsersListProps {
  loading?: boolean;
  users: IUser[];
  gridView?: boolean;
}

const UsersList = (props: UsersListProps) => {
  const { loading, users, gridView = false } = props;

  if (loading) return <HovercraftSpinner />;

  if (!users.length) return <>"No users found"</>;

  return (
    <div className="flex flex-wrap">
      {users.map((user, idx) => (
        <FriendlistItem key={idx} user={user} gridView={gridView} />
      ))}
    </div>
  );
};

export default UsersList;
