import { connect } from 'react-redux';
import { updateHeader } from '../actions/editorActions.js';
import EditHeaderComponent from '../components/editHeader.js';

const mapStateToProps = (state) => {
  return {
    headerText: state.editor.headerText
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    keyUpHandler: (e) => {
      dispatch(updateHeader(e.target.value))
    }
  }
}

const EditHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHeaderComponent)

export default EditHeader
