import React from 'react'
import { useDispatch } from 'react-redux';
import { getTasks, updateTasks } from '../Redux/action';
import * as moment from 'moment'
import styles from './TimeSheets.module.css'
import styled from 'styled-components';

export function TimeSheetTask({data}){
    const [state, setState] = React.useState(false)
    const dispatch = useDispatch()

    const Div = styled.div`
        margin:0 10px;
        &:hover{
            border: 1px solid #c4c4c4;
            border-radius:10px;
        }
    `;
    const StartStopButton = styled.div`
        &:hover{
            background:#3ea04a;
            border-radius:5px;
        }
    `;
    const handleStartAndStop = () => {
        setState(!state)
        if(!state){
            const params = {
              
                startTimer:true,
                stopTimer:false,
                startTime:moment().format('LTS'),
                stopTime:"",
                taskName: data.data.details.taskName,
                taskNotes: data.data.details.taskNotes
                
               
            }
            let timeSpent = 0
            dispatch(updateTasks(params,data.id, timeSpent))
            
        } 
        else if(state){
            if(data.data.time.startTime!==""){
                const params = {
               
                    startTimer:false,
                    stopTimer:true,
                    startTime:data.data.time.startTime,
                    stopTime:moment().format('LTS'),
                    taskName: data.data.details.taskName,
                    taskNotes: data.data.details.taskNotes,
                    
                }
                let timeStart = moment(params.startTime, "hh:mm:ss")
                let timeStop = moment(params.stopTime,"hh:mm:ss")
                let timeSpent = timeStart.subtract(timeStop)
                dispatch(updateTasks(params,data.id, timeSpent))
            } else {
                const params = {
            
                    startTimer:false,
                    stopTimer:true,
                    startTime:data.data.time.startTime,
                    stopTime:moment().format('LTS'),
                    taskName: data.data.details.taskName,
                    taskNotes: data.data.details.taskNotes,
                    
                }
                let timeSpent = 0
                dispatch(updateTasks(params,data.id, timeSpent))
            }
            
            
        }
    }

    const randomColor = () => {
        return Math.floor(Math.random()*256)
    }
    return (
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 10px",borderBottom:"1px solid #c4c4c4",height:80}}>
            <div style={{display:"flex", alignItems:"center"}}>
                <div style={{width:10, height:10,margin:5, borderRadius:5, background:`rgb(${randomColor()},${randomColor()},${randomColor()})`}}></div>
                <div>{data.data.details.taskName}</div>
            </div>

            <div style={{display:"flex"}}>
                <Div className={styles.note} style={{width:200}}>note</Div>
                <div style={{display:"flex",justifyContent:"space-around",width:200, alignItems:"center"}}>
                    <Div className={styles.timer}>
                        <input type="time"/>
                    </Div>
                    <div style={{fontSize:20}}>-</div>
                    <Div className={styles.timer}>
                        <input type="time" placeholder={moment().format('LT')}/>
                    </Div>
                </div>

                <Div className={styles.duration}>0h 00m</Div>

                <StartStopButton onClick={handleStartAndStop} style={{display:"flex",alignItems:"center",justifyContent:"center",width:35, height:35}}>
                    {
                        !state ? <div className={styles.start}></div> :
                        <div className={styles.stop}>
                            <div></div>
                        </div>
                    }
                </StartStopButton>
            </div>

            
        </div>
    )
}