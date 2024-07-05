import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import "./HomePage.scss";
import logoBlack from "../../assets/logos/logo-black.svg";
import logoBlue from "../../assets/logos/logo-blue.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingModal from "../../components/LoadingModal/LoadingModal";

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
        <Link to="/login">
          <img
            className="homepage__img"
            src={isLogoBlack ? logoBlack : logoBlue}
            alt="studio logo"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
      <LoadingModal modalIsOpen={true} closeModal={() => {}} />
    </main>
  );
};

export default HomePage;
