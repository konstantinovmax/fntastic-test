import React from 'react';
import './ChatMainWindow.css';
import hashtag from '../../images/hash.png';
import userAvatarOne from '../../images/user-avatar-1.png';
import userAvatarTwo from '../../images/user-avatar-2.png';
import userAvatarThree from '../../images/user-avatar-3.png';
import userAvatarFour from '../../images/user-avatar-4.png';


function ChatMainWindow() {
    return (
        <div className="chat-main-window">
            <div className="chat-main-window__title-container">
                <div className="chat-main-window__image-title-container">
                    <img className="chat-main-window__hashtag" src={hashtag} alt="Hashtag"/>
                    <h2 className="chat-main-window__title">Hello ninja</h2>
                </div>
            </div>
            <div className="chat-main-window__chat-content">
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarOne} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Batman</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Привет! Как дела? Приветas лофылвао фылвофыолв йц уйлоц фыалфыоал фыалофы аур!</p>
                    </div>
                </div>
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarTwo} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Michael</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Все ок</p>
                    </div>
                </div>
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarThree} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Donald</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Все ок</p>
                    </div>
                </div>
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarOne} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Batman</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Привет! Как дела? Привет!</p>
                    </div>
                </div>
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarOne} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Batman</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Привет! Как дела? Привет!</p>
                    </div>
                </div>
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarOne} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Batman</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Привет! Как дела? Привет!</p>
                    </div>
                </div>
                <div className="chat-main-window__message-container">
                    <img className="chat-main-window__user-avatar" src={userAvatarTwo} alt=""/>
                    <div className="chat-main-window__text-container">
                        <div className="chat-main-window__name-data-container">
                            <p className="chat-main-window__user-name">Michael</p>
                            <p className="chat-main-window__data">10:43</p>
                        </div>
                        <p className="chat-main-window__message">Все ок</p>
                    </div>
                </div>
            </div>
            <form className="chat-main-window__chat-container">
                <textarea className="chat-main-window__textarea" placeholder="Start messaging" />
                <button className="chat-main-window__button" type="submit" />
            </form>
        </div>
    );
}

export default ChatMainWindow;
