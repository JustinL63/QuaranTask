import React from 'react';
import './App.scss'
import NavBar from './Layout/Navigation/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TaskCreator from './Tasks/TaskCreator';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact/>
        <Route path='/taskcreator' component={TaskCreator}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
