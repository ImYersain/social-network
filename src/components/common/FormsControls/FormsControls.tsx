import React, { FC } from 'react';
import { WrappedFieldsProps } from 'redux-form';

import styles from './FormsControls.module.css';


type FormControlPropsType = {
    meta: {
        touched: boolean
        error: string | null   
    }
    input: WrappedFieldsProps
}


export const Textarea: FC<FormControlPropsType> = ({ input, meta, ...props }) => {
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


export const Input: FC<FormControlPropsType> = ({ input, meta: {touched, error}, ...props }) => {
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