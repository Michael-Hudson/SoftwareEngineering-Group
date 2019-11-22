import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './home';

class App extends React.Component {
  render(){
    return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
    }
}

export default App;
