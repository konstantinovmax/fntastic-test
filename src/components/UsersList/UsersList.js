import React from 'react';
import './UsersList.css';
import userAvatarOne from '../../images/user-avatar-1.png';
import userAvatarTwo from '../../images/user-avatar-2.png';
import userAvatarThree from '../../images/user-avatar-3.png';
import userAvatarFour from '../../images/user-avatar-4.png';
import userAvatarFive from '../../images/user-avatar-5.png';
import userAvatarSix from '../../images/user-avatar-6.png';
import userAvatarSeven from '../../images/user-avatar-7.png';
import userAvatarEight from '../../images/user-avatar-8.png';
import userAvatarNine from '../../images/user-avatar-9.png';
import userAvatarTen from '../../images/user-avatar-10.png';
import userAvatarEleven from '../../images/user-avatar-11.png';
import userAvatarTwelve from '../../images/user-avatar-12.png';
import userAvatarThirteen from '../../images/user-avatar-13.png';

function UsersList() {
    return (
        <div className="users-list">
            <div className="users-list__container">
                <input className="users-list__search" placeholder="Search"/>
            </div>
            <div className="users-list__content">
                <h3 className="users-list__group-title">Online</h3>
                <div className="users-list__group">
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_online"></span>
                        <img className="users-list__user-avatar" src={userAvatarOne} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Batman</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_online"></span>
                        <img className="users-list__user-avatar" src={userAvatarTwo} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Michael</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_online"></span>
                        <img className="users-list__user-avatar" src={userAvatarThree} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Donald</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_online"></span>
                        <img className="users-list__user-avatar" src={userAvatarFour} alt="Аватар пользователя" />
                        <p className="users-list__user-name">John</p>
                    </div>
                </div>
                <h3 className="users-list__group-title">Offline</h3>
                <div className="users-list__group">
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarFive} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Peter</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarSix} alt="Аватар пользователя" />
                        <p className="users-list__user-name">MK</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarSeven} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Jim</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarEight} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Walter</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarNine} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Anna</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarTen} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Joe</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarEleven} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Robert</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarTwelve} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Elizabeth</p>
                    </div>
                    <div className="users-list__user-container">
                        <span className="users-list__status users-list__status_type_offline"></span>
                        <img className="users-list__user-avatar" src={userAvatarThirteen} alt="Аватар пользователя" />
                        <p className="users-list__user-name">Anthony</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersList;
