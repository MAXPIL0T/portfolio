import React, { useRef, useState } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from './res/resume.pdf'
import linkedin from './res/linkedin.png';
import github from './res/github.png'
import Todo from './todo/App'
import me from './res/me.jpg'

function App() {

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  const basic_style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    'zIndex': '2'
  };

  const ref = useRef();

  return (
    <div className="app">
      
      <div className="paral">
        <Parallax pages={8.1} ref={ref}>
          <ParallaxLayer offset={1} speed={1} sticky={{ start: 1, end: 4.5 }} style={{ backgroundColor: 'rgb(36, 35, 92)' }} />
          <ParallaxLayer offset={6.91} speed={0.9}  style={{ backgroundColor: '#87BCDE' }} />
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
          <ParallaxLayer offset={1.25} speed={0.5} sticky={{ start: 1.3, end: 4.5 }} >
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
          <ParallaxLayer offset={3.5} speed={0.5} sticky={{ start: 3.5, end: 3.5 }} style={basic_style}>
            <div className='container-right'>
              <div className="intro">
                <h1>This portfolio site</h1>
                <a className="live-version" href="https://github.com/MAXPIL0T/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <ul>
                <li>Utilized React, Node.js, react-spring, framer-motion, and Azure Functions.</li>
                <li>Deployed on Azure using Azure App Service</li>
                <li>Embeded parts from other projects as components here.</li>
                <li>Created custom components to display popups and pdfs.</li>
              </ul>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.5} speed={0.5} sticky={{ start: 4.5, end: 4.5 }} style={basic_style}>
            <div className='container-right'>
              <div className="intro">
                <h1>Homepage for author Jaden Farquhar</h1>
                <a className="live-version" href="https://www.jadenfarquhar.com/" target="_blank" rel="noopener noreferrer">Live Version</a>
              </div>
              <ul>
                <li>Utilized React, Node.js, React Router, Azure Functions, SQL, and Redux.</li>
                <li>Created a user friendly GUI editor so that the author can easily change site content.</li>
                <li>Implements features such as popups, mailing lists, and PDF previews.</li>
                <li>Comment sections and user authentication are coming soon.</li>
              </ul>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={-0.1} offset={5.4} style={basic_style}>
            <h1>Resume</h1>
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} offset={5.95} style={basic_style}>
            <a style={{textDecorations: 'none', cursor: 'pointer', color: 'black', borderBottom: '1px solid black', marginBottom: '0.5rem'}} href={resume} download="Maximilian Kuechen Resume.pdf">Download</a>
            <div className="pdf">
              <Document file={resume} width={numPages} onLoadSuccess={onDocumentLoadSuccess} height={400} renderMode="canvas" renderTextLayer={false}>
                <Page width={1000} pageNumber={1} />
              </Document>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6.99999} speed={1.2} style={basic_style}>
            <div className="container-left">
              <img style={{borderRadius: '50%'}} src={me} alt="Headshot" />
            </div>          
          </ParallaxLayer>
          <ParallaxLayer offset={6.75} speed={0.7} style={basic_style}>
            <div className="container-right-inf">
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2>I'd love to get in touch!</h2>
                <a href="https://www.linkedin.com/in/maximilian-kuechen" target="_blank" rel="noopener noreferrer">Add me on LinkedIn.</a>
                <a href="https://github.com/MAXPIL0T" target="_blank" rel="noopener noreferrer">Follow my GitHub.</a>
                <a href="mailto:me@maxkuechen.com" >me@maxkuechen.com</a>
                <a href="tel:0016172199221">+1 (617) 219-9221</a>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={7.2} speed={0.4} style={basic_style}>
            <h1>Thanks for visiting.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={7.85} speed={1} style={basic_style}>
            <div style={{ width: '70vw', display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center'}}>
              <a style={{textDecorations: 'none', cursor: 'pointer', color: 'black', borderBottom: '1px solid black'}} href="mailto:me@maxkuechen.com" target="_blank" rel="noopener noreferrer">me@maxkuechen.com</a>
              <p>?? 2022 Maximilian Kuechen</p>
              <a style={{textDecorations: 'none', cursor: 'pointer', color: 'black', borderBottom: '1px solid black'}} href="https://github.com/MAXPIL0T/portfolio" target="_blank" rel="noopener noreferrer">View  on  Github.</a>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;