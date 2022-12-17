import React from "react";
import { useTimer } from "react-timer-hook";
import Button from "react-bootstrap/Button";
import "./styles.css"
import { useState } from 'react';

type TimerState = "stop" | "start";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const [stateMode, setStateMode] = useState<TimerState>("stop");

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timerApp">
      <h1>タイトル</h1>
      <p>回数</p>
      <div className="time">
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={resume}>Next</Button>
      <Button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time as unknown as Date);
        }}
      >
        Restart
      </Button>
    </div>
  );
}

export const TimerApp =()=> {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time as unknown as Date} />
    </div>
  );
}