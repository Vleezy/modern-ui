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
      <div className={`z-50 mb-40 w-full ${className}`}>
        <div className="flex flex-col bg-white mx-2 lg:w-1/2 lg:mx-auto rounded overflow-hidden">
          <div className="flex justify-between mb-1 p-2">
            <h4 className="text-xs font-semibold text-gray-500">
              Friend requests
            </h4>
            <button
              className="h-6 w-6 flex justify-center text-gray-400 text-xs"
              onClick={closeModal}
            >
              <i className="fas fa-times self-center"></i>
            </button>
          </div>
          {children}
        </div>
      </div>
      <Backdrop callback={closeModal} />
    </div>
  );
};

export default Modal;
