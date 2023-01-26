import React from "react"

function Planning({currentDay}) {
  return (
    <section className='content'>
        <div className='planning'>
          <div className='heading'>{currentDay}</div>
            <div className="planning-reservations">
              <div className="planning-am"></div>
              <div className="planning-pm"></div>
            </div>
        </div>
      </section>
  )
}

export default Planning