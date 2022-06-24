import React, { useRef, useEffect } from "react";
function animate() {
  const ref = useRef();

  useEffect(() => {
    function animate(animationClass, animatedObj) {
      const obj = document.getElementsByClassName(animatedObj)[0];
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(obj);
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            if (obj) {
              obj.classList.add(animationClass);
              obj.classList.remove("hidden");
            } else {
              entry.target.classList.add(animationClass);
            }
          }
        });
      });
    }
    animate("leftCurtain", "blueTriangle").observe(
      document.querySelector(".curtainOpener")
    );
    animate("rightCurtain", "greenTriangle").observe(
      document.querySelector(".curtainOpener")
    );
    animate("rollToRight").observe(document.querySelector("#Layer_1"));
    animate("bounceTop").observe(document.querySelector("#Layer_2"));
    animate("positionAbsolute").observe(
      document.querySelector(".column-text .hiddenSvg")
    );
    animate("rollToLeft").observe(document.querySelector("#Layer_3"));
    animate("fadeToWhite", "design").observe(
      document.querySelector(".curtainOpener")
    );
    animate("fadeToWhite", "funktion").observe(
      document.querySelector(".curtainOpener")
    );
    animate("fadeToWhite", "mini").observe(
      document.querySelector(".curtainOpener")
    );
    animate("fadeSvgBackground").observe(document.querySelector(".circle"));
  }, [ref]);
  return null;
}

export default animate;
