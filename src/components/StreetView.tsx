import React from "react";
import Fade from 'react-reveal/Fade'
import { BackgroundImage } from "react-image-and-background-image-fade";

const StreetView = () => {
  return (
    <div id='streeview-navigator'>
      <Fade bottom>
        <BackgroundImage
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
          width="1920px"
          height="1080px"
          isResponsive
          className='image'
          useChild
          >
            <div
              style={{ width: "100vw", height: "100vh", backgroundSize: "cover", display: "flex", flexDirection: "row" }}
            >
            <div id='left-side-street'>
              <div id='mint-nav'>
              </div>
            </div>
            <div id='right-side-street'>
              <div id='about-nav'>
              </div>
            </div>
            </div>
          </BackgroundImage>
      </Fade>
    </div>
  )
}

export default StreetView;