import React, { useRef } from "react";
import PropTypes from "prop-types";

import {useOutsideClick} from "../../../hooks";

const Modal = (props) => {
    const ref = useRef();

    useOutsideClick(ref, () => {
        closeModal();
    });

    const closeModal = () => {
        props.close();
    }

    return (
        <div
            className="modal_justin"
            style={{zIndex: props.zIndex}}
        >
            <div
                ref={ref}
                className="mt-md-5 ml-md-5 mr-md-5 p-3 bg-white"
            >
                <span
                    className="close c-pointer"
                    onClick={closeModal}
                >&times;</span>
                
                {props.children}

            </div>
        </div>
    );
}

Modal.defaultProps = {
    zIndex: 5,
    children: <span>default child</span>,
    close: () => console.error("wasn't implement function close"),
    
};

Modal.propTypes = {
    zIndex: PropTypes.number,
    children: PropTypes.node,
    close: PropTypes.func,
};

export default Modal;
