import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Workspaces.css';
import avatarOne from '../../images/iconfinder_ninja_479478.svg';
import avatarTwo from '../../images/iconfinder_android_245977.svg';
import avatarThree from '../../images/iconfinder_Teams-people-worker-labour-employee_6071847.svg';

function Workspaces() {
    return (
        <div className="workspaces">
            <nav className="workspaces_links">
                <NavLink exact to="/" className="workspaces__link" activeClassName="workspaces__link_type_active"><img className="workspaces__avatar" src={avatarOne} alt="" /></NavLink>
                <NavLink to="/one" className="workspaces__link" activeClassName="workspaces__link_type_active"><img className="workspaces__avatar" src={avatarTwo} alt="" /></NavLink>
                <NavLink to="/two" className="workspaces__link" activeClassName="workspaces__link_type_active"><img className="workspaces__avatar" src={avatarThree} alt="" /></NavLink>
            </nav>
            <button className="workspaces__add-button" type="button" />
        </div>
    );
}

export default Workspaces;