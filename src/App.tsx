import React, { useEffect, useRef, useState } from 'react';
import { scrollSpy } from 'react-scroll';

import './App.scss';
import Navbar from './components/NavBar';
import Section from './components/Section';
import useScrollSnap from 'react-use-scroll-snap';
import ElevatorDoors from './components/ElevatorDoors';
import StreetView from './components/StreetView';

const App = () => {

  const [showElevator, setShowElevator] = useState(true);

  const fromChildSetElevator = (val: boolean) => {
    setShowElevator(val);
  }

  const container = useRef(null);

  useScrollSnap({ ref: container, duration: 200, delay: 0 });


  useEffect( () => {
    console.log(scrollSpy.currentPositionY);
  },[])

  return (
    <div id='container' ref={container} className={"app-container"}>
    {/* <Navbar /> */}
    {showElevator &&
    <ElevatorDoors func={fromChildSetElevator}/>
    }
    <StreetView/>
    <Section
      title="Section 1"
      subtitle={"dummyText"}
      dark={true}
      id="section1"
    />

    <Section
      title="Section 2"
      subtitle={"dummyText"}
      dark={false}
      id="section2"
    />
    <Section
      title="Section 3"
      subtitle={"dummyText"}
      dark={true}
      id="section3"
    />
    <Section
      title="Section 4"
      subtitle={"dummyText"}
      dark={false}
      id="section4"
    />
    <Section
      title="Section 5"
      subtitle={"dummyText"}
      dark={true}
      id="section5"
    />
  </div>
  )
}
export default App;
