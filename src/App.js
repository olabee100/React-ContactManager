// import { render } from '@testing-library/react';
import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from './context';
import About  from './Components/pages/About';
import NotFound  from './Components/pages/NotFound';
import Test from './Components/test/Test';


function App() {
   
  return (
    <Provider>
      <Router>
    <div className="App">
    <Header branding="Contacts Manager1" />
    <div className="container">
    <Switch>
      <Route exact path= "/" component = {Contacts}/>
      <Route exact path= "/contact/add" component = {AddContact}/>
      <Route exact path= "/contact/edit/:id" component = {EditContact}/>
      <Route exact path= "/about" component = {About}/>
      <Route exact path= "/test" component = {Test}/>
      <Route component = {NotFound} />
    </Switch>
    </div>
  </div>
  </Router>
  </Provider>
   );
  }

  
export default App;
