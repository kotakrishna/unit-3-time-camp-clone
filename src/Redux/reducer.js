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
} from "./actionType";

const initial = {
  isAuth: false,
  isLoading: false,
  isError: false,
  userId: 0,
  projectId: [],
  data: {
    isDataLoading: false,
    isDataError: false,
    tasks: [],
  },
};
export function reducer(state = initial, { type, payload }) {
  switch (type) {
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
        projectId: [],
      };
    case GET_USER_PROJECT_ID_SUCCESS:
      console.log(payload);
      return {
        ...state,
        projectId: payload,
      };
    case GET_USER_PROJECT_ID_FAILURE:
      return {
        ...state,
        projectId: [],
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
