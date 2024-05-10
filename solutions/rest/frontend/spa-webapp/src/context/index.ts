import { createContext } from 'react';

import { PaletteMode } from '@mui/material';

export const ColorModeContext = createContext<{ initialMode: PaletteMode; toggleColorMode: () => void }>({
  initialMode: 'dark',
  toggleColorMode: () => {
    // This is intentional
  },
});
