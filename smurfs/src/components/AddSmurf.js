import React, { Component } from 'react';

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

    }

    addSmurf = event => {

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
                        type="text"
                        name='name'
                        value={this.state.smurfInfo.height}
                        onChange={this.handleChanges}
                        placeholder="...height in cm"
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        );
    }
}

export default AddSmurf;