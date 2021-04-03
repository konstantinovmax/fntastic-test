import React from 'react';
import './ChatList.css';
import hash from '../../images/hash.png';
import arrowDown from '../../images/arrow-down.png';
import arrowUp from '../../images/arrow-up.png';
import { Route, Switch } from 'react-router';
import { NavLink, useRouteMatch } from 'react-router-dom';

function ChatList(props) {
    const { path, url } = useRouteMatch();

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

    return (
        <Switch>
            <Route path="/one">
                <div className="chatlist">
                    <div className="chatlist__title-container" onClick={props.onOpenWorkspacePopup}>
                        <h2 className="chatlist__title">Ninja Workspace</h2>
                        <button className="chatlist__open-workspace-button" type="button" />
                    </div>
                    <div className="chatlist__content">
                        <div className="chatlist__theme-container">
                            <button className="chatlist__theme-name-button" onClick={handleToggleFirstChatButton}>
                                <img className="chatlist__theme-name-arrow" src={props.isOpenFirst ? arrowUp : arrowDown} alt="Иконка стрелки" />
                                <h3 className="chatlist__theme">NINJAS</h3>
                            </button>
                            <div className={`chatlist__chat-main-container ${props.isOpenFirst && 'chatlist__chat-main-container_is-open'}`}>
                                <NavLink to={`${url}/hello-ninjas`} className="chatlist__chat-container" activeClassName="chatlist__chat-container_type_active">
                                    <img className="chatlist__chat-hash" src={hash} alt="Иконка решетки" />
                                    <h4 className="chatlist__chat-name">hello ninjas</h4>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path={`${path}/hello-ninjas`}>
                    
                </Route>
            </Route>
            <Route path="/two">
                <div className="chatlist">
                    <div className="chatlist__title-container" onClick={props.onOpenWorkspacePopup}>
                        <h2 className="chatlist__title">Robots workspace</h2>
                        <button className="chatlist__open-workspace-button" type="button" />
                    </div>
                    <div className="chatlist__content">
                        <div className="chatlist__theme-container">
                            <button className="chatlist__theme-name-button" onClick={handleToggleFirstChatButton}>
                                <img className="chatlist__theme-name-arrow" src={props.isOpenFirst ? arrowUp : arrowDown} alt="Иконка стрелки"/>
                                <h3 className="chatlist__theme">R2D2</h3>
                            </button>
                            <div className={`chatlist__chat-main-container ${props.isOpenFirst && 'chatlist__chat-main-container_is-open'}`}>
                                <NavLink to={`${url}/hello-robots`} className="chatlist__chat-container" activeClassName="chatlist__chat-container_type_active">
                                    <img className="chatlist__chat-hash" src={hash} alt="Иконка решетки" />
                                    <h4 className="chatlist__chat-name">hello robots</h4>
                                </NavLink>
                            </div>
                        </div>
                        <div className="chatlist__theme-container">
                            <button className="chatlist__theme-name-button" onClick={handleToggleSecondChatButton}>
                                <img className="chatlist__theme-name-arrow" src={props.isOpenSecond ? arrowUp : arrowDown} alt="Иконка стрелки"/>
                                <h3 className="chatlist__theme">BOSTON DYNAMICS</h3>
                            </button>
                            <div className={`chatlist__chat-main-container ${props.isOpenSecond && 'chatlist__chat-main-container_is-open'}`}>
                                <NavLink to={`${url}/which-robot`} className="chatlist__chat-container" activeClassName="chatlist__chat-container_type_active">
                                    <img className="chatlist__chat-hash" src={hash} alt="Иконка решетки" />
                                    <h4 className="chatlist__chat-name">which robot</h4>
                                </NavLink>
                                <NavLink to={`${url}/my-favorite-robot`} className="chatlist__chat-container" activeClassName="chatlist__chat-container_type_active">
                                    <img className="chatlist__chat-hash" src={hash} alt="Иконка решетки" />
                                    <h4 className="chatlist__chat-name">my favorite robot</h4>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path={`${path}/hello-robots`}>
                    
                </Route>
                <Route path={`${path}/which-robot`}>
                   
                </Route>
                <Route path={`${path}/my-favorite-robot`}>
                    
                </Route>
            </Route>
            <Route path="/three">
                <div className="chatlist">
                    <div className="chatlist__title-container" onClick={props.onOpenWorkspacePopup}>
                        <h2 className="chatlist__title">Friends workspace</h2>
                        <button className="chatlist__open-workspace-button" type="button" />
                    </div>
                    <div className="chatlist__content">
                        <div className="chatlist__theme-container">
                            <button className="chatlist__theme-name-button" onClick={handleToggleFirstChatButton}>
                                <img className="chatlist__theme-name-arrow" src={props.isOpenFirst ? arrowUp : arrowDown} alt="Иконка стрелки"/>
                                <h3 className="chatlist__theme">ADVENTURES</h3>
                            </button>
                            <div className={`chatlist__chat-main-container ${props.isOpenFirst && 'chatlist__chat-main-container_is-open'}`}>
                                <NavLink to={`${url}/football`} className="chatlist__chat-container" activeClassName="chatlist__chat-container_type_active">
                                    <img className="chatlist__chat-hash" src={hash} alt="Иконка решетки" />
                                    <h4 className="chatlist__chat-name">football</h4>
                                </NavLink>
                            </div>
                            <div className={`chatlist__chat-main-container ${props.isOpenFirst && 'chatlist__chat-main-container_is-open'}`}>
                                <NavLink to={`${url}/kayaking`} className="chatlist__chat-container" activeClassName="chatlist__chat-container_type_active">
                                    <img className="chatlist__chat-hash" src={hash} alt="Иконка решетки" />
                                    <h4 className="chatlist__chat-name">kayaking</h4>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path={`${path}/football`}>
                    
                </Route>
                <Route path={`${path}/kayaking`}>
                   
                </Route>
            </Route>
            <Route path="/four">
                <div className="chatlist">
                    <div className="chatlist__title-container" onClick={props.onOpenWorkspacePopup}>
                        <h2 className="chatlist__title">New Workspace</h2>
                        <button className="chatlist__open-workspace-button" type="button" />
                    </div>
                    <div className="chatlist__content">
                        <div className="chatlist__theme-container">
                        </div>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}

export default ChatList;
