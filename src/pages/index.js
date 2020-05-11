import React from "react"
import "../styles/main.scss"

import Hero from "../components/hero"
import Works from "../components/works"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="main">
    <Hero />
    <Works />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
