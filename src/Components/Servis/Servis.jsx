import React from 'react'
import "./servis.scss"
import servisIcon from "../../assets/img/imgServis/servisIcon.svg"
import servisIcon2 from "../../assets/img/imgServis/servisIcon2.svg"
import servisIcon3 from "../../assets/img/imgServis/servisIcon3.svg"
import servisIcon4 from "../../assets/img/imgServis/servisIcon4.svg"

function Servis() {
  return (
    <div className='container'>
        <div className='servis-head-wrapper'>
            <h2>02</h2>
            <h3>my service</h3>
        </div>
        <ul className='servis-list'>
            <li>
              <img src={servisIcon} alt="" />
              <h3>UI/UX Design</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
              </p>
            </li>
            <li>
              <img src={servisIcon2} alt="" />
              <h3>Product Design</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
              </p>
            </li>
            <li>
              <img src={servisIcon3} alt="" />
              <h3>Brand Identity</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
              </p>
            </li>
            <li>
              <img src={servisIcon4} alt="" />
              <h3>Website Design</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
              </p>
            </li>
        </ul>
    </div>
  )
}

export default Servis