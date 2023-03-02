import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { MouseEvent, MouseEventHandler } from 'react';

export const gotoLink = (dispatch: Dispatch, path: string): MouseEventHandler => {
  return (ev: MouseEvent) => {
    ev.preventDefault();
    dispatch(push(path));
    return false;
  };
};
