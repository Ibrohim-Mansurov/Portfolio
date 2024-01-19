import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./page.css";

const Nav = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="nav__logo">
            <Image src="/Logo.svg" alt="logo" width={35} height={35} />
            <h1>Ibrohim</h1>
          </div>
          <div className="links">
            <Link className="link" href={"/"}>
              <p className="hashtag">#</p> Home
            </Link>
            <Link className="link" href={"/Projects"}>
              <p className="hashtag">#</p>Projects
            </Link>
            <Link className="link" href={"/contact"}>
              <p className="hashtag">#</p>Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
