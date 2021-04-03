import React from 'react';
import { Route, Switch } from 'react-router';
import './Popup.css';
import avatarOne from '../../images/iconfinder_ninja_479478.svg';
import avatarTwo from '../../images/iconfinder_Robot_01_385831.svg';
import avatarThree from '../../images/iconfinder_Teams-people-worker-labour-employee_6071847.svg';

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
                <Switch>
                    <Route path="/one">
                        <img className="popup__workspace-avatar" src={avatarOne} alt="Аватар рабочего пространства"/>
                        <div className="popup__workspace-container">
                            <h2 className="popup__workspace-title">NINJAS</h2>
                            <p className="popup__workspace-subtitle">Workpsace for Ninjas!</p>
                        </div>
                    </Route>
                    <Route path="/two">
                        <img className="popup__workspace-avatar" src={avatarTwo} alt="Аватар рабочего пространства"/>
                        <div className="popup__workspace-container">
                            <h2 className="popup__workspace-title">ROBOTS</h2>
                            <p className="popup__workspace-subtitle">Workpsace for Robot fans</p>
                        </div>
                    </Route>
                    <Route path="/three">
                        <img className="popup__workspace-avatar" src={avatarThree} alt="Аватар рабочего пространства"/>
                        <div className="popup__workspace-container">
                            <h2 className="popup__workspace-title">FRIENDS</h2>
                            <p className="popup__workspace-subtitle">Workpsace for friends</p>
                        </div>
                    </Route>
                    <Route path="/four">
                        <div className="popup__workspace-container">
                            <h2 className="popup__workspace-title">New workspace</h2>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Popup;
