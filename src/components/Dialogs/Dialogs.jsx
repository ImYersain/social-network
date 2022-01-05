import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';




const Dialogs = (props) => {
  return (

    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
          <div className={s.dialog + ' ' + s.active}>
            <NavLink to='/dialogs/1' >Dmitriy</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to='/dialogs/2'>Alex</NavLink> 
          </div>
          <div className={s.dialog}>
            <NavLink to='/dialogs/3'>Honzo</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to='/dialogs/4'>Vasiliy</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to='/dialogs/5'>Vera</NavLink>
          </div>
        </div>
      <div className={s.messages}>
          <div className={s.message}>
            Hi
          </div>
          <div className={s.message}>
            How are you?
          </div>
          <div className={s.message}>
            Im fine , thanks!
          </div>
        </div>
    </div>
    
  );
}

export default Dialogs;
