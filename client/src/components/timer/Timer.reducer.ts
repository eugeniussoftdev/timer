import { IReducerActions, IReducerState, reducerActions } from "./Timer.types";

export const reducer = (state: IReducerState, action: IReducerActions) => {
  switch (action.type) {
    case reducerActions.ADD_TIME:
      console.log("*** ACTION", action.payload);

      const ln = state.timeList.length;
      const timeList = state.timeList.map((time, i) => {
        if (i === ln - 1) {
          return {
            ...time,
            finishTime: action.payload.startTime,
          };
        }
        return time;
      });
      return { ...state, timeList: [...timeList, action.payload] };
    default:
      return state;
  }
};
