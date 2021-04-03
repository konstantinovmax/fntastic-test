import React from 'react';
import { Route, Switch } from 'react-router';
import './AddNewPopup.css';

function AddNewPopup(props) {

    function handleClickLayoutClose(e) {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <div className={`popup popup_type_workspace-info ${props.isOpenAddWorkSpacePopup && 'popup_is-open'}`} onClick={handleClickLayoutClose}>
            <div className="popup__container popup__container_type_add-workspace">
                <button className="popup__close-button" type="reset" onClick={props.onClose}/>
                <h2 className="popup__title popup__title_type_add-workspace">Add a new Workspace?</h2>
                <button className="popup__add-button" type="button" onClick={props.onAddNewWorkspace}>Yes</button>
            </div>
        </div>  
    );
}

export default AddNewPopup;
