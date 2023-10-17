import { FunctionComponent } from 'react';

import ThemeToggle from '@webapp/components/theme-toggle';

const HomePage: FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
