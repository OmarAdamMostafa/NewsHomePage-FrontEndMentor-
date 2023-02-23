import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Sidebar from '../assets/images/icon-menu.svg'
import SidebarClose from '../assets/images/icon-menu-close.svg'
import useMediaQuery from '../utils/useMediaQuery'

const Navbar = () => {
    const flexBetween = 'flex justify-between items-center'
    const links = [
        {id: 1, text: 'Home'},
        {id: 2, text: 'New'},
        {id: 3, text: 'Popular'},
        {id: 4, text: 'Trending'},
        {id: 5, text: 'Categories'},
    ]
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)")
    const [isMenuToggled, setIsMenuToggled] = useState(false)

    return (
        <nav>
            <div className={`${flexBetween} w-full top-0 z-30 pt-24 pb-5`}>
                <div className={`${flexBetween} mx-auto w-[90%] lg:w-4/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LOGO */}
                        <img alt='logo' src={Logo}/> 
                        {/* NAVBAR */}
                        {
                            isAboveMediumScreens ? (
                                <div className={`${flexBetween} gap-16`}>
                                    {
                                        links.map((link)=>(
                                            <button key={link.id} className="text-[#5D5F79] hover:text-hoverRed">
                                                {link.text}
                                            </button>
                                        ))
                                    }
                                </div>
                            ) : (
                                <button onClick={()=>setIsMenuToggled(true)}>
                                    <img alt='sidebar' src={Sidebar} />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            
            {
                !isAboveMediumScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl'>
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt='close-sidebar' src={SidebarClose} className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center gap-10 text-2xl">
                            {
                                links.map((link)=>(
                                    <button key={link.id} className="text-[#5D5F79] hover:text-hoverRed">
                                        {link.text}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar