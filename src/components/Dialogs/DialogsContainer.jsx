import { actions } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(actions.onSendMessageCreater(newMessageBody));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(actions.onToggleIsFetching(isFetching));
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
