'use client'
import React from "react"
import stl from "./mobileMenu.module.scss"


const MobileMenu = () => {

    return (
        <main className={stl.main}>
            <nav className={stl.main__nav}>
            <ul className={stl.main__list}>
                <li className={stl.main__item}>
                    <a className={stl.main__link} href="#">About us</a>
                </li>
                <li className={stl.main__item}>
                    <a className={stl.main__link} href="#">Services</a>
                </li>
                <li className={stl.main__item}>
                    <a className={stl.main__link} href="#">Use Cases</a>
                </li>
                <li className={stl.main__item}>
                    <a className={stl.main__link} href="#">Pricing</a>
                </li>
                <li className={stl.main__item}>
                    <a className={stl.main__link} href="#">Blog</a>
                </li>
                    <button className={stl.button}>Request a quote</button>
            </ul>
        </nav> 
        </main>     
    )} 
        
    


export default MobileMenu;