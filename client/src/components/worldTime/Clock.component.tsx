import React, { useEffect, useState } from "react";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const Number = ({ value = 0 }) => {
  const result = String(value).padStart(2, "0");
  return (
    <div className="digital">
      <p>88</p>
      <p>{result}</p>
    </div>
  );
};
export const Word = ({ value, hidden = false }: any) => {
  const getStyle = () => {
    return {
      visibility: hidden ? "hidden" : "visible",
    };
  };
  return (
    <div className="digital">
      <p>{value}</p>
      <p style={{ visibility: "hidden" }}>{value}</p>
      {/* <p style={getStyle()}>{value}</p> */}
    </div>
  );
};
export const Clock = ({ h24 = true, timezone = "" }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [day, setDay] = useState(0);
  const [pm, setPm] = useState(false);

  useEffect(() => {
    const update = () => {
      let newTime = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Tokyo",
      });
      if (timezone === "london") {
        newTime = new Date().toLocaleString("en-GB", {
          timeZone: "Europe/London",
        });
      }
      if (timezone === "newYork") {
        newTime = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
        });
      }
      console.log(" **** NEW time", newTime, timezone);
      const date = new Date(newTime);
      let hour = date.getHours();
      if (!h24) {
        hour = hour % 12 || 12;
      }
      setHour(hour);
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
      setDay(date.getDay());
      setPm(date.getHours() >= 12);
    };

    update();

    const interval = setInterval(() => {
      update();
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock">
      {timezone}
      <div className="calendar">
        {days.map((value, index) => (
          <Word key={value} value={value} hidden={index != day} />
        ))}
      </div>
      <div className="row">
        {timezone}
        <div className="hour">
          <Number value={hour} />
          <Word value={":"} />
          <Number value={minute} />
          <Word value={":"} />
          <Number value={second} />
        </div>
        <div className="ampm">
          <Word value={"AM"} hidden={pm} />
          <Word value={"PM"} hidden={!pm} />
        </div>
      </div>
    </div>
  );
};
