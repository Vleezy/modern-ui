import React from "react";
import Backdrop from "../Backdrop";
import OnOutsiceClick from "react-outclick";

interface IDefaultModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const DefaultModal = (props: IDefaultModalProps) => {
  const { children, closeModal } = props;

  return (
    <div className="absolute w-full h-screen flex">
      <OnOutsiceClick onOutsideClick={() => closeModal()}>
        <div className="w-full mx-2 mt-32 h-8 border border-gray-400 rounded bg-white dark:bg-gray-700 z-50">
          {children}
        </div>
      </OnOutsiceClick>
      <Backdrop />
    </div>
  );
};

export default DefaultModal;
