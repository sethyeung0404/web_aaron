import React from "react";
import './IndexHeader.css';

// core components
import background from '../assets/img/background.mp4';

function IndexHeader() {
  return (
    <>
      <div className='background-image'>
        <div className='space' />
        <div className='video-mask'>
          <video className='video' autoPlay loop muted playsinline="true" disablePictureInPicture="true">
            <source src={background} type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
