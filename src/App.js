import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Start from './Components/Start';
import Details from './Components/Details';
import About from './Components/About';

class App extends Component {
  render() {
	  return (
	    <HashRouter>
	       <Navbar></Navbar>
	     <Switch>
	      <Route  exact path="/details" component={Details}/>
	      <Route path="/start" component={Start}/>
	      <Route path="/about" component={About}/>
	     </Switch>
	       
	     </HashRouter>
	  );
	};
};
export default App;
