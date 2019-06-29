import { FETCH_SMURFS, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false
      };
    default:
      return state;
  }
}

export default reducer;
