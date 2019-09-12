import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';
import Navber from '../src/component/navbar/navbar'
import Header from '../src/component/header/header'
import About from '../src/component/about/about'
import Skills from '../src/component/skill/skill'
import Porfolio from '../src/component/porfolio/porfolio'
import Footer from '../src/component/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navber />
        <Header />
        {/* <header className="App-header">
        </header> */}
        <About className="aboutme" id="aboutme"/>
        <Skills />
        <Porfolio />

        <footer className="footter">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
