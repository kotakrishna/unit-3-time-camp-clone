import {
  GET_USER_ID_FAILURE,
  GET_USER_ID_REQUEST,
  GET_USER_ID_SUCCESS,
  POST_USER_ID_FAILURE,
  POST_USER_ID_REQUEST,
  POST_USER_ID_SUCCESS,
  GET_USER_PROJECT_ID_FAILURE,
  GET_USER_PROJECT_ID_REQUEST,
  GET_USER_PROJECT_ID_SUCCESS,
  GET_USER_TASK_FAILURE,
  GET_USER_TASK_REQUEST,
  GET_USER_TASK_SUCCESS,
  POST_USER_PROJECT_ID_FAILURE,
  POST_USER_PROJECT_ID_REQUEST,
  POST_USER_PROJECT_ID_SUCCESS,
  POST_USER_TASK_ID_FAILURE,
  POST_USER_TASK_ID_REQUEST,
  POST_USER_TASK_ID_SUCCESS,
  USER_LOGOUT,
} from "./actionType";
import axios from "axios";
// import { getLocalStorage, setLocalStorage } from "../Components/LocalStorage";

// import { useSelector } from "react-redux";

// const userId = getLocalStorage("userId");
// const projects = getLocalStorage("projects");
// const tasks = getLocalStorage("tasks");
export const getUserIdRequest = () => {
  return {
    type: GET_USER_ID_REQUEST,
  };
};
export const getUserIdFailure = () => {
  return {
    type: GET_USER_ID_FAILURE,
  };
};
export const getUserIdSuccess = (payload) => {
  return {
    type: GET_USER_ID_SUCCESS,
    payload,
  };
};
export const postUserIdRequest = () => {
  return {
    type: POST_USER_ID_REQUEST,
  };
};
export const postUserIdFailure = () => {
  return {
    type: POST_USER_ID_FAILURE,
  };
};
export const postUserIdSuccess = () => {
  return {
    type: POST_USER_ID_SUCCESS,
  };
};
export const getUserProjectIdRequest = () => {
  return {
    type: GET_USER_PROJECT_ID_REQUEST,
  };
};
export const getUserProjectIdFailure = () => {
  return {
    type: GET_USER_PROJECT_ID_FAILURE,
  };
};
export const getUserProjectIdSuccess = (payload) => {
  return {
    type: GET_USER_PROJECT_ID_SUCCESS,
    payload,
  };
};
export const postUserProjectIdRequest = () => {
  return {
    type: POST_USER_PROJECT_ID_REQUEST,
  };
};
export const postUserProjectIdFailure = () => {
  return {
    type: POST_USER_PROJECT_ID_FAILURE,
  };
};
export const postUserProjectIdSuccess = (payload) => {
  return {
    type: POST_USER_PROJECT_ID_SUCCESS,
    payload,
  };
};

