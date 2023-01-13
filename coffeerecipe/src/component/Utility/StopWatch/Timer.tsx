import React from "react";
import { useTimer } from "react-timer-hook";
import { useState, useEffect, useRef } from 'react';
import "./styles.css";
import { useSelector, RootState } from "../../../Store/store";
import { useAnimation, motion } from 'framer-motion';

function MyTimer() {
  const prop_minutes = useSelector(
    (state: RootState) => state.recipeStep.minutesDate
  );
  const prop_seconds = useSelector(
    (state: RootState) => state.recipeStep.secondDate
  );
  const expiryTimestamp = new Date();
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });
  const inputElement = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + prop_seconds);
    time.setMinutes(time.getMinutes() + prop_minutes);
    restart(time as unknown as Date, false);
    buttonAnimation.start({scale:0}).then(()=>{
      inputElement.current?.setAttribute('src', window.location.origin + "/next-128.png") ;
      buttonAnimation.start({scale:1});
    });
  }, [prop_minutes, prop_seconds]);
  const clickTimerButton = ()=>
  {
    if(isRunning)
    {
      pause();
      buttonAnimation.start({scale:0}).then(()=>{
        inputElement.current?.setAttribute('src', window.location.origin + "/next-128.png") ;
        buttonAnimation.start({scale:1});
      });
      return;
    }
    resume();
    buttonAnimation.start({scale:0}).then(()=>{
      inputElement.current?.setAttribute('src', window.location.origin + "/pause.png") ;
      buttonAnimation.start({scale:1});
    });
    return;
  }
  const buttonAnimation = useAnimation();
  return (
    <div className="timerApp">
      <div className="time">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <div className="timer-button">
      <motion.img animate={buttonAnimation} exit={{scale:0}} transition={{duration: 0.2,ease: "easeInOut",}}
          src={window.location.origin + "/next-128.png"}
          alt="timerButton"
          onClick={clickTimerButton}
          ref={inputElement}
        />
        <motion.img whileTap={{scale: 0.8, transition: { duration: 0.1 },}}
          src={window.location.origin + "/restart.png"}
          alt="restart"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + prop_seconds);
            time.setMinutes(time.getMinutes() + prop_minutes);
            restart(time as unknown as Date, false);
          }}
        />
      </div>
    </div>
  );
}

export const TimerApp = () => {
  return (
    <div>
      <MyTimer />
    </div>
  );
};
