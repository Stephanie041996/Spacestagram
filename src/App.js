import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import './App.css';
import ImageList from './components/ImageList';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route path="/" exact component={ImageList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
