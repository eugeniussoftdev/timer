import React, { useReducer, useRef, useState, Suspense, lazy } from "react";
import styled from "styled-components";

import { reducer } from "./Timer.reducer";
import { Menu } from "../menu/Menu.component";
import { TimeList } from "../timeList/TimeList.component";

import { formatTime } from "../../utils";

import { reducerActions } from "./Timer.types";

const WorldClock = lazy(() => import("../worldTime/WorldTime.component"));

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const TimerControls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const getButtonColor = (color: string) => {
  switch (color) {
    case "blue":
      return "#4edcfc";
    case "red":
      return "hsla(347, 49%, 51%, 1)";
    case "yellow":
      return "hsla(40, 72%, 60%, 1)";
    default:
      return "grey";
  }
};
export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: string; // two styling options
  disabled?: boolean; // make the button disabled or not
};
const Button = styled.button`
  background-color: ${({ color }) => color && getButtonColor(color)};
  border: 1px solid
    ${({ color }) => (color ? "hsla(40, 72%, 60%, 1)" : "hsla(0, 0%, 0%, 0.4)")};
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 3rem;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${({ color }) => color && getButtonColor(color)};
    ${({ color }) => color && `transform: translateY(-3px)`}
  }
  /* color ? "hsla(40, 72%, 60%, 1)" : "hsla(347, 49%, 51%, 1)"}; */

  &:active {
    background-color: ${({ color }) =>
      color ? "hsla(40, 72%, 35%, 1)" : "hsla(347, 49%, 26%, 1)"};
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

const Input = styled.input`
  outline: none;
  font-size: 3rem;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
`;

const TimerView = styled.div`
  font-size: 3rem;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;

export const Timer = () => {
  const [currentTaskTime, setCurrentTaskTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, { timeList: [] });
  const ref = useRef<NodeJS.Timeout | null>(null);
  const totalRef = useRef<NodeJS.Timeout | null>(null);

  const onStartWatchHandler = () => {
    if (ref.current === null) {
      ref.current = setInterval(() => {
        setCurrentTaskTime((prevTime) => prevTime + 10);
      }, 10);
    }
    if (totalRef.current === null) {
      totalRef.current = setInterval(() => {
        setTotalTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const onStopWatchHandler = () => {
    if (ref.current !== null) {
      clearInterval(ref.current);
      ref.current = null;
      setCurrentTaskTime(0);
    }
  };
  const onPauseWatchHandler = () => {
    if (ref.current !== null) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };
  const onAddWatchHandler = () => {
    dispatch({
      type: reducerActions.ADD_TIME,
      payload: { title: inputValue, startTime: currentTaskTime },
    });
    setCurrentTaskTime(0);
    setInputValue("");
  };

  return (
    <>
      <Suspense fallback={"Loading.."}>
        <WorldClock />
      </Suspense>
      <TimerWrapper>
        <Menu />
        <TimerControls>
          <TimerView>
            <div>Total: {formatTime(totalTime)}</div>
            <div>Current task time: {formatTime(currentTaskTime)}</div>
          </TimerView>
          <div>
            {!ref.current ? (
              <Button
                type="button"
                color={"blue"}
                onClick={onStartWatchHandler}
              >
                Start
              </Button>
            ) : (
              <Button color="red" onClick={onStopWatchHandler}>
                Stop
              </Button>
            )}
            <Button color={"yellow"} onClick={onPauseWatchHandler}>
              Pause
            </Button>
          </div>
          <div>
            <Input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && onAddWatchHandler();
              }}
              value={inputValue}
            />
            <Button onClick={onAddWatchHandler}>Add</Button>
          </div>
        </TimerControls>

        <TimeList timeList={state.timeList} />
      </TimerWrapper>
    </>
  );
};
