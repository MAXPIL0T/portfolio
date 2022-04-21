import React, { useRef } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import linkedin from './res/linkedin.png';
import github from './res/github.png'
import Todo from './todo/App'

function App() {
  const basic_style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    'z-index': '2'
  };

  const ref = useRef();

  return (
    <div className="app">
      
      <div className="paral">
        <Parallax pages={10} ref={ref}>
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
          <ParallaxLayer offset={1.25} speed={0.1} sticky={{ start: 1.3, end: 4 }} >
            <div className='container-left'>
              <p>Projects</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} sticky={{ start: 2, end: 2 }} style={basic_style}>
            <div className='container-right'>
              <div className="intro">
                <h1>Todo List</h1>
                <a className="live-version" href="https://todo.maxkuechen.com/" target="_blank" rel="noopener noreferrer">Live Version</a>
              </div>
              <ul>
                <li>Utilized React for the frontend and Node.js for the backend.</li>
                <li>Deployed on Azure using Azure App Service</li>
                <li>Smart features to reorder the list are in the works.</li>
              </ul>
              <div className="todo-embed">
                <Todo/>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5} sticky={{ start: 4, end: 4 }} style={basic_style}>
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
    </div>
  );
}

export default App;
