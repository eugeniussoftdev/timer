"use client"
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { TimerControls } from "./TimerControls";

import { formatTime } from "../../utils/formatTimer";
import { useAddData } from "../../hooks/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";


const defaultWorkItem = {
  title: "New work",
  tag: "work",
  category: "work",
  startTime: new Date(),
  entTime: new Date(),
  totalTime: 0,
};

export type WorkItemType = typeof defaultWorkItem;

export const Timer = () => {
  const [time, setTimer] = useState(0);
  const [user, setUser] = useState(null);
  const [workName, setWorkName] = useState("");
  const [workItem, setWorkItem] = useState<WorkItemType>(defaultWorkItem);

  const ref = useRef<NodeJS.Timeout | undefined>(undefined);

  const { addDbDoc } = useAddData();

  const startTimer = () => {
    console.log(ref.current);
    if (ref) {
      ref.current = setInterval(() => {
        setTimer((prevState) => prevState + 1);
        console.log(time);
      }, 1000);
      setWorkItem((prevState) => ({ ...prevState, startTime: new Date() }));
    }
  };

  const pauseTimer = () => {
    if (ref.current) {
      clearInterval(ref.current);
    }
  };

  const stopTimer = () => {
    addDbDoc({
      ...workItem,
      title: workName,
      entTime: new Date(),
      totalTime: time,
    });
    setTimer(0);
    clearInterval(ref.current);
  };

  const setWorkNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkName(e.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("🚀 *** onAuthStateChanged *** currentUser:", currentUser)
      setUser(currentUser);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center align-center contenct-center ">
          {user?.email}
                <p>{user?.uid}</p>
      <div>{formatTime(time * 1000).stringTime}</div>
      <TimerComponent timeObject={formatTime(time * 1000)} />
      <div className="mb-6">
        <input
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          placeholder="work name"
          onChange={setWorkNameHandler}
          value={workName}
        />
      </div>
      <TimerControls stopTimer={stopTimer} startTimer={startTimer} pauseTimer={pauseTimer} />
    </div>
  );
};

export const TimerComponent = ({ timeObject }) => {
  const timeData = {
    hours: timeObject.formattedHours,
    minutes: timeObject.formattedMinutes,
    seconds: timeObject.formattedSeconds,
    // timeObject.formattedMilliseconds,
  };

  return (
    <div
      className="min-w-screen dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark flex items-center justify-center px-5 py-5"
      x-data="beer()"
      x-init="start()"
    >
      <div className="text-[#A6ADBB]">
        <div className="text-6xl text-center flex w-full items-center justify-center">
          <div className="w-24 mx-1 p-2 bg-[#4A6CF7] text-white rounded-lg">
            <div className="font-mono leading-none" x-text="days">
              00
            </div>
            <div className="font-mono uppercase text-sm leading-none">Days</div>
          </div>
          <div className="w-24 mx-1 p-2 bg-[#4A6CF7] text-white rounded-lg">
            <div className="font-mono leading-none" x-text="hours">
              {timeData.hours}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Hours
            </div>
          </div>
          <div className="w-24 mx-1 p-2 bg-[#4A6CF7] text-white rounded-lg">
            <div className="font-mono leading-none" x-text="minutes">
              {timeData.minutes}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Minutes
            </div>
          </div>
          <div className="w-24 mx-1 p-2 bg-[#4A6CF7] text-white rounded-lg">
            <div className="font-mono leading-none" x-text="seconds">
              {timeData.seconds}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
    Extenal css to add 
.animate-timer {
         position: relative;
          animation: animatetop 1s infinite;
        }
        @keyframes animatetop {
          from {
            top: -50px;
          }
          to {
            top: 20px;
          }
        }
 */
