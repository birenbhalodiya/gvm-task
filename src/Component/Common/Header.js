"use client"
import { useEffect, useState } from "react";
import { Logo } from "../../Helper/Constants";
import Button from "./Button";

export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [click]);
    return (
        <div className={`top-0 z-50 w-full text-white   ${scrolled ? 'shadow-lg bg-transparent fixed backdrop-blur-3xl backdrop-brightness-75' : 'fixed bg-transparent'}`}>
            <div className='z-20 flex items-center justify-between gap-5 py-5 container m-auto'>
                <div className='cursor-pointer'>
                    <div>
                        <img src={Logo} alt="logo" className="md:w-[90px] w-28 h-auto" />
                    </div>
                </div>
                <div className={`${click ? "nav-options active" : "nav-options"} lg:flex items-center hidden nav-options xl:text-[18px] text-base font-normal xl:gap-7 lg:gap-5 gap-0`}>
                    <div onClick={() => setClick(false)}><div className='relative flex justify-between hover:text-bg cursor-pointer font-semibold'>Explore</div></div>
                    <div onClick={() => setClick(false)}><div className='relative flex justify-between hover:text-bg cursor-pointer font-semibold'>Solutions</div></div>
                    <div onClick={() => setClick(false)}><div className='relative flex justify-between hover:text-bg cursor-pointer font-semibold'>Articles</div></div>
                    <div onClick={() => setClick(false)}><div className='relative flex justify-between hover:text-bg cursor-pointer font-semibold'>Sign In</div></div>
                    <div className="lg:mt-0 mt-2">
                        <Button buttonName={'Join Now'} className='border-2 border-white text-white rounded-[5px]' />
                    </div>
                </div>
                <div className="mobile_header_menu lg:hidden block cursor-pointer" onClick={handleClick}>
                    {click ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#ffffff" d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z" /></svg>
                    )}
                </div>
            </div>
        </div>
    )
}