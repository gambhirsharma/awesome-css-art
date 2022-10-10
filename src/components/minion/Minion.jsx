import React from 'react'
import './minion.scss'

function Minion() {
  return (
    <div>
      <div className="minion-canvas">
  <section>
    <div className="main">
      <div className="strip"></div>
      <div className="strip"></div>
      <div className="cloth">
        <div className="pocket"></div>
        <i>
          <p></p>
        </i><i>
          <p></p>
        </i>
      </div>
      <div className="mouth">
        <div className="inside">
          <div className="teeth"></div>
        </div>
      </div>
      <div className="eye">
        <div className="lens-strip">
          <i></i><i></i>
          <p>
            <span></span><span></span><span></span>
          </p>
        </div>
        <div className="lens">
          <div className="eye-ball"></div>
        </div>
      </div>
    </div>
    <div className="leg">
      <div className="shoes"></div>
      <div className="shoes"></div>
    </div>
    <div className="hand">
      <i></i>
      <i></i>
    </div>
  </section>
</div>
    </div>
  )
}

export default Minion
