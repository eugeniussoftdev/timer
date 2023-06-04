import React from "react";
import styled from "styled-components";

import { formatTime } from "../../utils";

import { IReducerState } from "../timer/Timer.types";

export const TimeListWrapper = styled.div`
  width: 300px;
`;

export const TimeListBody = styled.div`
  height: calc(100vh - 250px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

TimeListBody.defaultProps = {
  datatype: "TimeListBody",
  key: "TimeListBody",
};

export const TimeListItem = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  padding: 8px;
`;
export const TimeList = ({ timeList }: IReducerState) => {
  return (
    <TimeListWrapper>
      <p>List</p>
      <TimeListBody>
        {timeList.map((timeItem: any) => {
          return (
            <TimeListItem key={timeItem.startTime + timeItem.title}>
              <p>
                <strong>Title:</strong> {timeItem?.title}
              </p>
              <p>
                <strong>Start time:</strong> {formatTime(timeItem?.startTime)}
              </p>
              <p>
                <strong>Finish time: </strong>
                {timeItem?.finishTime && formatTime(timeItem?.finishTime)}
              </p>
            </TimeListItem>
          );
        })}
      </TimeListBody>
    </TimeListWrapper>
  );
};
