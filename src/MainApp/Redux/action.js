
import { GET_TASK_FAILURE,
    GET_TASK_REQ,
    GET_TASK_SUCCESS,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_REQ,
    UPDATE_TASK_FAILURE
} from './actionTypes';
import axios from "axios"


export function getTaskReq(){
    return {
        type:GET_TASK_REQ
    }
}
export function getTaskSuccess(payload){
    return {
        type:GET_TASK_SUCCESS,
        payload
    }
}
export function getTaskFailure(){
    return {
        type:GET_TASK_FAILURE
    }
}

export function updateTaskReq(){
    return {
        type:UPDATE_TASK_REQ
    }
}
export function updateTaskSuccess(){
    return {
        type:UPDATE_TASK_SUCCESS
        
    }
}
export function updateTaskFailure(){
    return {
        type:UPDATE_TASK_FAILURE
    }
}

export const getTasks = (params) => dispatch =>{
    const reqAct = getTaskReq()
    dispatch(reqAct)
    return axios
        .get('https://json-server-mocker-masai-test.herokuapp.com/tasks')
        .then(res=>{
            const sucAct = getTaskSuccess(res.data)
            dispatch(sucAct)
        })
        .catch(res=>{
            const failAct = getTaskFailure()
            dispatch(failAct)
        })
}

export const updateTasks = (params, id, timeS) => dispatch =>{
    const reqAct = updateTaskReq()
    dispatch(reqAct)
    return axios
        .patch(`https://json-server-mocker-masai-test.herokuapp.com/tasks/${id}`,{
            data: {
                addedToTimeSheets: false,
                timer: {
                  startTimer: params.startTimer,
                  stopTimer: params.stopTimer
                },
                time: {
                  startTime: params.startTime,
                  stopTime: params.stopTime
                },
                details: {
                  taskName: params.taskName,
                  timeSpent:timeS,
                  taskNotes: params.taskNotes
                }
              }
        })
        .then(res=>{
            const sucAct = updateTaskSuccess()
            dispatch(sucAct)
            dispatch(getTasks())
        })
        .catch(res=>{
            const failAct = updateTaskFailure()
            dispatch(failAct)
        })
}