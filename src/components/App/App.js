import React from 'react';
import './App.css';
import Workspaces from '../Workspaces/Workspaces';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import AddNewPopup from '../AddNewPopup/AddNewPopup';
import { Route, Switch, useHistory } from 'react-router';

function App() {
  const [isPopupWorkspaceOpen, setIsPopupWorkspaceOpen] = React.useState(false);
  const [isAddNewWokspacePopupOpen, setIsAddNewWokspacePopupOpen] = React.useState(false);
  const [isNewWorkspaceAdded, setIsNewWorkspaceAdded] = React.useState(false);
  const [isFirstChatThemeOpen, setIsFirstChatThemeOpen] = React.useState(false);
  const [isSecondChatThemeOpen, setIsSecondFirstChatThemeOpen] = React.useState(false);
  const history = useHistory();

  function handleOpenWorkspacePopup() {
    setIsPopupWorkspaceOpen(true);
  }

  function handleOpenAddNewWorkspacePopup() {
    setIsAddNewWokspacePopupOpen(true);
  }

  function handleAddNewWorkspace() {
    setIsNewWorkspaceAdded(true);
    handleCloseWorkspacePopup();
    history.push('./four');
  }

  function handleOpenFirstChatTheme() {
    setIsFirstChatThemeOpen(true);
  }

  function handleOpenSecondChatTheme() {
    setIsSecondFirstChatThemeOpen(true);
  }

  function handleCloseWorkspacePopup() {
    setIsPopupWorkspaceOpen(false);
    setIsAddNewWokspacePopupOpen(false);
  }

  function handleCloseFirstChatTheme() {
    setIsFirstChatThemeOpen(false);
  }

  function handleCloseSecondChatTheme() {
    setIsSecondFirstChatThemeOpen(false);
  }

  return (
    <div className="app">
      <h1 className="app__title">MISCORD</h1>
      <div className="app__content">
        <Workspaces
        onOpenAddWorkspacePopup={handleOpenAddNewWorkspacePopup}
        onClose={handleCloseWorkspacePopup}
        isAdd={isNewWorkspaceAdded}
        />
        <Switch>
          <Route path="/one">
            <Main
            onOpenWorkspacePopup={handleOpenWorkspacePopup}
            onOpenFirstChatTheme={handleOpenFirstChatTheme}
            onOpenSecondChatTheme={handleOpenSecondChatTheme}
            isOpenFirst={isFirstChatThemeOpen}
            isOpenSecond={isSecondChatThemeOpen}
            onCloseFirst={handleCloseFirstChatTheme}
            onCloseSecond={handleCloseSecondChatTheme}
            />
          </Route>
          <Route path="/two">
            <Main
            onOpenWorkspacePopup={handleOpenWorkspacePopup}
            onOpenFirstChatTheme={handleOpenFirstChatTheme}
            onOpenSecondChatTheme={handleOpenSecondChatTheme}
            isOpenFirst={isFirstChatThemeOpen}
            isOpenSecond={isSecondChatThemeOpen}
            onCloseFirst={handleCloseFirstChatTheme}
            onCloseSecond={handleCloseSecondChatTheme}
            />
          </Route>
          <Route path="/three">
            <Main
            onOpenWorkspacePopup={handleOpenWorkspacePopup}
            onOpenFirstChatTheme={handleOpenFirstChatTheme}
            onOpenSecondChatTheme={handleOpenSecondChatTheme}
            isOpenFirst={isFirstChatThemeOpen}
            isOpenSecond={isSecondChatThemeOpen}
            onCloseFirst={handleCloseFirstChatTheme}
            onCloseSecond={handleCloseSecondChatTheme}
            />
          </Route>
          <Route path="/four">
            <Main
            onOpenWorkspacePopup={handleOpenWorkspacePopup}
            />
          </Route>
        </Switch>
        <Popup
        isOpen={isPopupWorkspaceOpen}
        onClose={handleCloseWorkspacePopup}
        />
        <AddNewPopup
        onAddNewWorkspace={handleAddNewWorkspace}
        isOpenAddWorkSpacePopup={isAddNewWokspacePopupOpen}
        onClose={handleCloseWorkspacePopup}
        />
      </div>
    </div>
  );
}

export default App;
