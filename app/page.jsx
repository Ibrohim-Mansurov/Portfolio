import Nav from "./components/Nav";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <Nav />
      <div className="container">
        <div className="about">
          <div className="info">
            <h2 className="title">
              <p className="slash">/</p>about-me
            </h2>
            <p className="text">Who am i?</p>
            <h3 className="my-info">
              Hello, I'm Ibrohim!
              <br />
              <br />I am a frontend programmer who learned programming from
              Najot Education in Uzbekistan.I can develop responsive websites
              from scratch and raise them into modern user-friendly web
              experiences.
              <br />
              <br />I try to create sites with great and great design.I care
              that the site i create works quickly and without problems
            </h3>
          </div>
          <div className="img">
            <Image
              className="me"
              src="/me.png"
              alt="image"
              width={339}
              height={507}
              priority
            />
          </div>
        </div>
        <div className="skills">
          <h2 className="title">
            <p className="hashtag2">#</p>skills
          </h2>
          <div className="skills__carts">
            <div className="skills__cart">
              <h4 className="skills__title">Languages</h4>
              <p className="skills__text">JavaScript</p>
            </div>
            <div className="skills__cart">
              <h4 className="skills__title">Other</h4>
              <span className="skills__text">HTML</span>
              <span className="skills__text">CSS</span>
              <span className="skills__text">SCSS</span>
            </div>
            <div className="skills__cart">
              <h4 className="skills__title">Tools</h4>
              <span className="skills__text">Git</span>
              <span className="skills__text">Github</span>
              <span className="skills__text">VSCode</span>
              <p className="skills__text">Postman</p>
            </div>
            <div className="skills__cart">
              <h4 className="skills__title">Frameworks</h4>
              <span className="skills__text">React</span>
              <span className="skills__text">Next.js</span>
            </div>
            <div className="skills__cart">
              <h4 className="skills__title">Libraries</h4>
              <span className="skills__text">Tailwind</span>
              <span className="skills__text">Bootstrap</span>
              <p className="skills__text">MaterialUI</p>
            </div>
          </div>
        </div>
        <div className="my__fun__facts">
          <h2 className="title">
            <p className="hashtag2">#</p>my-fun-facts
          </h2>
          <div className="item">
            <div className="facts">
              <p className="fact">I like winter more than summer</p>
              <p className="fact">I meet my friends often</p>
              <p className="fact">I like pilaf</p>
              <p className="fact">My Favorite Movies: The Boy's Word, Creed</p>
              <p className="fact">I am still in school</p>
            </div>
            <div className="img">
              <Image
                className="argument"
                src="/nuqta.svg"
                alt="image"
                width={178}
                height={169}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="footer">
        <h2 className="footer__title">Front-end Developer</h2>
        <p className="copyright">Copyright © 2024 Ibrohim</p>
      </div>
      <div className="rezume">
        <a
          className="rezume__link"
          href="https://drive.google.com/uc?export=download&id=1ywHs5vT1zmVngONA9th4ev5FYvRjWy1A"
        >
          Reazume
          <Image
            className="rezume__img"
            src="/dow.png"
            alt="dowland"
            width={80}
            height={50}
          />
        </a>
      </div>
    </main>
  );
}
