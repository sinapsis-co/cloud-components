import React, { FunctionComponent } from 'react';

import { AutocompleteOption } from '@webapp/components/form/autocomplete';
import FullscreenLoading from '@webapp/components/fullscreen-loading';
import IconAutocomplete from '@webapp/components/icon-autocomplete';
import { icons } from '@webapp/components/icon-autocomplete/icons';
import ThemeToggle from '@webapp/components/theme-toggle';

const HomePage: FunctionComponent = () => {
  const [selectedIcon, setSelectedIcon] = React.useState<AutocompleteOption>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <ThemeToggle />
      <IconAutocomplete iconList={icons} onSelect={() => setSelectedIcon(selectedIcon)} />
      {loading ? <FullscreenLoading isFullscreen /> : null}
    </div>
  );
};

export default HomePage;
