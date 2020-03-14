import MainLayout from 'components/layout/MainLayout';
import ProfilePicture from 'components/ProfilePicture';
import React from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
  user: string;
}

const Profile = () => {
  const params = useParams<RouteParams>();

  return (
    <MainLayout headerTransparent>
      <div className="flex flex-col w-full -mt-12">
        <div
          className="flex w-full h-40 bg-center border-b-2 border-white"
          style={{
            backgroundImage: `url('/assets/images/profile_backgrounds/bubble.gif')`
          }}
        />
        <div className="-mt-6 flex w-2/3 mx-auto">
          <div className="mr-2">
            <ProfilePicture
              styles="bg-white"
              figure={process.env.REACT_APP_HABBO_FIGURE}
            />
          </div>
          <div className="bg-white rounded flex p-1 flex-grow justify-between">
            <div>
              <button></button>
              <button></button>
            </div>
            <button className="bg-blue-500 text-white text-sm p-1 rounded">
              <i className="fas fa-plus text-xs mr-1" />
              Add friend
            </button>
          </div>
        </div>

        <div className="p-2"></div>
      </div>
    </MainLayout>
  );
};

export default Profile;
