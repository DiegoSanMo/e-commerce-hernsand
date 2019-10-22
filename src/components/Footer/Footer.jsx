import React from 'react'
import { Parallax } from 'react-parallax'

export default function Footer() {
  const insideStyles = {
    // background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  return (

    <div className="row">
      <div className="col-12">

        <Parallax
          bgImage="https://www.kloepfel-consulting.com/wp-content/uploads/2019/07/blouse-2597205_1920.jpg"
          strength={200}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <button type="button" className="btn btn-dark">
                Register now
              </button>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}
