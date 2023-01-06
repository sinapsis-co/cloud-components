import { Button } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Translate } from 'react-localize-redux';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';

interface CustomButtonProps {
  className?: string;
  url?: string;
  translateId?: string;
  text?: string;
}

export const CustomButton: FunctionComponent<CustomButtonProps> = ({ url, translateId, text }) => {
  const dispatch = useDispatch();

  const redirect = () => {
    if (url) {
      dispatch(push(url));
    }
  };

  return (
    <>
      <Button variant="contained" onClick={redirect}>
        {translateId ? <Translate id={translateId} /> : text}
      </Button>
    </>
  );
};
