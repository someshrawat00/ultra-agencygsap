"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { animateTitle,animateImage,revealMenu } from './animations'
import styles from "./Hero.module.scss";
import Logo from "../Logo/page";

const Hero = () => {

  const heroRef = useRef(null);

  const timeline = useRef(gsap.timeline());

  useEffect(() => {
     const cxt = gsap.context(()=>{
     
        const tl = timeline.current; 
        tl.add(animateTitle()).add(animateImage(),0).add(revealMenu(),0);

     }, heroRef)

     return () => cxt.revert();

  },[])

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top} >
        <div data-menu-item data-hidden >
          <Logo/>
        </div>
        <span data-menu-item data-hidden>about</span>
        <span data-menu-item data-hidden>contact</span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>Ultra</span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>agency</span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
        
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;