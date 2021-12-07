import React from "react";
import Fade from 'react-reveal/Fade'
import "../extraStyles/glitchText.scss";
import { scroller } from "react-scroll";

const StreetView = (props?: any) => {
  const setIsOpen = props.setIsOpen;
  const [leftTextVisible, setLeftTextVisible] = React.useState(false);
  const [rightTextVisible, setRightTextVisible] = React.useState(false);

  return (
    <div id='streetview-navigator'>
      
      <div id="cover-image">
      </div>

      <div
        id="street-container"
        className={'background-loader'}
      >
        <Fade bottom>
          <div id='left-side-street'
            onMouseEnter={() => setLeftTextVisible(true)}
            onMouseOut={() => setLeftTextVisible(false)}
            onClick={() => setIsOpen(true)}>{leftTextVisible &&
              <div className='street-content'>Mint a vader</div>}
          </div>
          <div id='right-side-street'
            onMouseEnter={() => setRightTextVisible(true)}
            onMouseOut={() => setRightTextVisible(false)}
            onClick={() => {
              scroller.scrollTo('bar-container', {
                duration: 1500,
                delay: 100,
                smooth: true
              }
              )
            }}>{rightTextVisible &&
              <div className='street-content'>
                Enter the Bar?
              </div>
            }</div>
        </Fade>
      </div>

    </div>
  )
}

export default StreetView;