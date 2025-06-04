import React, { use, useCallback } from "react";
import { useState } from "react";
// chacking are we allow to click
let useClickMiddleware = (callback, delay = 2000) => {
  let [lastClickTime, setLastClickTime] = useState(0);
  return () => {
    let currentTime = Date.now();
    if (currentTime - lastClickTime < delay) {
      console.log("Button Clicked Blocked by middleware");
      return;
    }
    setLastClickTime(currentTime);
    callback();
  };
};
function ClickButton() {
  function handleClick() {
    console.log("Button Clicked");
  }
  let throttledClick = useClickMiddleware(handleClick);
  return (
    <>
      <button onClick={throttledClick}>Click ME</button>
    </>
  );
}
export { ClickButton };
