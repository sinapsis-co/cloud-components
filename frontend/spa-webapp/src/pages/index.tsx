import { FunctionComponent, useState } from 'react';

import { AutocompleteOption } from '@webapp/components/form/autocomplete';
import IconAutocomplete from '@webapp/components/icon-autocomplete';
import { icons } from '@webapp/components/icon-autocomplete/icons';
import ThemeToggle from '@webapp/components/theme-toggle';

const HomePage: FunctionComponent = () => {
  const [selectedIcon, setSelectedIcon] = useState<AutocompleteOption>();
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
      }}
    >
      <ThemeToggle />
      <IconAutocomplete
        iconList={icons}
        onSelect={(selectedIcon) => {
          setSelectedIcon(selectedIcon);
        }}
      />
      {selectedIcon && (
        <div>
          <div className="material-symbols-rounded">{selectedIcon.value}</div>
          <div>{selectedIcon.label}</div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
