import React from "react";
import Backdrop from "components/Backdrop";

interface IDefaultModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const DefaultModal = (props: IDefaultModalProps) => {
  const { children, closeModal } = props;

  return (
    <div className="absolute w-full flex">
      <div className="w-full mx-2 mt-20 border border-gray-400 rounded bg-white dark:bg-gray-700 z-50">
        {children}
      </div>
      <Backdrop callback={closeModal} />
    </div>
  );
};

export default DefaultModal;
