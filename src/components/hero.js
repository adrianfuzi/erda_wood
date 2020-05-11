import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

import Header from "./Header/header"
import HeaderSticky from "./Header/header_sticky"
import scrollImg from "../images/scroll.svg"

const Hero = () => {
  const checkWidth = () => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth <= 860) {
        return -70
      } else {
        return -100
      }
    }
  }

  return (
    <section className="hero">
      <Header />
      <HeaderSticky />
      <div className="hero__box">
        <h2 className="hero__box--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed
          ornare urna donec fermentum pharetra adipiscing.
        </h2>
        <Link
          className="hero__box--btn"
          to="nav-works"
          spy={true}
          smooth={true}
          offset={checkWidth()}
          duration={500}
        >
          vásárlás
        </Link>
        <img className="hero__box--scroll" src={scrollImg}></img>
      </div>
    </section>
  )
}

export default Hero
