import React from "react";
import ReactDOM from "react-dom"

import EditHeaderContainer from "../containers/EditHeaderContainer.js";
// import EditHeaderComponent from './editHeader.js';
// import AddBodyComponent from './editor/components/addBody.js';
// import AddFooterComponent from './editor/components/addFooter.js';

export default class EditorMainComponent extends React.Component{
  render(){
    return (
      <div className="editor-container">
        <h3 className="title editor">Editor</h3>
        <EditHeaderContainer />
        {/*<AddBodyComponent />
        <AddFooterComponent />*/}
      </div>
    )
  }
}
