import React, { useContext } from "react";
import style from "../sass/components/_toggle.module.scss";
import Sun from "../img/sun.png";
import Moon from "../img/moon.png";
import { ThemeContext } from "../context";

function Toggle() {
    const theme = useContext(ThemeContext)
    const {state, dispatch} = theme;

    const handleClick = () =>{
        dispatch({type:"TOGGLE"})
    }
  return (
    <div className={style.t}>
      <img
        className={style.tIcon}
        src={Sun}
        alt="Sun icon to togggle light mode"
      />
      <img
        className={style.tIcon}
        src={Moon}
        alt="Moon icon to togggle light mode"
      />

      <div 
        className={style.tButton} onClick={handleClick} style={{left: state.darkMode ? 0 : "25px"}}>
       
      </div>
    </div>
  );
}

export default Toggle;
