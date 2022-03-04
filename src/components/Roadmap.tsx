import React, {useState, useEffect} from 'react';

import Fade from 'react-reveal/Fade';
import { Typography, Box } from '@mui/material';

const Roadmap = (props?: any) => {

  const [animate0, setAnim0] = useState(false);
  const [animate1, setAnim1] = useState(false);
  const [animate2, setAnim2] = useState(false);
  const [animate3, setAnim3] = useState(false);
  const [animate4, setAnim4] = useState(false);




  const conciser = (index: number) => {
    switch(index) {
      case 0:
        return !animate0 ? '/images/roadmap02.gif' : '/images/Roadmap_-_Game_Gif-1-_dragged_.png'
      case 1:
        return !animate1 ? '/images/roadmap05.gif' : '/images/Roadmap_-_Merch_Store_Gif-1-_dragged_.png'
      case 2:
        return !animate2 ? '/images/roadmap04.gif' : '/images/Roadmap-Alpha_Hub_Gif-1-_dragged_.png'
      case 3:
        return !animate3 ? '/images/roadmap01.gif' : '/images/Roadmap_-_Loomverse_Gif-1-_dragged_.png'
      case 4:
        return !animate4 ? '/images/roadmap03.gif' : '/images/Roadmap_-_Media_Gif-1-3-_dragged_.png'
    }
  }

  return(
    
    <div id="roadmap">
        <div id="space">
          
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
        </div>

          <div id="roadmap-section-container">

        <div className="roadmap-section" onMouseEnter={()=>setAnim2(true)} onMouseLeave={()=>setAnim2(false)}>
              <Fade down when={animate2}>
                <div className='roadmap-section-date'>
                  Mid 2022
                </div>
              </Fade>
              <div className="roadmap-section-image-container">
                <div className='roadmap-section-image-01'> </div>
              </div>
              <Fade up when={animate2}>
                <div className = 'roadmap-section-title'>
                  Alpha Hub
                </div>
                <div className='roadmap-section-body'>
                Neurodive into alpha regarding NFTs and Hot new projects in the crypto space                </div>
              </Fade>
            </div>
            <div className="roadmap-section" onMouseEnter={()=>setAnim0(true)} onMouseLeave={()=>setAnim0(false)}>
              <Fade down when={animate0}>
                <div className='roadmap-section-date'>
                  Mid 2022
                </div>
              </Fade>
              <div className="roadmap-section-image-container">
              <div className='roadmap-section-image-02'> </div>
              </div>
              <Fade up when={animate0}>
                <div className = 'roadmap-section-title'>
                  The Game
                </div>
                <div className='roadmap-section-body'>
                  Help us create a community driven game focused on RPG style elements and build your own adventure.
                </div>
              </Fade>
            </div>

            <div className="roadmap-section" onMouseEnter={()=>setAnim1(true)} onMouseLeave={()=>setAnim1(false)}>
            <Fade down when={animate1}>
                <div className='roadmap-section-date'>
                  Late 2022
                </div>
              </Fade>
              <div className="roadmap-section-image-container">
              <div className='roadmap-section-image-05'> </div>
              </div>
              <Fade up when={animate1}>
                <div className = 'roadmap-section-title'>
                  The Swag
                </div>
                <div className='roadmap-section-body'>
                  Collaborative, wearable art, from our minds to our fashion, all thanks to the magic of supply-side econ.
                </div>
              </Fade>
            </div>

            <div className="roadmap-section" onMouseEnter={()=>setAnim3(true)} onMouseLeave={()=>setAnim3(false)}>
            <Fade down when={animate3}>
                <div className='roadmap-section-date'>
                  Early 2023
                </div>
              </Fade>
            <div className="roadmap-section-image-container">
            <div className='roadmap-section-image-03'> </div>
              </div>
              <Fade up when={animate3}>
                <div className = 'roadmap-section-title'>
                  Loom-verse
                </div>
                <div className='roadmap-section-body'>
                  A metaverse experience, the true Loom Society. Explore the Loomverse and meet its inhabitants.
                </div>
              </Fade>
            </div>

            <div className="roadmap-section" onMouseEnter={()=>setAnim4(true)} onMouseLeave={()=>setAnim4(false)}>
              <Fade down when={animate4}>
                <div className='roadmap-section-date'>
                  2023
                </div>
              </Fade>
              <div className="roadmap-section-image-container">
              <div className='roadmap-section-image-04'> </div>
              </div>
              <Fade up when={animate4}>
                <div className = 'roadmap-section-title'>
                  & More
                </div>
                <div className='roadmap-section-body'>
                  Tantalus is in flux - and our mission is to bring together everyone to experience it. We'll work as a community to decide what's next.
                </div>
              </Fade> 
            </div>
          </div>
    </div>
  )
}

export default Roadmap