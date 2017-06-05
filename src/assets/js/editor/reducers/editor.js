const initialState = {headerText:"Hello Famous"};

export default function editor(state=initialState, action){
  switch (action.type) {
    case "HEADER_TEXT_UPDATED":{
      return {...state, headerText: action.payload}
    }
  }
  return state;
}
