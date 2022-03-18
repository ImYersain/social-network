import {onSendMessageCreater, onUpdateMessageCreater, onToggleIsFetching} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
