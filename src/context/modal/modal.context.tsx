import React, { useState, useContext } from "react";

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

  const [modal, setModal] = useState<typeof React.Component | null>(null);

  const showModal = (component: typeof React.Component) => {
    setModal(component);
  };

  const closeModal = () => {
    setModal(null);
  };

  const [state, setState] = useState({
    component: null,
    showModal,
    closeModal
  });

  return (
    <ModalStateContext.Provider value={state}>
      {modal}
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
