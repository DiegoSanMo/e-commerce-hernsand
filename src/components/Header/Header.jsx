import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Hearder = () => {

  return (
    <div className="row">
      <div className="col-12">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage="http://mountmessenger.msmc.edu/wp-content/uploads/2016/09/fashion.jpg"
          bgImageAlt="the dog"
          strength={-200}>
          <h1 className="text-center my-5 pt-5 display-1 font-italic font-weight-light text-white" style={{ letterSpacing: '20px' }} >HERNSAND</h1>
          <div style={{ height: '800px' }} />
        </Parallax>

      </div>
    </div>
  )

}

export default Hearder;