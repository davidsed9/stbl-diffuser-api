import React, { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./SubmitButton.css";

function SubmitButton() {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const progressBarRef = useRef(null);
  const checkRef = useRef(null);

  useEffect(() => {
    const basicTimeline = anime.timeline({
      autoplay: false,
    });

    const pathEls = checkRef.current.querySelectorAll(".check");
    for (var i = 0; i < pathEls.length; i++) {
      const pathEl = pathEls[i];
      const offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
    }

    basicTimeline
      .add({
        targets: textRef.current,
        duration: 1,
        opacity: 0,
      })
      .add(
        {
          targets: buttonRef.current,
          duration: 1300,
          height: 10,
          width: 300,
          backgroundColor: "#2B2D2F",
          border: "0",
          borderRadius: 100,
        },
        "-=1"
      )
      .add(
        {
          targets: progressBarRef.current,
          duration: 2000,
          width: 300,
          easing: "linear",
        },
        "-=1300"
      )
      .add(
        {
          targets: buttonRef.current,
          width: 0,
          duration: 1,
        },
        "-=2000"
      )
      .add(
        {
          targets: progressBarRef.current,
          width: 80,
          height: 80,
          delay: 500,
          duration: 750,
          borderRadius: 80,
          backgroundColor: "#71DFBE",
        },
        "-=1"
      )
      .add(
        {
          targets: pathEls,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 200,
          easing: "easeInOutSine",
        },
        "-=500"
      );

    buttonRef.current.addEventListener("click", () => {
      basicTimeline.play();
    });

    textRef.current.addEventListener("click", () => {
      basicTimeline.play();
    });
  }, []);

  return (
    <main>
      <div className="button" ref={buttonRef}>
        <div className="text" ref={textRef}>
          Submit
        </div>
      </div>
      <div className="progress-bar" ref={progressBarRef}></div>
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 25 30"
        style={{ enableBackground: "new 0 0 25 30" }}
        ref={checkRef}
      >
        <path className="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
      </svg>
    </main>
  );
}

export default SubmitButton;
