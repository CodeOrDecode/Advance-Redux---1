import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DARKMODE, LIGHTMODE } from "../Redux/action";

const Advance = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => {
    return store.themereducer;
  });

  function handleTheme() {
    dispatch({ type: LIGHTMODE, payload: "lightmode" });
  
  }

  function handleThemeDark(){
    dispatch({ type: DARKMODE, payload: "darkmode" });
  }
  return (
    <div>
      <pre>{JSON.stringify(state)}</pre>
      <button onClick={handleTheme}>Light Mode</button>
      <button onClick={handleThemeDark}>Light Mode</button>
    </div>
  );
};

export default Advance;
