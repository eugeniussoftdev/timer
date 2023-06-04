export enum reducerActions {
  ADD_TIME = "ADD_TIME",
}

export interface ITimeItem {
  title: string;
  startTime: number;
  finishTime?: number;
  totalTime?: number;
}

export interface IReducerActions {
  type: reducerActions;
  payload: ITimeItem;
}

export interface IReducerState {
  timeList: ITimeItem[];
}

export interface ITimeItem {
  title: string;
  startTime: number;
  finishTime?: number;
  totalTime?: number;
}

export interface IReducerActions {
  type: reducerActions;
  payload: ITimeItem;
}

export interface IReducerState {
  timeList: ITimeItem[];
}
