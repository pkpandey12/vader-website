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
        return animate0 ? '/images/Roadmap-Game_Gif.gif' : '/images/Roadmap_-_Game_Gif-1-_dragged_.png'
      case 1:
        return animate1 ? '/images/Roadmap-Merch_Store_Gif.gif' : '/images/Roadmap_-_Merch_Store_Gif-1-_dragged_.png'
      case 2:
        return animate2 ? '/images/Roadmap-Alpha_Hub_Gif.gif' : '/images/Roadmap-Alpha_Hub_Gif-1-_dragged_.png'
      case 3:
        return animate3 ? '/images/Roadmap-Loomverse_Gif.gif' : '/images/Roadmap_-_Loomverse_Gif-1-_dragged_.png'
      case 4:
        return animate4 ? '/images/Roadmap-Media_Gif.gif' : '/images/Roadmap_-_Media_Gif-1-3-_dragged_.png'
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
            <div className="roadmap-section" onMouseEnter={()=>setAnim0(true)} onMouseLeave={()=>setAnim0(false)}>
              <Fade down when={animate0}>
                <div className='roadmap-section-date'>
                  Mid 2022
                </div>
              </Fade>
              <div className="roadmap-section-image-container">
                <img className='roadmap-section-image' src={conciser(0)} alt='video game'/>
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
                <img className='roadmap-section-image' src={conciser(1)} alt='merch store' />
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

            <div className="roadmap-section" onMouseEnter={()=>setAnim2(true)} onMouseLeave={()=>setAnim2(false)}>
              <Fade down when={animate2}>
                <div className='roadmap-section-date'>
                  Late 2022
                </div>
              </Fade>
              <div className="roadmap-section-image-container">
                <img className='roadmap-section-image' src={conciser(2)} alt='alpha hub' />
              </div>
              <Fade up when={animate2}>
                <div className = 'roadmap-section-title'>
                  Alpha Hub
                </div>
                <div className='roadmap-section-body'>
                  A multifacted platform to neurodive right into NFT alpha - analyse collections and engage socially.
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
                <img className='roadmap-section-image' src={conciser(3)} alt='loomverse' />
              </div>
              <Fade up when={animate3}>
                <div className = 'roadmap-section-title'>
                  Loomverse
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
                <img className='roadmap-section-image' src={conciser(4)} alt='media' />
              </div>
              <Fade up when={animate4}>
                <div className = 'roadmap-section-title'>
                  Stories
                </div>
                <div className='roadmap-section-body'>
                  Tantalus is in flux - hear its stories with us. Graphic novels, animation and music, inspired by the Loom.
                </div>
              </Fade> 
            </div>
          </div>
    </div>
  )
}

export default Roadmap