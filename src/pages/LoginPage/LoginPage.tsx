"use client";
import "./LoginPage.scss";
import LoginBox from "../../components/LoginBox/LoginBox";
import { useEffect, useState } from "react";
import logo from "../../assets/logos/logo-small.svg";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Image from "next/image";

const LoginPage = () => {
  const [isLoginShown, setIsLoginShown] = useState(false);
  const showLogin = () => {
    setIsLoginShown(true);
  };
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  });

  return (
    <>
      <main
        className={isLoginShown ? "login-main login-main--gray" : "login-main"}>
        <nav className="login-nav">
          <h1 className="login-nav__title">
            <span className="login-nav__span">welcome</span>
            to studio.
          </h1>
          <div className="login-nav__btn-container">
            <button className="login-nav__btn" onClick={showLogin}>
              log in
            </button>
            <a href="#about" className="login-nav__btn">
              i want to explore first
            </a>
          </div>
        </nav>
        <section
          data-testid={"login-box"}
          className={isLoginShown ? "login-box login-box--shown" : "login-box"}>
          <LoginBox />
        </section>
      </main>
      <section className="info">
        <div className="info__left">
          <article>
            <h2 id="about" className="info__title">
              about
            </h2>
            <p className="info__paragraph">
              the intention behind studio is to create space for unrestricted
              ideation and creative processes.
            </p>
          </article>
          <article>
            <h2 id="about" className="info__title">
              project boards
            </h2>
            <p className="info__paragraph">
              project boards can be used for storing references from various
              platforms and sources, as well as developing creative ideas.
            </p>
            <p className="info__paragraph">
              boards can be individual or private, but you can use the
              'collaborate' feature to work on a board with others.
            </p>
            <p className="info__paragraph">
              boards can be published for others to view, as well.
            </p>
            <div className="info__link-container">
              <Link href="/demo/dashboard" className="info__link">
                view example
              </Link>
            </div>
          </article>
        </div>
        <div className="info__right">
          <article>
            <h2 id="about" className="info__title">
              explore page
            </h2>
            <p className="info__paragraph">
              use the explore page to see what other creatives are doing. this
              is great if you're looking to collaborate, or if you feel like you
              need some inspiration
            </p>
            <div className="info__link-container">
              <Link href="/demo/explore" className="info__link">
                explore a bit
              </Link>
            </div>
          </article>
        </div>
      </section>
      <footer className="login-footer">
        <p className="login-footer__name">studio</p>
        <Image
          src="/logos/logo-small.svg"
          alt="studio logo"
          width={100}
          height={100}
        />
      </footer>
    </>
  );
};

export default LoginPage;
