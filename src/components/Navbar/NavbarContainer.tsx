import { AppStateType } from '../../Redux/redux-store';
import Navbar from './Navbar';
import {connect} from 'react-redux';


const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)


export default NavbarContainer;


