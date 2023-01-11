import React from 'react';
import { CustomButton } from '../../components/button';

export const AnotherPage = (): React.ReactElement => {
  return (
    <section>
      <h1>Sinapsis Base Project</h1>
      <p>Secondary content</p>
      <CustomButton translateId="HelperText.Home" url="/" />
    </section>
  );
};
