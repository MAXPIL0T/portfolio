import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import linkedin from './res/linkedin.png';
import github from './res/github.png'

function App() {
  const basic_style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };
  return (
    <div className="app">
      <Parallax pages={10}>
        <ParallaxLayer offset={1} speed={1} sticky={{ start: 1, end: 4.5 }} style={{ backgroundColor: 'rgb(36, 35, 92)' }} />
        <ParallaxLayer offset={6} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={0} speed={0.1} style={basic_style}>
          <h1>Maximilian Kuechen</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4} style={basic_style}>
          <div className="header">
            <a href="https://www.linkedin.com/in/maximilian-kuechen/" target="_blank" rel="noopener noreferrer">
              <img className='logo' src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/MAXPIL0T"target="_blank" rel="noopener noreferrer">
              <img className='logo' src={github} alt="GitHub" />
            </a>
          </div>          
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} sticky={{ start: 1.25, end: 4 }} style={basic_style}>
          <div className='container-left'>
            <p>Projects</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} sticky={{ start: 2, end: 2 }} style={basic_style}>
          <div className='container-right'>
            <p>Todo</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} sticky={{ start: 3, end: 3 }} style={basic_style}>
          <div className='container-right'>
            <p>Todo 1</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} sticky={{ start: 4, end: 4 }} style={basic_style}>
          <div className='container-right'>
            <p>Todo 2</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
