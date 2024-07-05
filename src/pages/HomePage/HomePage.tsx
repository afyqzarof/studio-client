"use client";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import "./HomePage.scss";
// import logoBlack from "../../assets/logos/logo-black.svg";
// import logoBlue from "../../assets/logos/logo-blue.svg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const [isLogoBlack, setIsLogoBlack] = useState(true);

  const handleMouseEnter = () => {
    setIsLogoBlack(false);
  };

  const handleMouseLeave = () => {
    setIsLogoBlack(true);
  };

  return (
    <main className="homepage">
      <TypingAnimation />
      <div className="homepage__logo-container">
        <Link href="/login">
          <Image
            className="homepage__img"
            src={isLogoBlack ? "/logos/logo-black.svg" : "/logos/logo-blue.svg"}
            alt="studio logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            width={100}
            height={100}
          />
          <p
            className={
              isLogoBlack
                ? "homepage__descr homepage__descr--hidden"
                : "homepage__descr"
            }>
            (click to enter)
          </p>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
