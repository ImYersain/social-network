import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../utils/validators/validators';
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router-dom';

import styles from './Login.module.css';
import { AppStateType } from '../../Redux/redux-store';



type LoginFormValueType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

const LoginForm:FC<InjectedFormProps<LoginFormValueType>> = ({handleSubmit, error}) => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);

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


const LoginReduxForm = reduxForm<LoginFormValueType>({ form: 'login' })(LoginForm)




const LoginPage: FC<{}> = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

    const onSubmit = (formData: LoginFormValueType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }
    
    if(isAuth) {
        return <Navigate to={'/profile'} />
    }

    return  <div className={styles.wrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
}


export default LoginPage;

