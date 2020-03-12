import React from "react";
import { IUser } from "models/user/IUser";

interface ProfilePictureProps {
  user?: IUser;
  styles?: string;
}

const ProfilePictureSmall = (props: ProfilePictureProps) => {
  const { user, styles } = props;

  const habboFigure = {
    backgroundImage: `url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=${user?.look}&size=s")`,
    backgroundPositionY: "-4px",
    backgroundPositionX: "1px"
  };

  const habboFigureBanned = {
    backgroundImage: `url(/assets/images/isbanned_small.png)`,
    backgroundPositionY: "-14px",
    backgroundPositionX: "-9px"
  };

  const onlineIndicator = (
    <div
      className={`absolute h-3 w-3 ${
        user?.online ? "bg-green-500" : "bg-gray-500"
      } rounded right-0 border-2 border-gray-100 -m-px dark:border-gray-900`}
    />
  );

  const isBanned = false;

  //   if (!user)
  //     return <div className={`rounded w-8 h-8 flex-shrink-0 ${styles}`}></div>;

  return (
    <div
      className={`h-8 w-8 bg-center flex-shrink-0 bg-no-repeat rounded bg-white-500 ${styles}`}
      style={habboFigure}
    >
      {/* Render online indicator if set in props */}
      {typeof user?.online !== "undefined" && onlineIndicator}
    </div>
  );
};

export default ProfilePictureSmall;
