import React from 'react';
import './Popup.css';
import avatarOne from '../../images/iconfinder_ninja_479478.svg';

function Popup(props) {

    function handleClickLayoutClose(e) {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <div className={`popup popup_type_workspace-info ${props.isOpen && 'popup_is-open'}`} onClick={handleClickLayoutClose}>
            <div className="popup__container">
                <button className="popup__close-button" type="reset" onClick={props.onClose}/>
                <img className="popup__workspace-avatar" src={avatarOne} alt=""/>
                <div className="popup__workspace-container">
                    <h2 className="popup__workspace-title">NINJAS</h2>
                    <p className="popup__workspace-subtitle">Workpsace for Ninjas!</p>
                </div>
            </div>
        </div>
    );
}

export default Popup;
