import React from 'react';

import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        statusText: ' ',
    }

    activateEditMode = () => {
        debugger;
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }
    updateStatusText = (e) => {
        let text = e.target.value;
        this.setState({statusText: text})
    }

    render(){

        return (<>
            {!this.state.editMode?<div>
                    <span onDoubleClick={this.activateEditMode} > 
                        <span style={{color:'gray', fontSize:'12px'}}> <i>Status</i>: </span>
                        {this.state.statusText}
                    </span>
                </div> : <div>
                    <input autoFocus onBlur={this.deactivateEditMode} onChange={this.updateStatusText} value={this.state.statusText} />
                </div>
        }
            
              
        </>)
    }
}

export default ProfileStatus;