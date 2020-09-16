import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App () {
  return (

    <Router>
      <div>

        <main>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/signUp" component={SignUp} />
          </Switch>
        </main>
      </div>
    </Router>

  )
}

export default App;
