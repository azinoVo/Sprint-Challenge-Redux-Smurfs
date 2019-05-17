import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'
import './App.css';
import AddSmurf from '../components/AddSmurf';
import Smurf from '../components/Smurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
}

  render() {

    console.log(this.props.state);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurfs'>
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf.name} smurf={smurf} />
          })}
        </div>

        <div className='form-wrapper'>
          <AddSmurf />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(mapStateToProps, { getSmurfs })(App);
