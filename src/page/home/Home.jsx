import React from 'react'
import Header from '../../Components/Header/Header'
import About from '../../Components/About1/About'
import CV from '../../Components/CV/CV'
import CVD from '../../Components/CVD/CVD'

function Home() {
  return (
    <div>
        <Header/>
        <About/>
        <CV/>
        <CVD/>
    </div>
  )
}

export default Home