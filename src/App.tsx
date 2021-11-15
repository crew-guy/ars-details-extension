import React from 'react';
import './assets/css/styles.css'
import './App.css';
import Link from './components/Link';
import ars from './assets/images/ars.png'
import github from './assets/images/github.png'

function App() {
  return (
    <div className="App">
      <h1 className="title">Link House</h1>
      <div className="links-container">
        <Link
          imgSrc={getFavicon("linkedin.com")}
          text={'LinkedIn'}
          address={"https://www.linkedin.com/in/ankit-sanghvi-99237b1a0/"}
        />
        <Link
          imgSrc={ars}
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
  return `https://s2.googleusercontent.com/s2/favicons?domain_url=${string}`
}

export default App;
