export default function main(state={
  iframeLoaded:false,
  error: null
}, action){
  switch (action.type) {
    case "iframeLoaded":{
      return {...state, iframeLoaded: true}
    }
  }
  return state;
};
