import { connect } from 'react-redux';
import { updateHeader,getHeaderState } from '../actions/editorActions.js';
import { contentEdited } from '../../submit/actions/submitActions.js';
import EditHeaderComponent from '../components/editHeader.js';

const mapStateToProps = (state) => {
  return {
    headerText: state.editor.headerText
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    keyUpHandler: (e) => { console.log('keyup')
      dispatch(updateHeader(e.target.value));
      dispatch(contentEdited())
    }
  }
}

const EditHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHeaderComponent)

export default EditHeader
