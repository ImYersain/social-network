import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../Redux/auth-reducer';
import { AppStateType } from '../../Redux/redux-store';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    logout: () => void
};
class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType>{
    render() {
        return (
            <Header {...this.props} />
        )
    }

}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, { logout })(HeaderContainer);