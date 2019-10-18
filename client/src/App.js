import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  
  function withAuthCheck(Component, props) {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    }
    return <Redirect to='/' />;
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/bubbles" render={props => withAuthCheck(BubblePage, props)} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
