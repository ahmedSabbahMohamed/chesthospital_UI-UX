import React from "react";
import { ModalProps } from "../../utils/types";

const Modal: React.FC<ModalProps> = ({ openButton, styles, children, id,heading }) => {
  const openModal = () => {
    (document.getElementById(id) as HTMLDialogElement)?.showModal();
  };

  const closeModal = () => {
    (document.getElementById(id) as HTMLDialogElement)?.close();
  };

  return (
    <>
      <button
        className={`btn text-white text-bold ${styles}`}
        onClick={openModal}
      >
        {openButton}
      </button>
      <dialog id={id} className="modal p-2 overflow-auto">
        <div className="bg-white rounded-md p-5 relative">
          <h2 className="font-bold text-2xl text-center text-dark my-6">
            {heading}
          </h2>
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
