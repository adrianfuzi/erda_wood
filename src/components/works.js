import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import arrow from "../images/arrow.svg"

const Works = () => {
  const workImages = useStaticQuery(graphql`
    query {
      work1: file(relativePath: { eq: "coffee.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      work2: file(relativePath: { eq: "coffee2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      work3: file(relativePath: { eq: "tray.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="works">
      <h1 className="works__title" id="nav-works">
        termékek
      </h1>
      <div className="works__box">
        <div className="works__box--card">
          <Img
            className="works__box--card-img"
            fluid={workImages.work1.childImageSharp.fluid}
          />
          <h2 className="works__box--card-title">
            Vörösfenyő kávékapszula tartó
          </h2>
          <h3 className="works__box--card-price">9 000 HUF</h3>
          <button className="works__box--card-btn">Kattints a termékhez</button>
        </div>
        <div className="works__box--card">
          <Img
            className="works__box--card-img"
            fluid={workImages.work2.childImageSharp.fluid}
          />
          <h2 className="works__box--card-title">
            Barnatölgy kávékapszula tartó
          </h2>
          <h3 className="works__box--card-price">10 000 HUF</h3>
          <button className="works__box--card-btn">Kattints a termékhez</button>
        </div>
        <div className="works__box--card">
          <Img
            className="works__box--card-img"
            fluid={workImages.work3.childImageSharp.fluid}
          />
          <h2 className="works__box--card-title">Csíkos tálca</h2>
          <h3 className="works__box--card-price">12 000 HUF</h3>
          <button className="works__box--card-btn">Kattints a termékhez</button>
        </div>
      </div>
      <button className="works__btn">
        Tovább{" "}
        <span>
          <img alt="" src={arrow} className="works__btn--arrow arrow" />
        </span>
      </button>
    </section>
  )
}

export default Works