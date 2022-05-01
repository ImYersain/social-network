import React, { useState, useEffect, FC } from 'react';

type PropsType = {
    status: string,
    updateStatus: (newStatus: string) => void
}

const ProfileStatus:FC<PropsType> = ({status, updateStatus}) => {
    let [ editMode, setEditMode] = useState<boolean>(false);
    let [ statusValue, setStatusValue] = useState<string>(status);
    
    useEffect(() => {
        setStatusValue(status);
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(statusValue)
    }

    return (<>
        {   !editMode && <div>
                <span onDoubleClick={activateEditMode} onTouchStart={activateEditMode} > 
                    <span style={{color:'gray', fontSize:'12px'}}> <i>Status</i>: </span>
                    {status || "hi there, a haven't status yet"}
                </span>
            </div>
        }    

        {   editMode && <div>
                <input onChange={(e) => setStatusValue(e.currentTarget.value)} onBlur={deactivateEditMode}  autoFocus={true} value={status} />
            </div>
        } 
    </>)
    
}

export default ProfileStatus;