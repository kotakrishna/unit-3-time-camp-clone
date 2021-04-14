import {
  GET_USER_ID_FAILURE,
  GET_USER_ID_REQUEST,
  GET_USER_ID_SUCCESS,
  GET_USER_PROJECT_ID_FAILURE,
  GET_USER_PROJECT_ID_REQUEST,
  GET_USER_PROJECT_ID_SUCCESS,
  GET_USER_TASK_FAILURE,
  GET_USER_TASK_REQUEST,
  GET_USER_TASK_SUCCESS,
} from "./actionType";
import axios from "axios";
import { useSelector } from "react-redux";

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

export const getUserId = (payload) => async (dispatch) => {
  try {
    dispatch(getUserIdRequest());
    await axios
      .get(
        `https://json-server-mocker-masai-test.herokuapp.com/users?username=${payload}`
      )
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data[0].userId);
        dispatch(getUserIdSuccess(res.data[0].userId));
        dispatch(getUserProjectId(res.data[0].userId));
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
        const aryId = res.data.map((i) => i.projectId);
        // projId = aryId;
        dispatch(getUserProjectIdSuccess(aryId));
        // dispatch(getUserTasks(aryId[0]));
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
