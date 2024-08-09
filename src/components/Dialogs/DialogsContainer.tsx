import { actions } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';



const mapStateToProps = (state: AppStateType) => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(actions.onSendMessage(newMessageBody));
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(actions.onToggleIsFetching(isFetching));
    }
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
