import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

import logo from "../../images/logo.svg"

const HeaderSticky = () => {
  if (typeof window !== `undefined`) {
    window.onscroll = function () {
      scrollFunction()
    }
}

  const scrollFunction = () => {
    let stickyHeader = ".header__sticky"

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.querySelector(stickyHeader).style.top = "0"
    } else {
      document.querySelector(stickyHeader).style.top = "-13rem"
    }
  }

  const checkWidth = () => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth <= 860) {
        return -70
      } else {
        return -100
      }
    }
  }

  const checkWidthContact = () => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth <= 860) {
        return -50
      } else {
        return -80
      }
    }
  }

  return (
    <header className="header header__sticky">
      <div className="header__logo" onClick={() => window.location.reload()}>
        <img
          alt="logo"
          src={logo}
          className="header__logo--img header__sticky--logo"
        />
      </div>
      <ul className="header__nav header__sticky--nav">
        <li className="header__nav--item">
          <Link
            activeClass="active"
            to="nav-works"
            spy={true}
            smooth={true}
            offset={checkWidth()}
            duration={500}
          >
            termékek
          </Link>
        </li>
        <li className="header__nav--item">
          <Link
            activeClass="active"
            to="nav-about"
            spy={true}
            smooth={true}
            offset={checkWidth()}
            duration={500}
          >
            rólunk
          </Link>
        </li>
        <li className="header__nav--item">
          <Link
            activeClass="active"
            to="nav-contact"
            spy={true}
            smooth={true}
            offset={checkWidthContact()}
            duration={500}
          >
            kapcsolat
          </Link>
        </li>
        {/* <li className="header__nav--item">termékek</li>
                <li className="header__nav--item">rólunk</li>
                <li className="header__nav--item">kapcsolat</li> */}
      </ul>
    </header>
  )
}

export default HeaderSticky
