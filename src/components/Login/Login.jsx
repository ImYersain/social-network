import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../utils/validators/validators';

import styles from './Login.module.css';

const LoginForm = (props) => {
    return   <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='Login' name={'login'} validate={[requiredField]} component={Input} /></div>
                <div>
                    <Field placeholder='Password' name={'password'} validate={[requiredField]} component={Input} /></div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={Input} /> Remember me </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
}


const LoginReduxForm = reduxForm({
    form: 'login' 
})(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return  <div className={styles.wrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
}

export default Login;

