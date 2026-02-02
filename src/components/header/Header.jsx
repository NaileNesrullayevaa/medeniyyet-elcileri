import React, { useEffect, useState } from 'react'
import './header.scss'
import { Select } from 'antd'
import { TfiWorld } from "react-icons/tfi";
import arrow from '../../assets/svgs/arrow.svg'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
const Header = () => {
    const handleChange = value => {
        console.log(`selected ${value}`);
    };
    const [menu, setmenu] = useState(false)
    const [link, setlink] = useState('')
    console.log(link)

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScroll(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const containerStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        backgroundColor: "#98989829",
        zIndex: 9999,
    };
    const barStyle = {
        height: "100%",
        backgroundColor: "#000",
        transition: "width 0.1s linear",
    };
    return (
        <div>
            <div style={containerStyle}>
                <div
                    style={{
                        ...barStyle,
                        width: `${scroll}%`,
                    }}
                />
            </div>
            {menu == false &&
                <>
                    <header className="header  flex justify-between !px-5 !py-6 items-center fixed w-full !z-[999]  hidden lg:flex">
                        <div className="logo">
                            <img src="https://ambassador.culture.az/assets/logo-DDj6mrVf.svg" alt="" />
                        </div>
                        <ul className='flex items-center gap-[clamp(18px,2vw,57px)] !pb-[6px]'>
                            <li><a onClick={() => setlink('home')} className={`text-[#AEAEAE] font-poppins uppercase font-normal lg:text-[14px] xl:text-[16px] ${link == 'home' ? 'fore' : ''}`} href="#home">HOME</a></li>
                            <li><a onClick={() => setlink('event')} className={`text-[#AEAEAE] font-poppins uppercase font-normal lg:text-[14px] xl:text-[16px] ${link == 'event' ? 'fore' : ''}`} href="#events">EVENTS</a></li>
                            <li><a onClick={() => setlink('announcement')} className={`text-[#AEAEAE] font-poppins uppercase font-normal lg:text-[14px] xl:text-[16px] ${link == 'announcement' ? 'fore' : ''}`} href="#announcements">Announcements</a></li>
                            <li><a onClick={() => setlink('gallery')} className={`text-[#AEAEAE] font-poppins uppercase font-normal lg:text-[14px] xl:text-[16px] ${link == 'gallery' ? 'fore' : ''}`} href="#gallery">GALLERY</a></li>
                            <li><a onClick={() => setlink('media')} className={`text-[#AEAEAE] font-poppins uppercase font-normal lg:text-[14px] xl:text-[16px] ${link == 'media' ? 'fore' : ''}`} href="#media">MEDİA</a></li>
                            <li><a onClick={() => setlink('contact')} className={`text-[#AEAEAE] font-poppins uppercase font-normal lg:text-[14px] xl:text-[16px] ${link == 'contact' ? 'fore' : ''}`} href="#contact">CONTACT US</a></li>
                        </ul>
                        <div className="right flex items-center">
                            <div className="lang">
                                <Select
                                    defaultValue="AZ"
                                    style={{ width: 60 }}
                                    onChange={handleChange}
                                    options={[
                                        { value: 'az', label: 'AZ' },
                                        { value: 'en', label: 'EN' },
                                        { value: 'ru', label: 'RU' },
                                    ]}
                                />
                                <TfiWorld color='white' style={{ fontSize: '24px' }} />
                            </div>
                            <div className='div'><button><a href=""><span>Sign in</span><img style={{ fontSize: '24px' }} src={arrow} alt="" /></a></button></div>
                        </div>
                    </header>
                    <div className="mini-header flex items-center w-full justify-between !py-6 !px-5 lg:hidden fixed w-full z-[999]">
                        <div className="logo">
                            <img src="https://ambassador.culture.az/assets/logo-DDj6mrVf.svg" alt="" />
                        </div>
                        <div className="icon">
                            <HiOutlineMenuAlt3 onClick={() => setmenu(true)} />
                        </div>
                    </div>
                </>}
            {menu == true &&
                <div className="mobile z-[999] fixed w-full bg-white h-screen">
                    <div className="top-box">
                        <div className="content">
                            <div className="logo">
                                <img src="https://ambassador.culture.az/assets/logo-DDj6mrVf.svg" alt="" />
                            </div>
                            <div className="icon">
                                <AiOutlineClose onClick={() => setmenu(false)} />
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li onClick={() => { setlink('home'), setmenu(false) }} className={`${link == 'home' ? 'fore' : ''}`}><a className='font-poppins uppercase hover:text-gray-800' href="#home">HOME</a></li>
                        <li onClick={() => { setlink('event'), setmenu(false) }} className={`${link == 'event' ? 'fore' : ''}`}><a className='font-poppins uppercase hover:text-gray-800' href="#events">EVENTS</a></li>
                        <li onClick={() => { setlink('announcement'), setmenu(false) }} className={`${link == 'announcement' ? 'fore' : ''}`}><a className='font-poppins uppercase hover:text-gray-800' href="#announcements">Announcements</a></li>
                        <li onClick={() => { setlink('gallery'), setmenu(false) }} className={`${link == 'gallery' ? 'fore' : ''}`}><a className='font-poppins uppercase hover:text-gray-800' href="#gallery">GALLERY</a></li>
                        <li onClick={() => { setlink('media'), setmenu(false) }} className={`${link == 'media' ? 'fore' : ''}`}><a className='font-poppins uppercase hover:text-gray-800' href="#media">MEDİA</a></li>
                        <li onClick={() => { setlink('contact'), setmenu(false) }} className={`${link == 'contact' ? 'fore' : ''}`}><a className='font-poppins uppercase hover:text-gray-800' href="#contact">CONTACT US</a></li>
                    </ul>
                    <div className="bottom">
                        <div className="lang">
                            <Select
                                defaultValue="AZ"
                                style={{ width: 60 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'az', label: 'AZ' },
                                    { value: 'en', label: 'EN' },
                                    { value: 'ru', label: 'RU' },
                                ]}
                            />
                            <TfiWorld color='black' style={{ fontSize: '24px' }} />
                        </div>
                        <button><a href=""><span>Sign in</span><GoArrowUpRight style={{ fontSize: '24px' }} /></a></button>
                    </div>
                </div>}
        </div>
    )
}
export default Header