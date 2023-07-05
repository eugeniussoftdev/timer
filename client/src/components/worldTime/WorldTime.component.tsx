import React from "react";
import styled from "styled-components";

import { Clock } from "./Clock.component";

export const WordTimeBLock = styled.div`
  display: flex;
`;

export const WorldTime = () => {
  return (
    <WordTimeBLock>
      <Clock timezone="newYork" />
      <Clock timezone="london" />
      <Clock timezone="tokio" />
    </WordTimeBLock>
  );
};

export default WorldTime;
