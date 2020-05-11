import React from "react"

import logo from "../images/footerLogo.svg"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"

const Footer = () => (
  <footer className="footer">
    <img alt="logo" src={logo} className="footer__logo" />
    <div className="footer__divider"></div>
    <div className="footer__social">
      <img alt="facebook" src={facebook} className="footer__social--facebook" />
      <img
        alt="instagram"
        src={instagram}
        className="footer__social--instagram"
      />
    </div>
  </footer>
)

export default Footer
