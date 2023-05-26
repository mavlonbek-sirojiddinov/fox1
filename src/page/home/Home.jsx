import React from 'react'
import Header from '../../Components/Header/Header'
import About from '../../Components/About1/About'
import CV from '../../Components/CV/CV'
import CVD from '../../Components/CVD/CVD'
import Servis from '../../Components/Servis/Servis'

function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <CV/>
        <CVD/>
        <Servis/>
    </div>
  )
}

export default Home