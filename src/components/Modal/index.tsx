import React from "react";
import Backdrop from "components/Backdrop";
import { useModal } from "context/modal/modal.context";

interface IModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = (props: IModalProps) => {
  const { children, className } = props;

  const { closeModal } = useModal();

  return (
    <div className="absolute h-screen w-full flex flex-col justify-center">
      <div
        className={`w-full rounded bg-white dark:bg-gray-700 z-50 lg:mx-auto lg:w-1/4 ${className}`}
      >
        {children}
      </div>
      <Backdrop callback={closeModal} />
    </div>
  );
};

export default Modal;
