import React from 'react';
import './assets/css/styles.css'
import './App.css';
import Link from './components/Link';
import ars from './assets/images/ars.png'

function App() {
  return (
    <div className="App">
      <h1 className="title">Link House</h1>
      <div className="links-container">
        <Link
          imgSrc={`https://s2.googleusercontent.com/s2/favicons?domain_url=${"linkedin.com"}`}
          text={'LinkedIn'}
          address={"https://www.linkedin.com/in/ankit-sanghvi-99237b1a0/"}
        />
        <Link
          imgSrc={ars}
          text={'Website'}
          address={"https://ankitsanghvi.live"}
        />

      </div>
    </div>
  );
}

export default App;
