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
      <div className={`z-50 mb-40 lg:mx-auto ${className}`}>{children}</div>
      <Backdrop callback={closeModal} />
    </div>
  );
};

export default Modal;
