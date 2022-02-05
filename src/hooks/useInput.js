import { useEffect, useState } from "react";
import { Easing } from "react-native";

export const useInput = (
  pathId,
  inputId,
  phId,
  onInput,
  onKeyUp,
  caption,
  setCaption
) => {
  const [code, setCode] = useState("");

  const changeInput = (e) => {
    onInput(e);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      onKeyUp();
    }
  };

  useEffect(() => {
    let start = null;
    const path = document.getElementById(`${pathId}`);
    path.setAttribute("d", `m 2 18 C 10 1 380 50 310 10`);
    const duration = 600;
    const easing = Easing.bezier(1, 1, 1, 1);
    const ph = document.getElementById(`${phId}`);
    const input = document.getElementById(`${inputId}`);
    input.addEventListener("focus", () => {
      if (input.value.length === 0) {
        ph.classList.remove("return");
        ph.classList.add("expand");
        setCode("With Country Code (E.g. +52)");
        if (phId === "NUMBER") {
          setCaption(true);
        }
        window.requestAnimationFrame(step);
      }
    });
    input.addEventListener("blur", () => {
      if (input.value.length === 0) {
        ph.classList.remove("expand");
        ph.classList.add("return");
        setCode("");
        setCaption(false);
        path.setAttribute("d", `m 2 18 C 10 1 380 50 310 10`);
      }
    });

    const animate = (inPct) => {
      const pct = easing(inPct);
      const newPct = 1 - 2 * Math.abs(0.5 - pct);
      const newBump = newPct * 25;
      const a = 10 + newBump * -1.09;
      const b = 1 + newBump * -1.39;
      const c = 380 + newBump * -3.32;
      const d = 50 + newBump * -0.13;
      const e = 310 + newBump * -0.17;
      const f = 10 + newBump * 0.46;
      path.setAttribute("d", `m 2 18 C ${a} ${b} ${c} ${d} ${e} ${f}`);
    };

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      let pct = progress / duration;
      if (pct > 1) pct = 1;
      animate(pct);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
      }
    }
  });

  return [changeInput, handleEnterKey, code];
};
