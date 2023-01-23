import React from "react"

function Planning({currentDay}) {
  return (
    <section className='content'>
        <div className='planning'>
          <div className='heading'>{currentDay}</div>
        </div>
      </section>
  )
}

export default Planning