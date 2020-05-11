import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import arrow from "../images/arrow.svg"

const About = () => {
  const profileImg = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="about">
      <h1 className="about__title" id="nav-about">
        rólunk
      </h1>
      <p className="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At non dui,
        vitae, laoreet dui. Sit sed commodo turpis venenatis tempor eget risus,
        est, semper. Venenatis, turpis ornare congue pellentesque. Dignissim
        placerat auctor aliquam, faucibus et. Pretium amet cursus in mauris
        malesuada. Nibh orci nisl nulla proin mattis.
      </p>
      <button className="about__btn">
        Tudj meg többet{" "}
        <span>
          <img className="about__btn--arrow arrow" src={arrow} />
        </span>
      </button>
      <Img
        className="about__img"
        alt="Erda Wood"
        fluid={profileImg.profile.childImageSharp.fluid}
      />
    </section>
  )
}

export default About
