import {combineReducers} from "redux";

import main from "./main/reducers/mainReducer";
import editor from "./editor/reducers/editor";

export default combineReducers({
  main,
  editor
})
