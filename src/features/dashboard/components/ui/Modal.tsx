import React from "react";
import { ModalProps } from "../../../../utils/types";

const Modal: React.FC<ModalProps> = ( { openButton, children } ) => {

  const openModal = () => {
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.showModal();
  }

  return (
    <>
      <button className="btn" onClick={openModal}>
        {openButton}
      </button>
      <dialog id="my_modal_1" className="modal px-2">
        <div className="bg-white container rounded-md p-3 relative">
            <h2 className="font-bold text-2xl text-center text-dark">Patient Report</h2>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
