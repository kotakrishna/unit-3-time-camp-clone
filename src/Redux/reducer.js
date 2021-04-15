import {
  GET_USER_ID_FAILURE,
  GET_USER_ID_REQUEST,
  GET_USER_ID_SUCCESS,
  GET_USER_PROJECT_ID_SUCCESS,
  GET_USER_PROJECT_ID_FAILURE,
  GET_USER_PROJECT_ID_REQUEST,
  GET_USER_TASK_FAILURE,
  GET_USER_TASK_REQUEST,
  GET_USER_TASK_SUCCESS,
  USER_LOGOUT,
} from "./actionType";
// import { getLocalStorage, setLocalStorage } from "../Components/LocalStorage";

// const userId =  0;
// const projects = [];
// const tasks = getLocalStorage("tasks") || [];

const initial = {
  isAuth: false,
  isLoading: false,
  isError: false,
  userId: 0,
  project: [],
  data: {
    isDataLoading: false,
    isDataError: false,
    tasks: [],
  },
};
export function reducer(state = initial, { type, payload }) {
  switch (type) {
    case USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case GET_USER_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_ID_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userId: payload,
      };
    case GET_USER_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_USER_PROJECT_ID_REQUEST:
      return {
        ...state,
        project: [{ ...state.project }],
      };
    case GET_USER_PROJECT_ID_SUCCESS:
      console.log(payload);
      // setLocalStorage("projects", payload);
      return {
        ...state,
        project: payload,
      };
    case GET_USER_PROJECT_ID_FAILURE:
      return {
        ...state,
        project: [{ ...state.project }],
      };

    case GET_USER_TASK_REQUEST:
      return {
        ...state,
        data: {
          isDataLoading: true,
          isDataError: false,
          tasks: [],
        },
      };
    case GET_USER_TASK_SUCCESS:
      return {
        ...state,
        data: {
          isDataLoading: false,
          isDataError: false,
          tasks: payload,
        },
      };
    case GET_USER_TASK_FAILURE:
      return {
        ...state,
        data: {
          isDataLoading: false,
          isDataError: true,
          tasks: [],
        },
      };

    default:
      return state;
  }
}