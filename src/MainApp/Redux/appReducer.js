import { GET_TASK_REQ, GET_TASK_SUCCESS,GET_TASK_FAILURE, UPDATE_TASK_REQ, UPDATE_TASK_FAILURE, UPDATE_TASK_SUCCESS } from "./actionTypes"

const initState = {
    tasks:[],
    isLoading:false,
    isError:false
}

export const appReducer = (state=initState, action)=>{
    switch(action.type){
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
                isLoading:false
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
                isLoading:false
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