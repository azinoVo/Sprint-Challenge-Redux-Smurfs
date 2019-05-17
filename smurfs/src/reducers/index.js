// action types here
import {FETCH_START, GET_SMURFS, FETCH_ERROR} from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: false
  //  updatingSmurf: false,
  //  deletingSmurf: false,
 }

const reducer = (state = initialState, action) => {
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
        smurfs: [...state.smurfs, ...action.payload]
      };

      case FETCH_ERROR:
        return {
          ...state,
          error: true
        };

    default:
      return state;
  }
};

export default reducer;
