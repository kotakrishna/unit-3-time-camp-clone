import { loaddata, saveData } from "../../taskUtil/taskLocalStorage"
import { GET_TASK_REQ, GET_TASK_SUCCESS,GET_TASK_FAILURE, UPDATE_TASK_REQ, UPDATE_TASK_FAILURE, UPDATE_TASK_SUCCESS, IS_START, IS_STOP } from "./actionTypes"
const isStart = loaddata("isStart") || false
const isStop = loaddata("isStop") || true
const initState = {
    tasks:[],
    isLoading:false,
    isError:false,
    isStart:isStart,
    isStop:isStop
}

export const appReducer = (state=initState, action)=>{
    switch(action.type){
        case IS_START:{
            saveData("isStart", action.payload)
            return {
                ...state,
                isStart:action.payload
            }
        }
        case IS_STOP:{
            saveData("isStop", action.payload)
            return {
                ...state,
                isStop:action.payload
            }
        }
        case GET_TASK_REQ:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_TASK_SUCCESS:{
            return {
                ...state,
                tasks : action.payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_TASK_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case UPDATE_TASK_REQ:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case UPDATE_TASK_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        }
        case UPDATE_TASK_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:return state
    }
}