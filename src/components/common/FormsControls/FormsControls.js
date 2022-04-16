import React from 'react';

import styles from './FormsControls.module.css';



export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return <div>
        <div className={styles.formControl + ' ' + (hasError? styles.error: '')}>
            <div>
                <textarea {...input} {...props} className={styles.s} /> 
            </div>
            {hasError && <span>{meta.error}</span>}     
        </div>
        
    </div>
}


export const Input = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;

    return <div>
        <div className={styles.formControl + ' ' + (hasError? styles.error: '')}>
            <div>
                <input {...input} {...props} className={styles.s} /> 
            </div>
            {hasError && <span>{error}</span>}     
        </div>
        
    </div>
}

// && <- если hasError true то выводит span, если false  то ничего