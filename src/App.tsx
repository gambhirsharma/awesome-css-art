
import Radar from './components/radar/Radar.jsx';
import Minion from './components/minion/Minion.jsx';
import Penguin from './components/penguin/Penguin.jsx'
import Fox from './components/fox/Fox.jsx';
import './index.css';
import React from 'react';

function App() {
  return (
    <div className="App">
    <header>
      <div>
        Awesome CSS-ART   
        </div>
      <div>
        <ul>
        <li><a href="https://github.com/gambhirsharma/" target="_blank">GitHub</a></li>
        <li><a href="https://codepen.io/gambhirsharma/" target="_blank">CodePen</a></li>
        <li><a href="https://twitter.com/gambhir_sharma" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </header>
    {/* #################################################################### */}
    <div className='section-1'>
    <Radar></Radar>
    </div>
    <div className="section-2">
      <Minion></Minion>
     {/* <Penguin></Penguin> */}
    </div>
    {/* #################################################################### */}
    </div>
  )
}

export default App;
