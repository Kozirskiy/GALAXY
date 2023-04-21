import React from "react";
import s from './ProFileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        tittle: 'Delevoper 2023'
    };
    
    activateEditMode = ()  =>  {
        this.setState({
            editMode: true
        });
        // this.state.editMode = true;
        // //this.forceUpdate();
    }
    deactivateEditMode  = ()  =>  {
        this.setState({
            editMode: false
        });
        // this.state.editMode = true;
        // //this.forceUpdate();
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status}</span>
                        
                    </div>
                }


                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onClick={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            




            </div>
        )
    }
}

export default ProfileStatus;
