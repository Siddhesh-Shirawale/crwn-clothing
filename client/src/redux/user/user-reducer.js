import UserActionTypes from "./user.types";

const INITIAL_STATE = {
   currentUser: null,
   error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case UserActionTypes.SIGN_IN_SUCCESS: //no need to write return for both case as return is same . so stack it
         return {
            ...state,
            currentUser: action.payload,
            error: null, //if success than set error back to null
         };
      case UserActionTypes.SIGN_OUT_SUCCESS:
         return {
            ...state,
            currentUser: null,
            error: null,
         };
      case UserActionTypes.SIGN_IN_FAILURE: //no need to write return for both case as return is same . so stack it
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
         return {
            ...state,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default userReducer;
