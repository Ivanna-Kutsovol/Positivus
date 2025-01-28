'use client'

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Logo from "/public/logo.webp";
import MobileMenu from "../mobileMenu/mobileMenu";
import BurgerIcon from "/public/burgerMenu.webp";
import stl from "./header.module.scss"
import Button from "@/components/UI/button/button";

export default function Header() {
    const [isViewMobile, setIsViewMobile] = useState(false);
    const [isBurgerMenu, setIsBurgerMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsViewMobile(window.innerWidth < 800);
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
       if(isBurgerMenu) {
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
       } else {
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
       }
       return () => {
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
       }
    }, [isBurgerMenu]);


    const tooggleMenu = () => {
        setIsBurgerMenu((prev) =>!prev);
    }
    
    return (
        <header className={stl.header} onClick={tooggleMenu}>
        {!isViewMobile && (
            <main className={stl.main}>
                <a className={stl.logo} href="/">            
                    <Image src={Logo} className={stl.logo} alt="Positivus Logo" width={220} height={36} priority/>
                </a>
                <nav className={stl.nav}>
                <ul className={stl.nav__list}>
                    <li className={stl.nav__item}>
                        <a className={stl.nav__link} href="#">About us</a>
                    </li>
                    <li className={stl.nav__item}>
                        <a className={stl.nav__link} href="#">Services</a>
                    </li>
                    <li className={stl.nav__item}>
                        <a className={stl.nav__link} href="#">Use Cases</a>
                    </li>
                    <li className={stl.nav__item}>
                        <a className={stl.nav__link} href="#">Pricing</a>
                    </li>
                    <li className={stl.nav__item}>
                        <a className={stl.nav__link} href="#">Blog</a>
                    </li>
                    <Button type="submit" className={stl.button}>Request a quote</Button>
                </ul>
            </nav> 
            </main>
            
            )}
            {isViewMobile &&(
                <> 
                <a className={stl.logo} href="/">            
                    <Image src={Logo} className={stl.logo} alt="Positivus Logo" width={110} height={18} priority/>
                </a>
                <div className={stl.burger}>
                    <button><Image src={BurgerIcon} className={!isBurgerMenu ? stl.burgerMenu : stl.hidden} alt="Burger Menu" width={24} height={24}/></button>
                    <button className={isBurgerMenu ? stl.cross : stl.hidden}/>
                </div>
                {isBurgerMenu && <MobileMenu/>}
                </>
                
             )}
        </header>
    );
}