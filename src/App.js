import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import ChatRoom from './Room';

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
          <Route path="/Room" exact component={ChatRoom} />
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
