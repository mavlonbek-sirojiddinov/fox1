import React from 'react'
import "./CV.scss"
import { Link } from 'react-router-dom'
import behance from "../../assets/img/imgCV/behance.svg"
import slack from "../../assets/img/imgCV/slack.svg"
import dribble from "../../assets/img/imgCV/dribbble.svg"
import twilio from "../../assets/img/imgCV/twilio.svg"
import github from "../../assets/img/imgCV/github.svg"

import shopify from "../../assets/img/imgCV/shopify.svg"
import PG from "../../assets/img/imgCV/PG.svg"
import facebook from "../../assets/img/imgCV/facebook.svg"
import amazon from "../../assets/img/imgCV/amazon.svg"
import instagram from "../../assets/img/imgCV/instagram.svg"

function CV() {
  return (
    <div className='CV-box'>
        <div className='container'>
            <ul className='CV-list'>
                <li className='CV-item'><Link className='CV-link'><img src={behance} alt="" /></Link></li>
                <li className='CV-item'><Link className='CV-link'><img src={slack} alt="" /></Link></li>
                <li className='CV-item'><Link className='CV-link'><img src={dribble} alt="" /></Link></li>
                <li className='CV-item'><Link className='CV-link'><img src={twilio} alt="" /></Link></li>
                <li className='CV-item'><Link className='CV-link'><img src={github} alt="" /></Link></li>
            </ul>
            <ul className='CV-list1'>
                <li className='CV-item1'><Link className='CV-link1'><img src={shopify} alt="" /></Link></li>
                <li className='CV-item1'><Link className='CV-link1'><img src={PG} alt="" /></Link></li>
                <li className='CV-item1'><Link className='CV-link1'><img src={facebook} alt="" /></Link></li>
            </ul>
            <ul className='CV-list2'>
                <li className='CV-item1'><Link className='CV-link1'><img src={amazon} alt="" /></Link></li>
                <li className='CV-item1'><Link className='CV-link1'><img src={instagram} alt="" /></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default CV