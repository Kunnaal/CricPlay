import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import MainPage from "./pages/mainPage/mainPage"
import CreateLobby from "./pages/createLobby/createLobby";
import JoinLobby from "./pages/joinLobby/joinLobby";

function App(){

    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/create" component={CreateLobby}/>
                <Route path="/join" component={JoinLobby}/> 
            </Switch>
        </Router>
    </div>
}




export default App;