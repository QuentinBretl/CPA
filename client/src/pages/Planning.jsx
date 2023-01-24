import React from "react"

function Planning({currentDay}) {
  return (
    <section className='content'>
        <div className='planning'>
          <div className='heading'>{currentDay}</div>
          <div className="planning-content">
            <div className="planning-header"></div>
          </div>
        </div>
      </section>
  )
}

export default Planning