// action types here
import { FETCH_START, GET_SMURFS, FETCH_ERROR } from '../actions';
import { POSTING_SMURF, ADD_SMURF, ADD_ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  postingSmurf: false,
  error: false,
  addingError: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
      };

    case GET_SMURFS:
      console.log(action.payload);

      return {
        ...state,
        smurfs: action.payload
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: true
      };

    case POSTING_SMURF:
      return {
        ...state,
        postingSmurf: true
      };

    case ADD_SMURF:
      console.log(action.payload);

      return {
        ...state,
        smurfs: [...action.payload]
      };

    case ADD_ERROR:
      return {
        ...state,
        addingError: true
      };

    default:
      return state;
  }
};

