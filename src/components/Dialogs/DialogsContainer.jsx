import { onSendMessageCreater, onToggleIsFetching } from '../../Redux/dialogs-reducer';
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
      dispatch(onSendMessageCreater(newMessageBody));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(onToggleIsFetching(isFetching));
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
