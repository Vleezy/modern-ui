import React from "react";

interface IBadge {
  name: string;
}

interface IBadgeItemProps {
  equipped?: boolean;
  badge: IBadge;
  handleClick?: () => void;
}

const BadgeItem = (props: IBadgeItemProps) => {
  const { badge, equipped, handleClick } = props;

  return (
    <div
      onClick={() => handleClick && handleClick()}
      className={`h-12 w-12 rounded ${
        equipped ? "bg-green-200" : "bg-gray-400 dark:bg-gray-800"
      } rounded bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(/assets/images/badges/${badge.name}.gif)`,
        boxSizing: "border-box",
        transition: `background-color 150ms ease-in-out`
      }}
    />
  );
};

export default BadgeItem;
