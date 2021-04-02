import React from 'react';
import './App.css';
import Workspaces from '../Workspaces/Workspaces';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import { Route, Switch } from 'react-router';

function App() {
  const [isPopupWorkspaceOpen, setIsPopupWorkspaceOpen] = React.useState(false);
  const [isFirstChatThemeOpen, setIsFirstChatThemeOpen] = React.useState(false);
  const [isSecondChatThemeOpen, setIsSecondFirstChatThemeOpen] = React.useState(false);
  const [isThirdChatThemeOpen, setIsThirdFirstChatThemeOpen] = React.useState(false);

  function handleOpenWorkspacePopup() {
    setIsPopupWorkspaceOpen(true);
  }

  function handleOpenFirstChatTheme() {
    setIsFirstChatThemeOpen(true);
  }

  function handleOpenSecondChatTheme() {
    setIsSecondFirstChatThemeOpen(true);
  }

  function handleOpenThirdChatTheme() {
    setIsThirdFirstChatThemeOpen(true);
  }

  function handleCloseWorkspacePopup() {
    setIsPopupWorkspaceOpen(false);
  }

  function handleCloseFirstChatTheme() {
    setIsFirstChatThemeOpen(false);
  }

  function handleCloseSecondChatTheme() {
    setIsSecondFirstChatThemeOpen(false);
  }

  function handleCloseThirdChatTheme() {
    setIsThirdFirstChatThemeOpen(false);
  }

  return (
    <div className="app">
      <h1 className="app__title">MISCORD</h1>
      <div className="app__content">
        <Workspaces />
        <Main
        onOpenWorkspacePopup={handleOpenWorkspacePopup}
        onOpenFirstChatTheme={handleOpenFirstChatTheme}
        onOpenSecondChatTheme={handleOpenSecondChatTheme}
        onOpenThirdChatTheme={handleOpenThirdChatTheme}
        isOpenFirst={isFirstChatThemeOpen}
        isOpenSecond={isSecondChatThemeOpen}
        isOpenThird={isThirdChatThemeOpen}
        onCloseFirst={handleCloseFirstChatTheme}
        onCloseSecond={handleCloseSecondChatTheme}
        onCloseThird={handleCloseThirdChatTheme}
        />
        <Popup
        isOpen={isPopupWorkspaceOpen}
        onClose={handleCloseWorkspacePopup}
        />
      </div>
    </div>
  );
}

export default App;
