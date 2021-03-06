import { connect } from 'react-redux';
import StageHeaderComponent from '../components/stageHeader.js';

const mapStateToProps = (state) => {  
  return {
    stageHeaderText: state.editor.headerText
  }
}

const StageHeader = connect(
  mapStateToProps
)(StageHeaderComponent)

export default StageHeader
