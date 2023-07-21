import { Button } from '@mui/material';
import { ColorModeContext } from '@webapp/context';
import { FunctionComponent, useContext } from 'react';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const context = useContext(ColorModeContext);
  return (
    <div>
      <Button variant="contained" onClick={context.toggleColorMode}>
        Change Mode
      </Button>
    </div>
  );
};

export default HomePage;
