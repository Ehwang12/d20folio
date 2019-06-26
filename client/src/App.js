import React, { Component } from "react";
import NavigationBar from "./component/Navbar/index";
import ViewAllCharacters from './pages/ViewAllCharacters';
import { BrowserRouter, Route } from 'react-router-dom';
import EditCharacter from './pages/EditCharacter';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Route exact path="/" component={ ViewAllCharacters } />
          <Route exact path="/mychars" component={ () => <div>My Characters</div>} />
          <Route exact path="/new" component={ () => <EditCharacter new={true}/>} />
          <Route exact path="/edit/:id" component={ ({match}) => <div>Editing {match.params.id}</div>} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
