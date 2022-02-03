import {onSendMessageCreater, onUpdateMessageCreater} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';



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
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
