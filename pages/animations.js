import React, { useRef, useEffect } from "react";
function animate() {
  const ref = useRef();
  useEffect(() => {
    function animate(animationClass) {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add(animationClass);
          }
        });
      });
    }
    animate("leftCurtain").observe(document.querySelector(".blueTriangle"));
    animate("rightCurtain").observe(document.querySelector(".greenTriangle"));
    animate("rollToRight").observe(document.querySelector("#Layer_1"));
    animate("bounceTop").observe(document.querySelector("#Layer_2"));
    animate("positionAbsolute").observe(
      document.querySelector(".column-text .hiddenSvg")
    );
    animate("rollToLeft").observe(document.querySelector("#Layer_3"));
    animate("fadeToWhite").observe(document.querySelector(".design"));
    animate("fadeToWhite").observe(document.querySelector(".funktion"));
    animate("fadeToWhite").observe(document.querySelector(".mini"));
    animate("fadeSvgBackground").observe(document.querySelector(".circle"));
  }, [ref]);
  return null;
}

export default animate;
