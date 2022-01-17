import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from './render';
import state from './Redux/state';

import './index.css';


renderEntireTree(state);


reportWebVitals();
