import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from "react";

export type ModalProps = {
  title?: string;
  description?: React.ReactNode;
  isOpen?: boolean;
  key?: string;
};

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

const Modal: FunctionComponent = () => {
  const { title, description, updateModal } = useModal();
  return (
    <div onClick={() => updateModal?.({ description: "wow clicked" })}>
      {title}
      {description}
    </div>
  );
};

export { Modal, ModalProvider, ModalConsumer, useModal, defaultModalContext };
