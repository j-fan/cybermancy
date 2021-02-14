import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { useModal } from "./ModalContext";

export type ModalProps = {
  title?: string;
  description?: React.ReactNode;
  isOpen?: boolean;
  key?: string;
};

const Modal: FunctionComponent = () => {
  const { title, description, updateModal } = useModal();
  return ReactDOM.createPortal(
    <div onClick={() => updateModal?.({ description: "wow clicked" })}>
      {title}
      {description}
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export { Modal };
