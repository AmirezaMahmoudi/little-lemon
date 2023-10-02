import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';
import Test from './components/Test';

function App() {
  return (
    <>
      <Nav/>
      <Main />
      <Menu/>
      <Test />
      <Footer/>
    </>
  );
}

export default App;
