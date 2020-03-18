import Button from 'components/generic/Button';
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
      <div className="flex flex-col w-full -mt-12 relative">
        <div
          className="flex w-full h-40 bg-center border-b-2 border-white"
          style={{
            backgroundImage: `url('/assets/images/profile_backgrounds/bubble.gif')`
          }}
        >
          <div className="flex mx-2 absolute top-0">
            <div className="mr-2">
              <ProfilePicture
                size="lg"
                styles="bg-white"
                figure={process.env.REACT_APP_HABBO_FIGURE}
              />
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="h-10 w-full bg-blue-200"></div>
          <Button>Test</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
