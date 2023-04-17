import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Reactjs",
          "Spring Boot",
          "MySQL",
          "MongoDB",
          "AWS",
          "Java",
          "Python",
          
          "",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
