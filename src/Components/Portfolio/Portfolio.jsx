import React from 'react'
import "./Portfolio.scss"
import { Link } from 'react-router-dom'
import leftIcon from '../../assets/img/imgPort/portLeftIcon.svg'
import rightIcon from '../../assets/img/imgPort/portRightIcon.svg'
import portImg1 from "../../assets/img/imgPort/portimg4.jpg"
import portImg2 from "../../assets/img/imgPort/portimg5.jpg"
import portImg3 from "../../assets/img/imgPort/portimg3.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper";

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='container'>
                <div className='port-wrap'>
                    <div className='port-title-wrap'>
                        <h2>03</h2>
                        <h3>portfolio</h3>
                    </div>
                    <ul className='port-list'>
                        <li><Link className='port-first-link'>ALL</Link></li>
                        <li><Link>ui/ux design</Link></li>
                        <li><Link>PRODUCT DESIGN</Link></li>
                        <li className='port-item1'><Link>BRANDING</Link></li>
                        <li className='port-item2'><Link>WEB DESIGN</Link></li>
                    </ul>

                    <ul className='port-list-resp'>
                        <li><Link className='port-first-link-resp'>ALL</Link></li>
                        <li><Link>ui/ux design</Link></li>
                        <li><Link>PRODUCT DESIGN</Link></li>
                    </ul>
                    <ul className='port-list-resp2'>
                        <li><Link className='port-first-link-resp2'>BRANDING</Link></li>
                        <li><Link>WEB DESIGN</Link></li>
                    </ul>

                    <div className='port-btn-wrap'>
                        <button><img src={leftIcon} alt="" /></button>
                        <button><img src={rightIcon} alt="" /></button>
                    </div>
                </div>


                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className='port-wrapper'>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                    <div className='main-container'> 
                        <img className='overly-img' src={portImg3} alt="" width={364} height={249} />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='port-wrapper'>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" width={364} height={249} />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='port-wrapper'>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" width={364} height={249} />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <img className='overly-img' src={portImg3} alt="" />
                        <div class="overlay">
                            <div class="text">MOBILE DESIGN</div>
                            <div class="text2">UI/UX Design</div>
                        </div>
                    </div>
                </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio