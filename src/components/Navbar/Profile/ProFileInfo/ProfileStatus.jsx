import React from "react";
import s from './ProFileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };
    
    activateEditMode = ()  =>  {

        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode  = ()  =>  {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);

    }

    onStatusChange = (e) => {
      this.setState({
        status: e.currentTarget.value
      });
    };

    render() {
        return (
            <div>
                <div className={s.statusBlock}>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateEditMode}>Your status &#8658; {this.props.status || 'no status' }</span>
                            
                        </div>
                    }


                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} className={s.inputStatus} autoFocus={true} onDoubleClick={this.deactivateEditMode} value={this.state.status} />
                        </div>
                    }
                </div>
               
            




            </div>
        )
    }
}

export default ProfileStatus;
