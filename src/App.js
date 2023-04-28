import Home from './components/home/home.jsx';
import Footer from './components/footer/footer.jsx'
import React from 'react';
import Slider from './components/slider/Slider.jsx';
import Story from './components/story/Story.jsx';
import About from './components/about us/About.jsx';
import Thought from './components/thought/Thought.jsx';
import Award from './components/awards/Award.jsx';
import Review from './components/review/Reveiw.jsx';

function App() {
  return (
    <>
      <React.Fragment>
        <Home /> 
      </React.Fragment>
      <Slider/>
      <Story/>
      <About/>
      <Thought/>
      <Award/>
      <Review/>
     
      <Footer />
      
    </>
  );
}

export default App;
