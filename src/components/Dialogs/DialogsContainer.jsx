import { onSendMessageCreater, onUpdateMessageCreater, onToggleIsFetching } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';



const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(onUpdateMessageCreater(text));
    },
    sendMessage: () => {
      dispatch(onSendMessageCreater());
    },
    toggleIsFetching: (isFetching) => {
      dispatch(onToggleIsFetching(isFetching));
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(<Dialogs />);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;
