import React from "react";

export const TimerControls = ({ stopTimer, pauseTimer, startTimer }) => {
  return (
    <div>
      <button
        onClick={startTimer}
        className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
      >
        Start
      </button>
      <button
        onClick={pauseTimer}
        className="border-stroke dark:text-body-color-dark dark:shadow-two flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
      >
        Pause
      </button>
      <button
        onClick={stopTimer}
        className="border-stroke dark:text-body-color-dark dark:shadow-two flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
      >
        Stop
      </button>
    </div>
  );
};

export default TimerControls;
