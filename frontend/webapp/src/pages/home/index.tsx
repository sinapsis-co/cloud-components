import { Button } from '@mui/material';
import React from 'react';
import { Translate } from 'react-localize-redux';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';

export const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();

  const redirect = () => {
    dispatch(push('/another'));
  };

  return (
    <section>
      <h1>Sinapsis Base Project</h1>
      <p>Initial content</p>
      <Button variant="contained" onClick={redirect}>
        <Translate id="HelperText.ClickMe" />
      </Button>
    </section>
  );
};
