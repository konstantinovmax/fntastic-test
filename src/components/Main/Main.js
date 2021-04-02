import React from 'react';
import './Main.css';
import ChatList from '../ChatList/ChatList';
import ChatMainWindow from '../ChatMainWindow/ChatMainWindow';
import UsersList from '../UsersList/UsersList';

function Main(props) {
    return (
        <div className="main">
            <ChatList
            onOpenWorkspacePopup={props.onOpenWorkspacePopup}
            onOpenFirstChatTheme={props.onOpenFirstChatTheme}
            onOpenSecondChatTheme={props.onOpenSecondChatTheme}
            onOpenThirdChatTheme={props.onOpenThirdChatTheme}
            onClose={props.onClose}
            isOpenFirst={props.isOpenFirst}
            isOpenSecond={props.isOpenSecond}
            isOpenThird={props.isOpenThird}
            onCloseFirst={props.onCloseFirst}
            onCloseSecond={props.onCloseSecond}
            onCloseThird={props.onCloseThird}
            />
            <ChatMainWindow />
            <UsersList />
        </div>
    );
}

export default Main;
