import React, { useState, useEffect } from 'react';


const ProfileStatus = (props) => {
    let [ editMode, setEditMode] = useState(false);
    let [ status, setStatus] = useState(props.status);
    
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (<>
        {   !editMode && <div>
                <span onDoubleClick={activateEditMode} > 
                    <span style={{color:'gray', fontSize:'12px'}}> <i>Status</i>: </span>
                    {status || "hi there, a haven't status yet"}
                </span>
            </div>
        }    

        {   editMode && <div>
                <input onChange={(e) => setStatus(e.currentTarget.value)} onBlur={deactivateEditMode}  autoFocus={true} value={status} />
            </div>
        } 
    </>)
    
}

export default ProfileStatus;