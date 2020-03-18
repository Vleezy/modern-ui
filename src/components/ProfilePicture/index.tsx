import { IUser } from 'models/user/IUser';
import React from 'react';

interface ProfilePictureProps {
  figure?: string;
  user?: IUser;
  styles?: string;
  online?: boolean;
  size?: "sm" | "md" | "lg";
}

const ProfilePicture = (props: ProfilePictureProps) => {
  const { figure, styles, online, user, size = "md" } = props;

  const habboFigureMd = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${figure}")`,
    backgroundPositionY: "-14px",
    backgroundPositionX: "-9px"
  };

  const habboFigureLg = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${figure}&size=l")`,
    backgroundPositionY: "-28px",
    backgroundPositionX: "-14px"
  };

  const habboFigureBanned = {
    backgroundImage: `url(/assets/images/isbanned_small.png)`,
    backgroundPositionY: "-14px",
    backgroundPositionX: "-9px"
  };

  const onlineIndicator = (
    <div
      className={`absolute h-3 w-3 ${
        online ? "bg-green-500" : "bg-gray-500"
      } rounded right-0 border-2 border-gray-100 -m-px dark:border-gray-900`}
    />
  );

  const isBanned = false;

  if (!figure)
    return <div className={`rounded w-12 h-12 flex-shrink-0 ${styles}`}></div>;

  switch (size) {
    case "sm":
      return (
        <div
          className={`h-8 w-8 bg-center flex-shrink-0 bg-no-repeat rounded bg-white-500 ${styles}`}
          style={habboFigureMd}
        >
          {/* Render online indicator if set in props */}
          {typeof user?.online !== "undefined" && onlineIndicator}
        </div>
      );

    case "md":
      return (
        <div
          id="profile-pic"
          className={`${styles &&
            styles} rounded shadow-inner w-12 h-12 flex-shrink-0 relative`}
          style={isBanned ? habboFigureBanned : habboFigureMd}
        >
          {/* Render online indicator if set in props */}
          {typeof online !== "undefined" && onlineIndicator}
        </div>
      );

    case "lg":
      return (
        <div
          id="profile-pic"
          className={`${styles &&
            styles} rounded shadow-inner w-24 h-24 flex-shrink-0 relative`}
          style={
            isBanned
              ? habboFigureBanned
              : size === "lg"
              ? habboFigureLg
              : habboFigureMd
          }
        >
          {/* Render online indicator if set in props */}
          {typeof online !== "undefined" && onlineIndicator}
        </div>
      );

    default:
      return <div>Invalid size!</div>;
  }
};

export default ProfilePicture;
