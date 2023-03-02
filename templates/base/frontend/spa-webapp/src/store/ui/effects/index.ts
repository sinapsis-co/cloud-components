import { combineEpics } from 'redux-observable';
import { handleErrorsEpic } from './handle-errors';
import { startLoadingEpic, endLoadingEpic } from './handle-loading';
import { destroyDialogEpic } from './destroy-dialog';
import { scrollTopEpic } from './scroll-top';
import { closeMenusEpic } from './close-menus';
import { resetAfterLogoutEpic } from './reset-after-logout';
import { showErrorsEpic } from './show-errors';
import AppState from '../../state';
import { Actions } from '../../actions';

const uiEpic = combineEpics<Actions, Actions, AppState>(
  handleErrorsEpic,
  startLoadingEpic,
  endLoadingEpic,
  destroyDialogEpic,
  scrollTopEpic,
  closeMenusEpic,
  resetAfterLogoutEpic,
  showErrorsEpic
);

export default uiEpic;
