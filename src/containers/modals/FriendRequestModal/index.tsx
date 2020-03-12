import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "components/ProfilePicture";

const FriendRequestModal = () => {
  const illustration = {
    backgroundImage: `url('assets/images/illustrations/combo_9.gif')`,
    backgroundPosition: `90% -20%, bottom right`
  };

  const requests = [
    { username: "chuckie", mutual: 4, online: true },
    { username: "mock", mutual: 0, online: false },
    { username: "flcl", mutual: 2, online: true },
    { username: "chuckie", mutual: 4, online: true },
    { username: "mock", mutual: 0, online: false },
    { username: "flcl", mutual: 2, online: true },
    { username: "chuckie", mutual: 4, online: true },
    { username: "mock", mutual: 0, online: false },
    { username: "flcl", mutual: 2, online: true },
    { username: "chuckie", mutual: 4, online: true },
    { username: "mock", mutual: 0, online: false },
    { username: "flcl", mutual: 2, online: true },
    { username: "chuckie", mutual: 4, online: true },
    { username: "mock", mutual: 0, online: false },
    { username: "flcl", mutual: 2, online: true }
  ];

  return (
    <div
      className="bg-no-repeat  bg-right-bottom"
      style={{
        backgroundImage: `url('assets/images/illustrations/blobs.png')`
      }}
    >
      <div className="px-2 mb-4 max-h-64 overflow-y-scroll">
        {requests.map(req => (
          <div className="w-full flex justify-between mb-1">
            <div className="flex">
              <ProfilePicture
                figure={process.env.REACT_APP_HABBO_FIGURE}
                online={req.online}
                styles="bg-gray-300 self-center"
              />
              <div className="flex flex-col ml-2 self-center leading-snug">
                <Link to="#" className="font-semibold text-sm text-blue-600">
                  {req.username}
                </Link>
                <p className="text-gray-500 text-xs">
                  {req.mutual ? req.mutual : "No"} mutual friends
                </p>
              </div>
            </div>
            <div className="flex">
              <button className="px-2 flex rounded text-xs text-gray-600">
                Decline
              </button>
              <button className="px-2 flex rounded text-xs bg-fadedwhite-400 bg-gray-200 text-gray-600 self-center py-2 px-3">
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={illustration} className="bg-no-repeat h-20 pl-2 text-xs">
        <h5 className="font-semibold text-blue-600">Disable friend requests</h5>
        <p className="w-1/2 text-gray-500">
          Stop recieving friend requests by disabling them in your settings!
        </p>
      </div>
    </div>
  );
};

export default FriendRequestModal;
