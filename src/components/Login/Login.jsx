import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './Login.module.css';

const LoginForm = (props) => {
    return   <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='Login' name={'login'} component={"input"} /></div>
                <div>
                    <Field placeholder='Password' name={'password'} component={"input"} /></div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={"input"} /> Remember me </div>
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

