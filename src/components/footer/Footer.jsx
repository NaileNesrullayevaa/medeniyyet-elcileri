import React, { useEffect, useState } from 'react'
import './footer.scss'
import { FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {
    const [scrolling, setScrolling] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (

        <footer className='footer !px-[clamp(20px,5vw,120px)] !py-[clamp(40px,4vw,80px)]' id='contact'>
            <div className='footer_bg'></div>
            <div className="logo !mb-5">
                <img className='h-[83px]' src="https://ambassador.culture.az/assets/logo-DLjgLKZy.svg" alt="" />
            </div>
            <ul className='!pb-[clamp(50px,4vw,100px)] flex items-center gap-6'>
                <li><a href="" target='_'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H10.5V16H7V13H10.5V11C10.5 8.79086 12.2909 7 14.5 7H17V10H14.5C13.9477 10 13.5 10.4477 13.5 11V13H17V16H13.5V22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z" fill="#28303F" /></svg></a></li>
                <li><a href="" target='_'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 2C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H17ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#28303F" /></svg></a></li>
                <li><a href="" target='_'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 22H2V8.5H6V22ZM13 8.5V9.3418C13.6256 9.12069 14.2987 9 15 9C18.3137 9 21 11.6863 21 15V22H17V15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15V22H9V8.5H13ZM4 2C5.10457 2 6 2.89543 6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2Z" fill="#28303F" /></svg></a></li>
                <li><a href="" target='_'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.8604 3C21.0695 3 22.8604 4.79086 22.8604 7V17C22.8604 19.2091 21.0695 21 18.8604 21H5.14062C2.93149 21 1.14063 19.2091 1.14062 17V7C1.14062 4.79086 2.93149 3 5.14062 3H18.8604ZM10.4482 8.72363C9.78334 8.39118 9.00098 8.87478 9.00098 9.61816V14.3818C9.00098 15.1252 9.78334 15.6088 10.4482 15.2764L15.2119 12.8945C15.9488 12.526 15.9488 11.474 15.2119 11.1055L10.4482 8.72363Z" fill="#28303F" /></svg></a></li>
            </ul>
            <hr className='!mb-[33px] border-[#a2a2a267]' />
            <p className='text-[18px] text-[#7A7A7A]'>Copyright @ culture ambassador 2025. All Rights Reserved.</p>
            <div className="bottom">
                <button className={` ${scrolling ? 'active' : ''}`} onClick={scrollToTop}><span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        width="50"
                        height="50"
                        preserveAspectRatio="xMidYMid meet"
                        style={{
                            width: '100%',
                            height: '100%',
                            transform: 'translate3d(0px, 0px, 0px)',
                            contentVisibility: 'visible',
                        }}
                    >
                        <defs>
                            <clipPath id="__lottie_element_4719">
                                <rect width="512" height="512" x="0" y="0" />
                            </clipPath>
                        </defs>

                        <g clipPath="url(#__lottie_element_4719)">
                            <g
                                transform="matrix(0,-0.8,0.8,0,256,205.597)"
                                opacity="1"
                                style={{ display: 'block' }}
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                    <g opacity="1" transform="matrix(0.9,0,0,0.9,0,0)">
                                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                                            <path
                                                fill="#fff"
                                                fillOpacity="1"
                                                d="M-28.666,41.452 C-28.666,41.452 2.247,0 2.247,0 C2.247,0 -28.666,-41.452 -28.666,-41.452 C-28.666,-41.452 13.138,-41.452 13.138,-41.452 C13.138,-41.452 44.051,0 44.051,0 C44.051,0 13.138,41.452 13.138,41.452 C13.138,41.452 -28.666,41.452 -28.666,41.452 z"
                                            />
                                        </g>
                                    </g>
                                    <path fill="rgb(229,57,53)" fillOpacity="1" d="M0 0" />
                                </g>
                            </g>

                            <g
                                transform="matrix(0,-0.8,0.8,0,256,348.663)"
                                opacity="1"
                                style={{ display: 'block' }}
                            >
                                <g opacity="1" transform="matrix(0.9,0,0,0.9,0,0)">
                                    <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                                        <path
                                            fill="#fff"
                                            fillOpacity="1"
                                            d="M-28.666,41.452 C-28.666,41.452 2.247,0 2.247,0 C2.247,0 -28.666,-41.452 -28.666,-41.452 C-28.666,-41.452 13.138,-41.452 13.138,-41.452 C13.138,-41.452 44.051,0 44.051,0 C44.051,0 13.138,41.452 13.138,41.452 C13.138,41.452 -28.666,41.452 -28.666,41.452 z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                </span></button>
            </div>
        </footer>
    )
}

export default Footer