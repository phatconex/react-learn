import React, { useState } from "react";
import "./style.css";
const Modal = () => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    };
    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setModal(false);
        }
    };
    return (
        <div>
            <button className="open-modal-btn" onClick={handleModal}>
                Open Modal
            </button>
            <div className={`modal ${modal && "active"}`} onClick={handleModalClick}>
                <div className="modal-inner">
                    <div className="modal-header">
                        <p>Welcome to me</p>
                        <i className="fa-solid fa-xmark close" onClick={() => setModal(false)}></i>
                    </div>
                    <div className="modal-body">
                        <h2>Modal</h2>
                        <p>Đây là phần body của modal</p>
                    </div>
                    <div className="modal-footer">
                        <button className="close" onClick={() => setModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
