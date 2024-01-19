import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import "./page.css";

const Projects = () => {
  return (
    <div>
      <Nav />

      <div className="container">
        <h1 className="title projects">
          <p className="slash">/</p>projects
        </h1>
        <p className="projects__text">List of my projects</p>
        <h2 className="title2">
          <p className="hashtag2">#</p>
          list of sites
        </h2>
        <div className="sites__list">
          <div className="list">
            <Image
              className="site__img"
              src="/Ebay.png"
              alt="site"
              width={330}
              height={201}
            />
            <h2 className="site__title"></h2>
            <h3 className="site__name">Ebay</h3>
            <p className="site__text">A site that sells products</p>
            <a
              href="https://ibrohim-imtihon-5.netlify.app/"
              className="site__link"
              target="_blank"
            >
              Open a site
            </a>
          </div>
          <div className="list">
            <Image
              className="site__img"
              src="/Ibrohimm.png"
              alt="site"
              width={330}
              height={201}
            />
            <h2 className="site__title"></h2>
            <h3 className="site__name">Ibrohim</h3>
            <p className="site__text">
              This site is for product creation and viewing
            </p>
            <a
              href="https://incredible-melba-6e090e.netlify.app/"
              className="site__link"
              target="_blank"
            >
              Open a site
            </a>
          </div>
          <div className="list">
            <Image
              className="site__img"
              src="/td.png"
              alt="site"
              width={330}
              height={201}
            />
            <h2 className="site__title"></h2>
            <h3 className="site__name">TODO LIST</h3>
            <p className="site__text">Now you can write a to-do list</p>
            <a
              href="https://ibrohim-mansurov.github.io/TODO-LIST/"
              className="site__link"
              target="_blank"
            >
              Open a site
            </a>
          </div>
        </div>
        <div className="projects__list">
          <h2 className="title">
            <p className="hashtag2">#</p>projects
          </h2>
          <div className="project__list">
            <div className="projects2">
              <p className="project__wrapper">Java script </p>
              <div className="project__info">
                <h3 className="project__name">Weather</h3>
                <p className="project__text">
                  You now have a great looking and functional weather site
                </p>
                <a
                  href="https://ibrohim-mansurov.github.io/WEATHER-PROJECT/"
                  className="site__link"
                  target="_blank"
                >
                  Open a product
                </a>
              </div>
            </div>
            <div className="projects2">
              <p className="project__wrapper">Java script </p>
              <div className="project__info">
                <h3 className="project__name">Piano</h3>
                <p className="project__text">Just a piano</p>
                <a
                  href="https://ibrohim-mansurov.github.io/piono/"
                  className="site__link"
                  target="_blank"
                >
                  Open a product
                </a>
              </div>
            </div>
            <div className="projects2">
              <p className="project__wrapper">Java script </p>
              <div className="project__info">
                <h3 className="project__name">Calculator</h3>
                <p className="project__text">
                  Now you can solve examples easily
                </p>
                <a
                  href="https://ibrohim-mansurov.github.io/Calculatr/"
                  className="site__link"
                  target="_blank"
                >
                  Open a product
                </a>
              </div>
            </div>
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

export default Projects;
