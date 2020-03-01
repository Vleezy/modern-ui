import React from "react";

interface ISkeletonProps {
  count: number;
  className: string;
  circle: boolean;
}

const Skeleton = (props: Partial<ISkeletonProps>) => {
  const { count = 1, circle = false, className } = props;

  const elements: any[] = [];

  if (count) {
    for (let i = 0; i < count; i++) {
      elements.push(
        <span
          key={i}
          className={`block h-3 rounded-sm bg-gray-200 w-8 ${className}`}
        ></span>
      );
    }
  }

  return <>{elements}</>;
};

export default Skeleton;
