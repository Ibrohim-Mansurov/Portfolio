import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import "./page.css";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1 className="title  contact">
          <p className="slash">/</p>contacts
        </h1>
        <p className="text">
          You will have options to contact me on this page!
        </p>
        <div className="contact__info">
          <p className="contact__text">
            I love programming questions, if you have any questions or
            interesting suggestions, please contact me
          </p>
          <div className="contact__message">
            <h2 className="message__info">Message me here</h2>
            <br />
            <p className="email">
              <Image
                className="email__logo"
                src="/Email.svg"
                alt="Email"
                width={35}
                height={35}
              />
              ibrohimm618@gmail.com
            </p>
            <p className="telegram">
              <Image
                className="telegram__logo"
                src="/telegram.svg"
                alt="Telegram"
                width={30}
                height={30}
              />
              SvSvenom or https://t.me/SvSvenom
            </p>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="footer">
        <h2 className="footer__title">Front-end Developer</h2>
        <p className="copyright">Copyright © 2024 Ibrohim</p>
      </div>
    </div>
  );
};

export default Contact;
