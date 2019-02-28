import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import CardContainer from "./containers/CardContainer";
import CardInfo from "./components/CardInfo";
import DesignEditor from "./containers/DesignEditor";
import UserDesigns from "./components/UserDesigns";
import UserInvites from "./components/UserInvites";
import UserAccount from "./containers/UserAccount";
import SignUpInContainer from "./containers/SignUpInContainer";
import NavBar from "./containers/NavBar";
import './css/App.css';

class App extends Component {

  render() {   
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={CardContainer}/>
          <Route path="/:id" component={CardInfo}/>
          <Route path="/designeditor" component={DesignEditor}/>
          <Route path="/mydesigns" component={UserDesigns}/>
          <Route path="/myinvites" component={UserInvites}/>
          <Route path="/account" component={UserAccount}/>
          <Route path="/loginorsignup" component={SignUpInContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
