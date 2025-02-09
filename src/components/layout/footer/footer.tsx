'use client'
import React from "react";
import stl from "./footer.module.scss"
import { useForm} from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logoFooter.webp";
import Button from "@/components/UI/button/button";
import Linkedin from "../../../../public/iconFooter/iconLinkedin.webp";
import Twitter from "../../../../public/iconFooter/iconTwitter.webp";
import Facebook from "../../../../public/iconFooter/iconFacebook.webp";

interface IForm{
    email: string;
}

const Footer = () => {
    const {register, handleSubmit , formState: { errors }, reset } = useForm<IForm>(
        {
            mode: 'onBlur',
            defaultValues: {
                email: "",
            },
        }
    );

    const onSubmit = (data: IForm) => {
        console.log(data);
        reset();
    }
    return (
        <footer className={stl.footer}>
            <div className={stl.footer__top}>
            <Link className={stl.footer__logo} href="/">            
                <Image src={Logo} width={180} height={29} alt="logo"/>
            </Link>
            <nav className={stl.footer__nav}>
                <ul className={stl.footer__list}>
                    <li className={stl.footer__item}>
                        <Link className={stl.footer__link} href="#">About us</Link>
                    </li>
                    <li className={stl.footer__item}>
                        <Link className={stl.footer__link} href="#">Services</Link>
                    </li>
                    <li className={stl.footer__item}>
                        <Link className={stl.footer__link} href="#">Use Cases</Link>
                    </li>
                    <li className={stl.footer__item}>
                        <Link className={stl.footer__link} href="#">Pricing</Link>
                    </li>
                    <li className={stl.footer__item}>
                        <Link className={stl.footer__link} href="#">Blog</Link>
                    </li>
                </ul>
            </nav>
            <div className={stl.footer__social}>
            <a href="https://www.linkedin.com/in/ivanna-kucovol" target="_blank" rel="noopener noreferrer">
                <Image src={Linkedin} width={30} height={30} alt="LinkedIn" />
            </a>    
                <Image src={Facebook} width={30} height={30} alt="facebook"/>
                <Image src={Twitter} width={30} height={30} alt="twitter"/>
            </div>
            </div>
            <div className={stl.footer__main}>
                <div className={stl.footer__contactUs}>
                    <h4 className={stl.footer__title}>Contact us</h4>
                    <div className={stl.footer__info}>
                        <p className={stl.footer__contact}>Email: info@positivus.com</p>
                        <p className={stl.footer__contact}>Phone: 555-567-8901</p>
                        <p className={stl.footer__contact}>Address: 1234 Main St
                        Moonstone City, Stardust State 12345</p>
                    </div>
                </div>

                <form className={stl.footer__form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    className={stl.footer__input}
                    placeholder="Email"
                    {...register("email", {
                    required: "Email is required",
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                },
            })}
            />
                {errors.email && <p className={stl.footer__errors}>{errors.email.message}</p>}
                <Button type="submit" className={stl.footer__button}>Subscribe to news</Button>
                </form>
            </div>
            <span className={stl.line} />
            <div className={stl.footer__bottom}>
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <Link className={stl.footer__link} href="#"> Privacy Policy </Link>
            </div>
        </footer>
    )
}

export default Footer;
