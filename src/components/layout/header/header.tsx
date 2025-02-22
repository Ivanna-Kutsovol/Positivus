'use client'

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Logo from "/public/logo.webp";
import MobileMenu from "../mobileMenu/mobileMenu";
import BurgerIcon from "/public/burgerMenu.webp";
import stl from "./header.module.scss"
import Button from "@/components/UI/button/button";
import Link from "next/link";

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
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
       } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
       }
    }, [isBurgerMenu]);

    const handleLinkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsBurgerMenu(false);
    };

    const tooggleMenu = () => {
        setIsBurgerMenu((prev) =>!prev);
    }
    
    return (
        <header className={stl.header} >
        {!isViewMobile && (
            <main className={stl.main} onClick={handleLinkClick}>
                <Link className={stl.logo} href="/">            
                    <Image src={Logo} alt="Positivus Logo" width={220} height={36} priority/>
                </Link>
                <nav className={stl.nav} onClick={tooggleMenu}>
                <ul className={stl.nav__list} >
                    <li className={stl.nav__item}>
                        <Link className={stl.nav__link} href="/about-us">About us</Link>
                    </li>
                    <li className={stl.nav__item}>
                        <Link className={stl.nav__link} href="/services">Services</Link>
                    </li>
                    <li className={stl.nav__item}>
                        <Link className={stl.nav__link} href="/use-cases">Use Cases</Link>
                    </li>
                    <li className={stl.nav__item}>
                        <Link className={stl.nav__link} href="/pricing">Pricing</Link>
                    </li>
                    <li className={stl.nav__item}>
                        <Link className={stl.nav__link} href="/blog">Blog</Link>
                    </li>
                    <Button type="submit" className={stl.button}>Request a quote</Button>
                </ul>
            </nav> 
            </main>
            
            )}
            {isViewMobile &&(
                <> 
                <Link className={stl.logo} href="/">            
                    <Image src={Logo} className={stl.logo} alt="Positivus Logo" width={110} height={18} priority/>
                </Link>
                <div className={stl.burger} onClick={tooggleMenu}>
                    <button><Image src={BurgerIcon} className={!isBurgerMenu ? stl.burgerMenu : stl.hidden} alt="Burger Menu" width={24} height={24}/></button>
                    <button className={isBurgerMenu ? stl.cross : stl.hidden}/>
                </div>
                {isBurgerMenu && 
                    <MobileMenu tooggleMenu={() => setTimeout(() => setIsBurgerMenu(false), 800)} />}
                </>
                
             )}
        </header>
    );
}