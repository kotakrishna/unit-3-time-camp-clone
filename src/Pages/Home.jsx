import React from 'react'
import styles from './Home.module.css'
export default function Home(){
    
    return (
        <div className = {styles.homeCont}>
            
            <div className={styles.adv}>
                <div className={styles.line}></div>
                <h2 className={styles.text}>Trusted by 18,000 teams from all over the world (and still growing!)</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.teamLogo}>
                <div className={styles.teams}>
                    <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg" alt=""/>
                    <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg" alt=""/>
                </div>
                <div>
                    <img src="https://cdn-m.timecamp.com/img/logos/dsv.png" alt=""/>
                </div>
                <div>
                    <img src="https://cdn-m.timecamp.com/img/logos/usp.png" alt=""/>
                </div>
                <div>
                    <img src="https://cdn-m.timecamp.com/img/logos/saatchi.png" alt=""/>
                </div>
                <div>
                    <img src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png" alt=""/>
                </div>
                <div className={styles.teams}>
                    <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg" alt=""/>
                    <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg" alt=""/>
                </div>
            </div>
            <div style={{width:"89%",borderBottom:"1px solid #b8b2b2",margin:"10px auto 0"}}></div>
            <div className={styles.timeCampDet}>
                <div>
                    <h2>TimeCamp - tracking time, reinvented.</h2>
                    <p>
                        Discover how a feature-rich free time tracker can end your project management headaches. Let your team perform at it's best without intrusive micromanagement.
                    </p>
                </div>
                
            </div>
            <div className={styles.timeCampDet}>
                <div style={{marginTop:100}}>
                    <h1 style={{
                        textAlign:"center",
                        fontSize:45,
                        fontWeight:700,
                        color:"#1b1b20"
                         
                    }}>TimeCamp is your go-to tool for</h1>
                </div>
                
            </div>
            <div className={styles.track}>
                <div className={styles.trackImg}>
                    <img src="https://cdn-m.timecamp.com/img/greenbranding/features/goodbyeSpreadsheet.svg" alt=""/>
                </div>
                <div style={{width:400}}>
                    <h2>Restoring clarity thanks to <span>time tracking software</span></h2>
                    <p>Are you struggling to keep track of your team's performance across different projects? <strong>Say "goodbye" to spreadsheets and guesswork.</strong>  Let TimeCamp do the time tracking and focus on the work that matters.</p>
                    <p>Learn how a piece of time tracking software <strong>can help you optimize your team's workflow</strong>  as well as keep your projects within their budgets.

                    </p>
                    <div>More about time tracking</div>
                </div>
            </div>
        </div>
    )
}