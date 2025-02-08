"use client"

import React from "react";
import stl from "./contactUs.module.scss";
import { useForm } from "react-hook-form";
import Image from "next/image";
import illustration from "../../../public/illustrationContactUS.webp";
import Button from "@/components/UI/button/button";

export interface IForm {
  name: string;
  email: string;
  message: string;
  contact_reason: string; 
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onBlur',
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contact_reason: "",
    },
  });

  const onSubmit = (data: IForm) => console.log(data);

  return (
    <section className={stl.section}>
      <section className={stl.main__text}>
        <h2 className={stl.main__topic}>Contact Us</h2>
        <p className={stl.main__descriptionText}>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </section>
      <section className={stl.form}>
        <form className={stl.form__container} onSubmit={handleSubmit(onSubmit)}>
        <div className={stl.form__radio}>
        <label className={stl.form__labelRadio}>
          <input
            className={stl.form__inputRatio}
            type="radio"
            value="hi"
            {...register("contact_reason", { required: "Please select a reason" })}
          />
          <span className={stl.form__customRadio}/>
          <span>Say Hi</span>
          </label>

          <label className={stl.form__labelRadio}>
          <input
            className={stl.form__inputRatio}
            type="radio"
            value="quote"
            {...register("contact_reason")}
          />
          <span className={stl.form__customRadio}/>
            <span>Get a Quote</span>
          </label>
          {errors.contact_reason && <p className={stl.form__errors}>{errors.contact_reason.message}</p>}
        </div>
        
        <div className={stl.form__inputs}>
          <label className={stl.form__label} htmlFor="name">
            <span className={stl.form__topic} >Name</span>
          <input
            type="text"
            className={stl.form__input}
            placeholder="Name"
            {...register("name", {
              pattern: {
                value: /^[A-Za-z]{1,19}$/,
                message: "Invalid name format",
              },
            })}
          /> 
          {errors.name && <p className={stl.form__errors}>{errors.name.message}</p>}
          </label>
          
            <label className={stl.form__label} htmlFor="email">
                <span className={stl.form__topic} >Email<abbr>*</abbr></span>
            <input
            type="email"
            className={stl.form__input}
            placeholder="Email"
            {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email format",
                },
            })}
            />
            {errors.email && <p className={stl.form__errors}>{errors.email.message}</p>}
            </label>

            <label className={stl.form__label} htmlFor="message">
                <span className={stl.form__topic} >Message <abbr>*</abbr></span>
            <textarea
            placeholder="Message"
            className={`${stl.form__input} ${stl.form__message}`}
            {...register("message", {
                required: "Message is required",
                minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
                },
            })}
            ></textarea>
                {errors.message && <p className={stl.form__errors}>{errors.message.message}</p>}            
            </label>
        </div>
            <Button type="submit" className={stl.form__button}>Send</Button>
        </form>
        <Image
          src={illustration}
          alt="illustration"
          className={stl.form__illustration}
          width={370}
          height={650}
          priority
        />
      </section>
    </section>
  );
};

export default ContactUs;