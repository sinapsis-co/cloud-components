import { uiInitialState } from './initial-state';
import { UIState } from './state';
import { UIActions } from './action-creators';
import * as actions from './actions';
import { LOGIN_USER_ERROR_GOOGLE } from '../auth/actions';

const uiReducer = (state: UIState = uiInitialState, action: UIActions): UIState => {
  switch (action.type) {
    case actions.SHOW_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.key]: action.message,
        },
      };
    }
    case actions.CHANGE_MOBILE: {
      return {
        ...state,
        mobile: action.isMobile,
        smallScreen: action.isSmallScreen,
      };
    }
    case actions.RESET_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.key]: undefined,
        },
      };
    }
    case actions.START_LOADING: {
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.key]: action.isMainLoader ? 'main' : 'local',
        },
        errors: {
          ...state.errors,
          [action.key + ' Error']: undefined,
        },
      };
    }
    case actions.FINISH_LOADING: {
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.key]: false,
        },
      };
    }

    // case actions.CREATE_DIALOG: {
    //   return {
    //     ...state,
    //     dialogs: {
    //       ...state.dialogs,
    //       [action.key]: {
    //         ...action.dialogConfig,
    //       },
    //     },
    //   };
    // }

    // case actions.OPEN_DIALOG: {
    //   return {
    //     ...state,
    //     dialogs: {
    //       ...state.dialogs,
    //       [action.key]: {
    //         ...state.dialogs[action.key],
    //         open: true,
    //       },
    //     },
    //   };
    // }

    // case actions.CLOSE_DIALOG: {
    //   return {
    //     ...state,
    //     dialogs: {
    //       ...state.dialogs,
    //       [action.key]: {
    //         ...state.dialogs[action.key],
    //         open: false,
    //       },
    //     },
    //   };
    // }

    // case actions.DESTROY_DIALOG: {
    //   const newDialogs = {
    //     ...state.dialogs,
    //   };

    //   delete newDialogs[action.key];

    //   return {
    //     ...state,
    //     dialogs: newDialogs,
    //   };
    // }

    case actions.SET_MENU_OPENED: {
      return {
        ...state,
        menuOpened: action.menuId,
        showBackdrop: !!action.menuId,
      };
    }

    // case actions.SHOW_SNACKBAR: {
    //   return {
    //     ...state,
    //     snackbar: {
    //       ...state.snackbar,
    //       [action.key]: action.snackbarData,
    //     },
    //   };
    // }

    // case actions.SHOW_SNACKBAR_STATUS: {
    //   return {
    //     ...state,
    //     snackbarStatus: {
    //       ...state.snackbarStatus,
    //       [action.key]: action.snackbarData,
    //     },
    //   };
    // }

    // case actions.HIDE_SNACKBAR: {
    //   return {
    //     ...state,
    //     snackbar: {
    //       ...state.snackbar,
    //       [action.key]: undefined,
    //     },
    //   };
    // }

    // case actions.HIDE_SNACKBAR_STATUS: {
    //   return {
    //     ...state,
    //     snackbarStatus: {
    //       ...state.snackbarStatus,
    //       [action.key]: undefined,
    //     },
    //   };
    // }

    case actions.RESET_UI: {
      if (state.errors[LOGIN_USER_ERROR_GOOGLE]) {
        return {
          ...uiInitialState,
          errors: {
            [LOGIN_USER_ERROR_GOOGLE]: state.errors[LOGIN_USER_ERROR_GOOGLE],
          },
        };
      }
      return {
        ...uiInitialState,
      };
    }

    default: {
      return state;
    }
  }
};

export default uiReducer;
