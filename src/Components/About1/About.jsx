import React from 'react'
import "./About.scss"
import aboutImg1 from "../../assets/img/imgAbout1/aboutImg1.jpg"
import aboutImg2 from "../../assets/img/imgAbout1/aboutImg2.jpg"

function About() {
  return (
    <div className='container about-wrap'>
        <div className='about1-wrapper'>
            <div className='about1-list'>
                <img src={aboutImg1} alt="" width={"230px"} height={"256.58px"} />
                <div className='about1-item'>
                    <h3>Saticfied Customers</h3>
                    <h2>25</h2>
                </div>
            </div>
            <div className='about1-list1'>
                <div className='about1-item1'>
                    <h2>8</h2>
                    <h3>Year of experience</h3>
                </div>
                <img src={aboutImg2} alt="" width={"230px"} height={"256.58px"} />
            </div>
        </div>
        <div className='aboutme-wrapper'>
            <h2>01</h2>
            <div className='aboutme-list'>
                <h3>about me</h3>
                <p className='aboutme1'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p className='aboutme2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    </div>
  )
}

export default About