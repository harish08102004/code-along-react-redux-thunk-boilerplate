const initialState = {
    users: [],
  }
  
  function userReducer(state = initialState, action){
    switch (action.type) {
      case "ADD_DATA":
        return {
          ...state,
          users: action.payload,
        }
      default:
        return state;
    }
  }
  
  export default userReducer;  