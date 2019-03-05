import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import CardContainer from "./containers/CardContainer";
import CardInfo from "./components/CardInfo";
import CustomizeCard from "./containers/CustomizeCard";
import DesignEditor from "./containers/DesignEditor";
import DashboardContainer from "./containers/DashboardContainer";
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
          <Route path="/designs/:id" component={CardInfo}/>  
          {
            localStorage.getItem("token") !== null ? 
            <React.Fragment>
              <Route path="/customize" component={CustomizeCard}/>
              <Route path="/designeditor" component={DesignEditor}/>
              <Route path="/dashboard" component={DashboardContainer}/>
              <Route path="/account" component={UserAccount}/>
            </React.Fragment>
            : 
            <Route path="/loginorsignup" component={SignUpInContainer} />
          }
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    );
  }
}


export default App;
