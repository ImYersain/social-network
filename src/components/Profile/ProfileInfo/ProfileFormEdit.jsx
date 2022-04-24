import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';

import s from './ProfileInfo.module.css';



const PofileFormEdit = ({profile, handleSubmit}) => {
    return <form onSubmit={handleSubmit}> {/* почему передаем onsubmit а встречаем handlesubmit */}
    <div className={s.wrapperInfo}>
        <div><b>About me:</b>
            {/* <Field placeholder='aboutMe' name={'aboutMe'} component={Textarea} /> */}
        </div>
        {/* <div>
            <br/>
            <ul><b>Contacts:</b>
                <div style={{'paddingLeft':'20px'}}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
                </div>
            </ul>
        </div> */}
        <br/>
         <div><b>Looking for a job:</b> 
            <Field name={'lookingForAJob'} component={Input} type={'checkbox'}/>
            <br/>
         </div>
         <div><b>Skills:</b> 
            <div>{profile.lookingForAJobDescription}</div>
            <Field placeholder='Professional skills' name={'lookingForAJobDescription'} component={Textarea}/>
         </div>
    </div>
    <div><button>Save</button></div>
</form>
}


const PofileFormEditReduxForm = reduxForm({ form: 'edit-profile' })(PofileFormEdit)

export default PofileFormEditReduxForm;



