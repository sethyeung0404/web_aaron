import React from "react";

// core components
import background from '../assets/img/background.mp4';

function IndexHeader() {
  return (
    <>
      <div className='background-image'>
        <div className='space'/>
        <video className='video' autoPlay loop muted>
          <source src={background} type='video/mp4' />
        </video>
      </div>
    </>
  );
}

export default IndexHeader;
