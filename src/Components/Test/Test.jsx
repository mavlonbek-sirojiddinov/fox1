import React from 'react'
import "./Test.scss"
import testImg from "../../assets/img/test-img.jpg"
import testIcon from "../../assets/img/testIcon.svg"
import testSlider from "../../assets/img/Slider.svg"

function Test() {
  return (
    <div className='container'>
        <div className='test-wrapper'>
            <img className='test-img' src={testImg} alt="" />
            <div className='test-right-wrap'>
                <div className='test-title-wrap'>
                    <div>
                        <h2>04</h2>
                        <h3>testimonial</h3>
                    </div>
                    <h4>01<span>/03</span></h4>
                </div>
                <span><img src={testIcon} alt="" /></span>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <h4 className='test-name'>Esther Howard</h4>
                <h4 className='test-ceo'>CEO of Adebe</h4>
                <div>
                    <img src={testSlider} alt="" />
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Test