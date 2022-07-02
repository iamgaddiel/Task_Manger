import { SEARCH } from "./ACTIONS";
import { ActionType, TaskType } from "./types";

export const searchReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case SEARCH:
      let res = localStorage.getItem("tasks");
      if (res !== null) {
        const tasks: TaskType[] = JSON.parse(res);
        let result: TaskType[] = tasks.filter(
          (task) => task.title === action.payload
        );
        return result;
      }
      break;

    default:
      return state;
  }
};
