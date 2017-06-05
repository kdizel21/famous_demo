import {combineReducers} from "redux";

import main from "./main/reducers/mainReducer";
import editor from "./editor/reducers/editor";
import submit from "./submit/reducers/submitReducer";

export default combineReducers({
  main,
  editor,
  submit
})
