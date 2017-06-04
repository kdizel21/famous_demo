export default function submit(state={
  active:"disabled",
  error: null
}, action){
  switch (action.type) {
    case "SUBMIT_CHANGES":{
      return {...state, active: "active"}
    }
    case "SUBMIT_ERROR": {
      return {...state, active: "enabled"}
    }
    case "SUBMIT_SUCCESS": {
      return {...state, active: "disabled"}
    }
  }
  return state;
};
