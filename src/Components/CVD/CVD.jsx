import React from 'react'
import "./CVD.scss"
import { Link } from 'react-router-dom'

function CVD() {
  return (
    <div className='CVD-box container'>
        <div className='CVD-wrap'>
            <h2 className='CVD-title'>let’s work together on Your Next Project</h2>
            <button className='CVD-btn'>HIRE ME NOW</button>
            <Link className='CVD-link'>Download CV</Link>
        </div>
    </div>
  )
}

export default CVD