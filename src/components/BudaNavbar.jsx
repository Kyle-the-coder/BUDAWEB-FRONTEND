import { Link } from 'react-router-dom'

import navImg from "../assets/images/budaLogo.png"
import menuButton from '../assets/images/menu.png'
import closeButton from '../assets/images/close.png'
import { useState } from 'react'
import "../styles/cardHover.css"



const BudaNavbar = () => {
    const [open, setOpen] = useState(false)
    const [highlightUrl, setHighlightUrl] = useState("")
    const [openMore, setOpenMore] = useState(false)
    const [highlightClick, setHighLightClick] = useState(false)
    let navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/ap" },
        { name: "Summer Info", link: "/sp" },
        { name: "Session Info", link: "/wsp" },
        { name: "Buda Crew", link: "/bcp" },
    ]
    let moreLinks = [
        { name: "Gallery", link: "/gp" },
        { name: "Rates", link: "/rp" },
        { name: "Buda Crew Member", link: "/budacrewmember" },
        {name: "Contact", link: "#contactSection"}
    ]

    const handleHighlightUrl = (url) => {
        setHighlightUrl(url)
        if (url == "/gp" || url == "/rp" || url == "/budacrewmember") {
            setHighLightClick(true)
        } else {
            setHighLightClick(false)
        }

    }

    return (
        <section className=' flex flex-col w-full md:p-1  bg-white border-b-2 border-black '>
            <div className='md:mx-auto h-full ml-2 mb-1 z-[5] bg-white'>
                <img className='w-20  xl:w-44 h-15 rounded ' src={navImg} />
            </div>
            <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden z-[11]'>
                <img className='w-5 z-[20]' onClick={()=>setOpenMore(false)} src={open ? closeButton : menuButton}></img>
            </div>
            <div>
                <ul className={`md:flex md:items-center md:pb-0 h-[370px] sm:h-[60px] rounded  bg-white justify-evenly absolute md:static md:z-auto z-[3] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-480px]'}`}>
                    {navLinks.map((link, i) => (
                        <li onClick={() => handleHighlightUrl(link.link)} key={i} className=" text-x1 md:text-lg xl:text-2xl md:my-0 my-5 relative">
                            <Link to={link.link} className={`welcome ${highlightUrl == link.link ? "bg-slate-900 text-pink-300" : ""} relative mb-2 font-medium rounded p-1 text-black hover:bg-slate-900 hover:text-pink-300 transition-all duration-700`} onClick={() => {setOpen(!open); setOpenMore(false)}}>{link.name}</Link>
                        </li>
                    ))}
                    <li >
                        <a onClick={() => { setOpenMore(!openMore) }} className={`welcome ${highlightClick ? "bg-slate-900 text-pink-300" : ""} cursor-pointer md:text-lg xl:text-2xl relative scroll-smooth mb-2 font-medium rounded p-1 text-black hover:bg-slate-900 hover:text-pink-300 transition-all duration-700`}>More</a>
                    </li>
                </ul>
                <div className="w-full flex justify-end transition-all duration-700 relative">
                    <ul className={`w-44 ${openMore ? "bg-white" : " "} flex flex-col items-center p-2 absolute transition-all duration-300 top-3 z-[999]`}>
                        {openMore && moreLinks.map((link, i) => (
                            <li key={i} onClick={() => handleHighlightUrl(link.link)} className='relative mb  w-48 ml-2  p-3 top-0 transition-all duration-700 z-[999]'>
                            {link.name == "Contact" ? <a className={`welcome ${highlightUrl == link.link ? "bg-slate-900 text-pink-300" : ""} relative mb-2 rounded p-1 text-black hover:bg-slate-900 hover:text-pink-300 transition-all duration-700`} href={link.link}>{link.name}</a>
                            :
                                <Link className={`welcome ${highlightUrl == link.link ? "bg-slate-900 text-pink-300" : ""} relative mb-2 rounded p-1 text-black hover:bg-slate-900 hover:text-pink-300 transition-all duration-700`} onClick={() => { setOpen(!open); setOpenMore(!openMore); setHighLightClick(true) }} to={link.link}>{link.name}</Link>
                            }
                            </li>
                        
                        
                        ))}
                    </ul>
                </div>

            </div>

        </section>


    )
}

export default BudaNavbar;