import Home from './components/home/home.jsx';
import Footer from './components/footer/footer.jsx'
import './App.css';
import React from 'react';
import Slider from './components/slider/Slider.jsx';
import Story from './components/story/Story.jsx';
import About from './components/about us/About.jsx';

function App() {
  return (
    <>
      <React.Fragment>
        <Home /> 
      </React.Fragment>
      <Slider/>
      <Story/>
      <About/>
     
      <Footer />
      
    </>
  );
}

export default App;
