export default function main(state={
  entries: [],
  currentEntry: {}
}, action){
  switch (action.type) {
    case "ENTRY_ADDED":{
      entries: return [
        ...state,
        action.payload
      ]
    }
    case "ENTRY_SELECTED":{
      return {...state, currentEntry: action.payload}
    }
  }
  return state;
};
