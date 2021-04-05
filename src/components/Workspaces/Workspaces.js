import React from 'react';
import { NavLink } from 'react-router-dom';
import './Workspaces.css';
import avatarOne from '../../images/iconfinder_ninja_479478.svg';
import avatarTwo from '../../images/iconfinder_Robot_01_385831.svg';
import avatarThree from '../../images/iconfinder_Teams-people-worker-labour-employee_6071847.svg';

function Workspaces(props) {
    return (
        <div className="workspaces">
            <nav className="workspaces_links">
                <NavLink to="/one" className="workspaces__link" activeClassName="workspaces__link_type_active"><img className="workspaces__avatar" src={avatarOne} alt="Аватар рабочего пространства" /></NavLink>
                <NavLink to="/two" className="workspaces__link" activeClassName="workspaces__link_type_active"><img className="workspaces__avatar" src={avatarTwo} alt="Аватар рабочего пространства" /></NavLink>
                <NavLink to="/three" className="workspaces__link" activeClassName="workspaces__link_type_active"><img className="workspaces__avatar" src={avatarThree} alt="Аватар рабочего пространства" /></NavLink>
                <NavLink to="/four" className={`workspaces__link workspaces__link_type_bonus ${props.isAdd && "workspaces__link_type_bonus_is-open"}`} activeClassName="workspaces__link_type_active"><div className="workspaces__avatar workspaces__avatar_type_bonus"></div></NavLink>
            </nav>
            <button className="workspaces__add-button" type="button" onClick={props.onOpenAddWorkspacePopup} />
        </div>
    );
}

export default Workspaces;