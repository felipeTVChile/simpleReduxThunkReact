
const reducer = (state = {}, action) => {

    switch (action.type) {
      case 'HELLO_REACT':
        return { ...state, say : action.name };
      default:
        return state;
    }
    
  };
  
  export default reducer;