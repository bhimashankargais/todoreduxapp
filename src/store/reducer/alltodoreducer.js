import {combineReducers} from "redux";
import todoreducer from './todoreducer';
import filterreducer from './filterreducer'
export default combineReducers({todoreducer,filterreducer});
