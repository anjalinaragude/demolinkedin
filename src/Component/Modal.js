import React, { useState } from 'react';

const Modal = ({ isOpen, toggleModal ,save,setSave}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSave = () => {
        // Handle the logic for saving the input value here
        setSave([...save, inputValue]);
        // You can perform any save operation here with the input value
        toggleModal(); // Close the modal after saving (You can change this as per your logic)
    };
    console.log(save)

    return (
        // Modal content with the scrollable class
        <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal Title</h5>
                        <button type="button" className="close" onClick={toggleModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputField">Input Field:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputField"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
