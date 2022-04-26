import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../utils/validators/validators';
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router-dom';

import styles from './Login.module.css';



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return   <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='email' name={'email'} validate={[requiredField]}
                    autoComplete="on" component={Input} /></div>
                <div>
                    <Field placeholder='password' name={'password'} type={'password'} 
                    autoComplete="on" validate={[requiredField]} component={Input} /></div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={Input} /> Remember me </div>

                {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
                {captchaUrl && <Field placeholder='Symbols from image' name={'captcha'} validate={[requiredField]} component={Input} />}

                <div>
                    <button type="submit">Login</button>
                </div>
                {error && <div className={styles.formSummaryError}>
                                    {error}
                                </div>
                }
            </form>
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    
    if(isAuth) {
        return <Navigate to={'/profile'} />
    }

    return  <div className={styles.wrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
}

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login } )(Login);

