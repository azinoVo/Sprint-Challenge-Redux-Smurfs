import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_START = 'FETCH_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';
export const FETCH_ERROR = 'FETCH_ERROR';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios.get('http://localhost:3333/smurfs/')
    .then(res => {
      console.log(res)
      dispatch({ type: GET_SMURFS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_ERROR, payload: err})
    });
};

export const POSTING_SMURF = 'POSTING_SMURF'
export const ADD_SMURF = 'ADD_SMURF'
export const ADD_ERROR = 'ADD_ERROR'

export const addSmurfs = smurfInfo => dispatch => {
  dispatch({ type: POSTING_SMURF });

  axios.post('http://localhost:3333/smurfs/', smurfInfo)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_SMURF, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ADD_ERROR, payload: err})
    });
};



