import Modal from 'components/Modal';
import React, { useContext, useState } from 'react';

type State = {
  showModal: (any: any) => void;
  closeModal: () => void;
};

const ModalStateContext = React.createContext<State | undefined>(undefined);

interface IModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = (props: IModalProviderProps) => {
  const { children } = props;

  const [modal, setModal] = useState<any>(null);

  const showModal = (component: typeof React.Component) => {
    setModal(component);
  };

  const closeModal = () => {
    setModal(null);
  };

  const [state, setState] = useState({
    showModal,
    closeModal
  });

  return (
    <ModalStateContext.Provider value={state}>
      {modal && <Modal>{modal}</Modal>}
      {children}
    </ModalStateContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalStateContext);

  if (!ctx)
    throw new Error("useModal must be used within a ModalProvider component!");

  return ctx;
};
