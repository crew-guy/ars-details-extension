import React from 'react';
import './assets/css/styles.css'
import './App.css';
import Link from './components/Link';
import ars from './assets/images/ars.png'
import github from './assets/images/github.png'
const psl = require('psl')

interface LinkI {
  imgSrc: string,
  name: string,
}

function App() {
  return (
    <div className="App">
      <h1 className="title">Quick Links</h1>
      <div className="links-container">
        <Link
          imgSrc={getFavicon("https://www.linkedin.com/in/ankit-sanghvi-99237b1a0/")}
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

      </div>
    </div>
  );
}

const getFavicon = (string: string) => {
  //? Via regex
  // const reg = new RegExp("/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img")

  //? Via the pkg "psl"
  const hostname = psl.parse(string).domain
  return `https://s2.googleusercontent.com/s2/favicons?domain_url=${hostname}`
}

export default App;
