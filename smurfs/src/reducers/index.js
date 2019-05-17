// action types here
import {FETCH_START, GET_SMURFS, FETCH_ERROR} from '../actions'

//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your name-spacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: 
      return {
       
    };

    case GET_SMURFS:
      return {

      };

      case FETCH_ERROR:
        return {

        };

    default:
      return state;
  }
};

export default reducer;
