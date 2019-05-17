import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'
import AddSmurf from '../components/AddSmurf';
import Smurf from '../components/Smurf';
import './App.css';


class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
}

  render() {

return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='smurfs'>
          {this.props.smurfs.map((smurf,i) => {
            return <Smurf key={i} smurf={smurf} />
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
