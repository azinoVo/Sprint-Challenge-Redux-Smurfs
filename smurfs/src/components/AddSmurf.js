import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addSmurfs} from '../actions'


class AddSmurf extends Component {
    constructor() {
        super();
        this.state = {
            smurfInfo: {
                name:'',
                age:'',
                height:''
            }
        }
    }

    handleChanges = event => {
        console.log(this.state.smurfInfo);
        this.setState({ smurfInfo: {...this.state.smurfInfo,
            [event.target.name]: event.target.value
        }})
    }

    addSmurf = event => {
        event.preventDefault();
        this.props.addSmurfs(this.state.smurfInfo);

    }


    render() {
        return (
            <div>
            <form onSubmit={this.addSmurf}>
                    <input
                        type="text"
                        name='name'
                        value={this.state.smurfInfo.name}
                        onChange={this.handleChanges}
                        placeholder="...name"
                    />

                    <input
                        type="number"
                        name='age'
                        value={this.state.smurfInfo.age}
                        onChange={this.handleChanges}
                        placeholder="...age"
                    />

                    <input
                        type="number"
                        name='height'
                        value={this.state.smurfInfo.height}
                        onChange={this.handleChanges}
                        placeholder="...height in cm"
                    />
                    <button onClick={this.addSmurf}>Add Smurf</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf
  });

export default connect(mapStateToProps, {addSmurfs})(AddSmurf);