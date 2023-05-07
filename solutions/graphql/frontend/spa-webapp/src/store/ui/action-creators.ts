import { Action } from 'redux';
import * as actions from './actions';
import { UIMenus } from './types';
// import { DialogConfiguration } from '../../types/ui/dialog-configuration';
// import { SnackbarNotificationData } from '../../types/ui/snackbar-notification-data';
// import { SnackbarStatusProps } from './../../components/basics/snackbar/snackbar-status/index';

export class NoOp implements Action {
  readonly type = actions.NOOP;
}

export class ShowError implements Action {
  readonly type = actions.SHOW_ERROR;

  constructor(public key: string, public message: string) {}
}

export class ResetError implements Action {
  readonly type = actions.RESET_ERROR;

  constructor(public key: string) {}
}

export class StartLoading implements Action {
  readonly type = actions.START_LOADING;

  constructor(public key: string, public isMainLoader?: boolean) {}
}

export class FinishLoading implements Action {
  readonly type = actions.FINISH_LOADING;

  constructor(public key: string) {}
}

// export class CreateDialog implements Action {
//   readonly type = actions.CREATE_DIALOG;

//   constructor(
//     public key: string,
//     public dialogConfig: DialogConfiguration
//   ) {}
// }

export class OpenDialog implements Action {
  readonly type = actions.OPEN_DIALOG;

  constructor(public key: string) {}
}

export class CloseDialog implements Action {
  readonly type = actions.CLOSE_DIALOG;

  constructor(public key: string) {}
}

export class DestroyDialog implements Action {
  readonly type = actions.DESTROY_DIALOG;

  constructor(public key: string) {}
}

export class ChangeMobile implements Action {
  readonly type = actions.CHANGE_MOBILE;

  constructor(public isMobile: boolean, public isSmallScreen: boolean) {}
}

export class OpenMenu implements Action {
  readonly type = actions.SET_MENU_OPENED;

  constructor(public menuId: UIMenus) {}
}

export class CloseMenu implements Action {
  readonly type = actions.SET_MENU_OPENED;
  readonly menuId = undefined;
}

export class ToggleBackdrop implements Action {
  readonly type = actions.TOGGLE_BACKDROP;
}

// export class ShowSnackbar implements Action {
//   readonly type = actions.SHOW_SNACKBAR;

//   constructor (
//     public key: string,
//     public snackbarData: SnackbarNotificationData
//   ) {}
// }

// export class ShowSnackbarStatus implements Action {
//   readonly type = actions.SHOW_SNACKBAR_STATUS;

//   constructor (
//     public key: string,
//     public snackbarData: SnackbarStatusProps
//   ) {}
// }

export class HideSnackbar implements Action {
  readonly type = actions.HIDE_SNACKBAR;

  constructor(public key: string) {}
}

export class HideSnackbarStatus implements Action {
  readonly type = actions.HIDE_SNACKBAR_STATUS;

  constructor(public key: string) {}
}

export class ResetUI implements Action {
  readonly type = actions.RESET_UI;
}

export type UIActions =
  | ShowError
  | ResetError
  | StartLoading
  | FinishLoading
  // | CreateDialog
  | OpenDialog
  | CloseDialog
  | DestroyDialog
  | ChangeMobile
  | NoOp
  | OpenMenu
  | CloseMenu
  | ToggleBackdrop
  // | ShowSnackbar
  // | ShowSnackbarStatus
  | HideSnackbar
  | HideSnackbarStatus
  | ResetUI;
