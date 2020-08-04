import React from "react";
import PropTypes from "prop-types";

import Modal from "../../Modal";

const brancheDetailsStyle = {
    maxHeight: "750px",
    overflow: "auto"
};

const imgStyle = {
    width: "600px",
    height: "400px"
}

const ModalItem = (props) => {
    const closeModal = () => {
        props.handleModal();
    }
    
    return (
        <Modal
            close={closeModal}
            zIndex={6}
        >
            <div className="mt-4 show_branche_details" style={brancheDetailsStyle}>
                <div className="d-flex flex-column align-items-center branche_photos">
                    <h5>Зображення відділення №{props.item.number}, {props.item.adress}:</h5>
                    {props.item.photos.map((photo, index) => {
                        return (
                            <div key={index}
                                className="mb-4 gallery"
                            >
                                <a target="_blank"
                                    href={photo}
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={photo}
                                        alt={`Фото ${index+1} відділення ${props.item.number}`}
                                        title="Відкрити в новому вікні зображення"
                                        style={imgStyle}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Modal>
    );
}

ModalItem.defaultProps = {
    item: null,
    handleModal: () => console.error("wasn't implement function fetchBranchesLocator")
};

ModalItem.propTypes = {
    item: PropTypes.object,
    handleModal: PropTypes.func
};

export default ModalItem;
