import React, { useRef, useEffect, useState } from "react";
import "./SubmitButton.css";
import anime from "animejs/lib/anime.es.js";
import $ from "jquery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


library.add(faCheck);


function SubmitButton() {
  const [showCheck, setShowCheck] = useState(false);

  function handleClick() {
    $("#button").addClass("onclic");

    setTimeout(function () {
      $("#button").removeClass("onclic");
      $("#button").addClass("validate");
      setShowCheck(true)
    }, 2250);

    setTimeout(function () {
      $("#button").removeClass("validate");
      setShowCheck(false);
    }, 4500);
  }

  return (
    <div className="container">
      <button id="button" onClick={handleClick}>
      {showCheck && <FontAwesomeIcon icon="check" className="check-icon" />}
      </button>
    </div>
  );
}

export default SubmitButton;