export const postUserTaskIdRequest = () => {
  return {
    type: POST_USER_TASK_ID_REQUEST,
  };
};
export const postUserTaskIdFailure = () => {
  return {
    type: POST_USER_TASK_ID_FAILURE,
  };
};
export const postUserTaskIdSuccess = (payload) => {
  return {
    type: POST_USER_TASK_ID_SUCCESS,
    payload,
  };
};
export const getTaskRequest = () => {
  return {
    type: GET_USER_TASK_REQUEST,
  };
};
export const getTaskFailure = () => {
  return {
    type: GET_USER_TASK_FAILURE,
  };
};
export const getTaskSuccess = (payload) => {
  return {
    type: GET_USER_TASK_SUCCESS,
    payload,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
export const getUserId = (payload) => async (dispatch) => {
  console.log(payload);
  try {
    dispatch(getUserIdRequest());
    await axios
      .get(
        `https://json-server-mocker-masai-test.herokuapp.com/users?username=${payload.username}`
      )
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data[0].userId);
        // setLocalStorage("userId", res.data[0].userId);
        if (
          res.data[0].username === payload.username &&
          res.data[0].password === payload.password
        ) {
          console.log(res.data[0].userId);
          dispatch(getUserIdSuccess(res.data[0].userId));
          dispatch(getUserProjectId(res.data[0].userId));
        } else {
          console.log(res);
        }
      })
      .catch((er) => {
        console.log(er);
        dispatch(getUserIdFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(getUserIdFailure());
  }
};
// const projectId =useSelector(state=>state.data.projectId)
// var projId = [];
export const getUserProjectId = (payload) => async (dispatch) => {
  try {
    dispatch(getUserProjectIdRequest());
    await axios
      .get(
        `https://json-server-mocker-masai-test.herokuapp.com/projects?userId=${payload}`
      )
      .then((res) => {
        // console.log(res.data);
        const aryId = res.data.map((i) => i.project);
        // projId = aryId;
        dispatch(getUserProjectIdSuccess(aryId));
        // setLocalStorage("projects", aryId);
        // dispatch(getUserTasks(aryId[0]));
        dispatch(getUserTasksUserId(payload));
        console.log(aryId);
        // dispatch(getUserIdSuccess())
      })
      .catch((er) => {
        console.log(er);
        dispatch(getUserProjectIdFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(getUserProjectIdFailure());
  }
};
export const postUserProjectId = (payload) => async (dispatch) => {
  try {
    dispatch(postUserProjectIdRequest());
    console.log(payload);
    const project = payload.project;
    const load = {
      // id: uuid(),
      userId: payload.userId,
      project,
    };
    console.log(load);
    await axios
      .post(
        `https://json-server-mocker-masai-test.herokuapp.com/projects`,
        payload
      )
      .then((res) => {
        console.log(res);
        dispatch(getUserProjectId());
      })
      .catch((er) => {
        console.log(er);
        dispatch(postUserProjectIdFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(postUserProjectIdFailure());
  }
};

export const postUserTaskId = (payload) => async (dispatch) => {
  try {
    dispatch(postUserTaskIdRequest());
    console.log(payload);
    await axios
      .post(
        `https://json-server-mocker-masai-test.herokuapp.com/tasks`,
        payload
      )
      .then((res) => {
        console.log(res);
        console.log(payload);
        dispatch(getUserProjectId(payload.userId));
        // dispatch(getUserProjectId(payload.userId));
      })
      .catch((er) => {
        console.log(er);
        dispatch(postUserTaskIdFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(postUserTaskIdFailure());
  }
};
export const postUserId = (payload) => async (dispatch) => {
  try {
    dispatch(postUserIdRequest());
    console.log(payload);
    await axios
      .post(
        `https://json-server-mocker-masai-test.herokuapp.com/users`,
        payload
      )
      .then((res) => {
        console.log(res);
        console.log(payload);
        // console.log(payload);
        dispatch(postUserIdSuccess());
        // dispatch(getUserProjectId(payload.userId));
        // dispatch(getUserProjectId(payload.userId));
      })
      .catch((er) => {
        console.log(er);
        // dispatch(postUserTaskIdFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(postUserIdFailure());
  }
};

// const dispatch = useDispatch()
// dispatch(getUserTasks(projId))

export const getUserTasks = (payload) => async (dispatch) => {
  try {
    dispatch(getTaskRequest());
    console.log(payload);
    await axios
      .get(
        `https://json-server-mocker-masai-test.herokuapp.com/tasks?projectId=${payload}`
      )
      .then((res) => {
        console.log(res);
        // const aryId = res.data.map((i) => i.projectId);
        dispatch(getTaskSuccess(res.data));
        // setLocalStorage("tasks", res.data);
        // console.log(aryId);
        // dispatch(getUserIdSuccess())
      })
      .catch((er) => {
        console.log(er);
        dispatch(getTaskFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(getTaskFailure());
  }
};
export const getUserTasksUserId = (payload) => async (dispatch) => {
  try {
    dispatch(getTaskRequest());
    console.log(payload);
    await axios
      .get(
        `https://json-server-mocker-masai-test.herokuapp.com/tasks?userId=${payload}`
      )
      .then((res) => {
        console.log(res);
        // const aryId = res.data.map((i) => i.projectId);
        dispatch(getTaskSuccess(res.data));
        // console.log(aryId);
        // dispatch(getUserIdSuccess())
      })
      .catch((er) => {
        console.log(er);
        dispatch(getTaskFailure());
      });
  } catch (error) {
    console.log(error);
    dispatch(getTaskFailure());
  }
};
