import React from 'react'
 import styles from './TimeSheets.module.css'
// Import the component into your project
import TimeInputPolyfill from 'react-time-input-polyfill'
 
export const TimeInput = ({ currentValue, onInputChange }) => {
    return (
        
            <div>
                <TimeInputPolyfill
    
                    
                    value={currentValue}
    
                    
                    onChange={({ value, element }) => {
                        console.log({
    
                            
                            value,
    
                            
                            element,
    
                        })
    
                        
                        onInputChange(value)
                    }}
                    className={styles.timeInp}
                />
            </div>
            
        
    )
}

