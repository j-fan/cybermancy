import React, {
  FunctionComponent,
  useState,
  useContext,
  createContext,
} from "react";
import { ModalProps, Modal } from "./Modal";

type ModalContextProps = {
  updateModal?: (newModalState: ModalProps) => void;
  closeModal?: () => void;
} & ModalProps;

const defaultModalContext = {
  isOpen: true,
  title: "title",
  description: "description",
};

const ModalContext = createContext<ModalContextProps>(defaultModalContext);

const ModalProvider: FunctionComponent<ModalProps> = ({ children }) => {
  const [currentModalState, setCurrentModalState] = useState<ModalProps>(
    defaultModalContext
  );

  const updateModal = (newModalState: ModalProps) => {
    setCurrentModalState(newModalState);
  };

  const closeModal = () => {
    setCurrentModalState({
      ...currentModalState,
      isOpen: false,
    });
  };

  return (
    <ModalContext.Provider
      value={{ ...currentModalState, updateModal, closeModal }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

const ModalConsumer = ModalContext.Consumer;

const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  return context;
};

export { Modal, ModalProvider, ModalConsumer, useModal, defaultModalContext };
