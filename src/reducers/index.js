import {combineReducers} from 'redux';
import reports from './reports';
import view from './view';
import plots from './plots';

export default combineReducers({
  reports,
  view,
  plots
})