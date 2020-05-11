import React from "react"

import envelope from "../images/envelope.svg"

const Contact = () => {

  const changeNameLabel = e => {
    const name = document.getElementById("name")
    if (e.target.value !== "") {
      name.classList.remove("inactive")
      name.classList.add("active")
    } else {
      name.classList.remove("active")
      name.classList.add("inactive")
    }
  }

  const changeEmailLabel = e => {
    const email = document.getElementById("email")
    if (e.target.value !== "") {
      email.classList.remove("inactive")
      email.classList.add("active")
    } else {
      email.classList.remove("active")
      email.classList.add("inactive")
    }
  }

  const changeMessageLabel = e => {
    const message = document.getElementById("message")
    if (e.target.value !== "") {
      message.classList.remove("inactive")
      message.classList.add("active")
    } else {
      message.classList.remove("active")
      message.classList.add("inactive")
    }
  }

  return (
    <section className="contact" id="nav-contact">
      <h1 className="contact__title">kapcsolat</h1>

      {/* <!-- ? FORM ? --> */}
      <div className="contact__box">
        <form action="" className="contact-wrapper">
          <div className="contact__box--form">
            {/* <!-- <div className="contact__form--row"> --> */}
            <label
              htmlFor="name"
              className="contact__box--form-label inactive"
              id="name"
            >
              Név
            </label>
            <input
              onChange={changeNameLabel}
              className="contact__box--form-input"
              type="text"
              placeholder="Név*"
              name="name"
              required
            />
            {/* <!-- </div> --> */}
            <label
              htmlFor="email"
              className="contact__box--form-label inactive"
              id="email"
            >
              Email
            </label>
            <input
              onChange={changeEmailLabel}
              className="contact__box--form-input"
              type="email"
              placeholder="Email*"
              name="email"
              required
            />
            <label
              htmlFor="message"
              className="contact__box--form-label inactive"
              id="message"
            >
              Üzenet
            </label>
            <textarea
              onChange={changeMessageLabel}
              className="contact__box--form-input"
              type="text"
              placeholder="Üzenet*"
              name="message"
              required
            ></textarea>
          </div>
          <button className="contact__box--form-btn" type="submit">
            Küldés
          </button>
        </form>
      </div>
      {/* <!-- ? FORM ? --> */}

      <div className="contact__info">
        <h2 className="contact__info--title">
          {" "}
          <img
            alt="envelope"
            src={envelope}
            className="contact__info--icon"
          />{" "}
          Email
        </h2>
        <p className="contact__info--text">erdawood20@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact
