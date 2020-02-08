import React, { useState, Fragment } from "react";
import UserHovercard from "./UserHovercard";
import { CSSTransition } from "react-transition-group";

interface IUserHovercardContainerProps {
  children: React.ReactNode;
}

const UserHovercardContainer = (props: IUserHovercardContainerProps) => {
  const { children } = props;
  const [hovered, setHovered] = useState(false);

  let timeout: any;
  const elementHover = (delay: number, value: boolean) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setHovered(value), delay);
  };

  return (
    <Fragment>
      <div
        onMouseEnter={() => elementHover(500, true)}
        onMouseLeave={() => elementHover(500, false)}
        className="relative inline-block"
      >
        <CSSTransition in={hovered} timeout={100} classNames="transition-opacity" unmountOnExit>
          <UserHovercard />
        </CSSTransition>
        {children}
      </div>
    </Fragment>
  );
};
export default UserHovercardContainer;
