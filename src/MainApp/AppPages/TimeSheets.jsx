import React from 'react'
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { getTasks } from '../Redux/action';
import { TimeSheetTask } from './TimeSheetTask';
import styles from './TimeSheets.module.css'
import styled from 'styled-components';
import moment from 'moment';
import { loaddata } from '../../taskUtil/taskLocalStorage';
export function TimeSheets(){
    const tasks = useSelector(state=>state.appRed.tasks)
    const dispatch = useDispatch()

    // const handleTasks = () => {
    //     dispatch(getTasks())
    // }
    const Div = styled.div`
    margin:0 5px;
        &:hover{
            border: 1px solid #c4c4c4;
            border-radius:10px;
        }
    `;
    const Button = styled.div`
        width:150px;
        padding:10px 5px;
        border-radius:10px;
        font-size:15px;
        font-weight:500;
        cursor:pointer;
        background:#3ea04a;
        color:white;
        margin:0 5px;

    &:hover{
        background:#3eb44c;
    }
`;
    React.useEffect(()=>{
        dispatch(getTasks(loaddata("userId")))
    },[])
    return (
        <div>
            <div className={styles.timeSheets}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <div className={styles.calendar}>
                        <div className={styles.prev}>{"<"}</div>
                        <div className={styles.calLogo}>
                            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png" alt=""/>
                            <div>^</div>
                        </div>
                        <div className={styles.next}>{">"}</div>
                    </div>
                    <div>
                        <div className={styles.date}>{new Date().toDateString()}</div>
                    </div>
                </div>
                
                
                <div className={styles.sortAndEdit}>
                    <div className={styles.dayWeek}>
                        <div>Day</div>
                        <div style={{width:1,height:"100%", borderRight:"1px solid rgb(202, 200, 200)"}}></div>
                        <div>Week</div>
                    </div>
                    <div className = {styles.refresh}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/1200px-Refresh_icon.svg.png" alt=""/>
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.calLogo}>
                            <img src="https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png" alt=""/>
                            <div>^</div>
                        </div>
                    </div>
                    
                    <div className={styles.edit}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edit_font_awesome.svg/512px-Edit_font_awesome.svg.png" alt=""/>
                        <div>Bulk edit</div>
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.calLogo}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" alt=""/>
                            <div>^</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={styles.taskCont}>
                <Div className={styles.selectInp}>
                    Select task and project
                </Div>
                <div className={styles.timerCont}>
                    <Div className={styles.note}>note</Div>
                    <div className={styles.middle}></div>
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

                    <div>start timer</div>

                    <Button>ADD TIME ENTRY</Button>
                </div>
            </div>


            <div className={styles.tasksCont}>
                {
                    tasks.map(item=>{
                        return <TimeSheetTask data = {item}/>
                    })
                }
            </div>
            
        </div>
    )
}