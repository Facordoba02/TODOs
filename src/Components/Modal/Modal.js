import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../../Context/TodoContext";
import { IoClose } from "react-icons/io5";

function Modal({ children }) {
    const { setOpenModal } = useContext(TodoContext);
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {children}
                {/* <IoClose
                    className="close-modal"
                    onClick={() => setOpenModal(false)}
                /> */}
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default Modal;
