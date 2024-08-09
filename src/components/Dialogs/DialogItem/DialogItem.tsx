import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import s from "./../DialogItem/DialogsItem.module.css";

type DialogItemPropsType = {
  name: string;
  id: number;
  avatar: string;
  isActive?: boolean; // for active item in dialogs list
};

const DialogItem: FC<DialogItemPropsType> = ({ name, id, avatar }) => {
  const path = "/dialogs/" + id;
  return (
    <div className={s.dialogItem}>
      <img src={avatar} alt="" />
      <NavLink
        className={(usersData) => (usersData.isActive ? s.active : s.item)}
        to={path}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
