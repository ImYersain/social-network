import React from 'react';


class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value 
        })
    }
    

    render(){

        return (<>
            {   !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode} onTouchStart={this.activateEditMode} > 
                        <span style={{color:'gray', fontSize:'12px'}}> <i>Status</i>: </span>
                        {this.state.status || "hi there, a haven't status yet"}
                    </span>
                </div>
            }    

            {   this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status} />
                </div>
            } 
        </>)
    }
}

export default ProfileStatus;