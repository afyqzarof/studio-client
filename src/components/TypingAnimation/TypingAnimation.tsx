import { TypeAnimation } from "react-type-animation";
import "./TypingAnimation.scss";

const TypingAnimation = () => {
  return (
    <div>
      <h1 className="type-animation">
        a space for
        <TypeAnimation
          sequence={[
            "creatives",
            2000,
            "musicians",
            2000,
            "artists",
            2000,
            "writers",
            2000,
            "designers",
            2000,
            "jhdslgkhieur",
            700,
          ]}
          className="type-animation type-animation--block"
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        to articulate ideas
      </h1>
    </div>
  );
};

export default TypingAnimation;
