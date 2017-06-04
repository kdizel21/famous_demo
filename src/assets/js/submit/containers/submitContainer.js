import { connect } from 'react-redux';
// import { updateHeader } from '../../editor/actions/editorActions.js';
import { submitChanges,
  submitErorrHanlder,
  submitSuccess
 } from '../actions/submitActions.js';
import SubmitButtonComponent from '../components/submitButton.js';

const enableButton = (hText) => {
  return "enabled"
}

const mapStateToProps = (state) => {
  return {
    active: enableButton(state.editor.headerText)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveChanges: () => {
      //grab html data
      console.log('saving...')
      dispatch(submitChanges())
    }
  }
}

const SubmitButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitButtonComponent)

export default SubmitButton
