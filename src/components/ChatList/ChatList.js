import React from 'react';
import './ChatList.css';
import hash from '../../images/hash.png';
import arrowDown from '../../images/arrow-down.png';
import arrowUp from '../../images/arrow-up.png';

function ChatList(props) {

    function handleToggleFirstChatButton() {
        if (props.isOpenFirst) {
            props.onCloseFirst();
        } else {
            props.onOpenFirstChatTheme();
        }
    }

    function handleToggleSecondChatButton() {
        if (props.isOpenSecond) {
            props.onCloseSecond();
        } else {
            props.onOpenSecondChatTheme();
        }
    }

    function handleToggleThirdChatButton() {
        if (props.isOpenThird) {
            props.onCloseThird();
        } else {
            props.onOpenThirdChatTheme();
        }
    }

    return (
        <div className="chatlist">
            <div className="chatlist__title-container" onClick={props.onOpenWorkspacePopup}>
                <h2 className="chatlist__title">Ninja Workspace</h2>
                <button className="chatlist__open-workspace-button" type="button" />
            </div>
            <div className="chatlist__content">
                <div className="chatlist__theme-container">
                    <button className="chatlist__theme-name-button" onClick={handleToggleFirstChatButton}>
                        <img className="chatlist__theme-name-arrow" src={props.isOpenFirst ? arrowUp : arrowDown} alt=""/>
                        <h3 className="chatlist__theme">NINJAS</h3>
                    </button>
                    <div className={`chatlist__chat-main-container ${props.isOpenFirst && 'chatlist__chat-main-container_is-open'}`}>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">hello ninja</h4>
                        </div>
                    </div>
                </div>
                <div className="chatlist__theme-container">
                    <button className="chatlist__theme-name-button" onClick={handleToggleSecondChatButton}>
                        <img className="chatlist__theme-name-arrow" src={props.isOpenSecond ? arrowUp : arrowDown} alt=""/>
                        <h3 className="chatlist__theme">KILLERS</h3>
                    </button>
                    <div className={`chatlist__chat-main-container ${props.isOpenSecond && 'chatlist__chat-main-container_is-open'}`}>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">yo</h4>
                        </div>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">hey</h4>
                        </div>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">hello</h4>
                        </div>
                    </div>
                </div>
                <div className="chatlist__theme-container">
                    <button className="chatlist__theme-name-button" onClick={handleToggleThirdChatButton}>
                        <img className="chatlist__theme-name-arrow" src={props.isOpenThird ? arrowUp : arrowDown} alt=""/>
                        <h3 className="chatlist__theme">ASSASSINS</h3>
                    </button>
                    <div className={`chatlist__chat-main-container ${props.isOpenThird && 'chatlist__chat-main-container_is-open'}`}>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">asd</h4>
                        </div>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">aqeeq</h4>
                        </div>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">asdqwe</h4>
                        </div>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">asdqwe</h4>
                        </div>
                        <div className="chatlist__chat-container">
                            <img className="chatlist__chat-hash" src={hash} alt=""></img>
                            <h4 className="chatlist__chat-name">asdqwe</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatList;
