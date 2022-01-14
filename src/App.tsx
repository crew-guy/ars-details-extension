import React, { useState } from 'react';
import './assets/css/styles.css'
import './App.css';
import Links from './components/Link';
import ars from './assets/images/ars.png'
import github from './assets/images/github.png'
const psl = require('psl')

function App() {
  return (
    <div className="App">
      <h1 className="title">Quick Links</h1>
      <div className="links-container">
        <Link
          imgSrc={getFavicon("https://www.linkedin.com/in/")}
          text={'LinkedIn'}
          address={"https://www.linkedin.com/in/ankit-sanghvi-99237b1a0/"}
        />
        <Link
          imgSrc={getFavicon("https://blog.ankitsanghvi.live")}
          text={'Website'}
          address={"https://ankitsanghvi.live"}
        />
        <Link
          imgSrc={github}
          text={'GitHub'}
          address={"https://github.com/crew-guy"}
        />
        <Link
          imgSrc={getFavicon("blogger.com")}
          text={'Blog'}
          address={"https://blog.ankitsanghvi.live"}
        />
        <Link
          imgSrc={getFavicon("calendly.com")}
          text={'Calendly'}
          address={"https://calendly.com/ankit-sanghvi/discuss"}
        />
      </div>
    </div>
  );
}

const getFavicon = (string: string) => {
  //? Via the pkg "psl"
  const hostname = psl.parse(string).domain
  return `https://s2.googleusercontent.com/s2/favicons?domain_url=${hostname}`
}

export default App;