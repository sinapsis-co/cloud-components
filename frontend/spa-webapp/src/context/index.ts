import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export const ColorModeContext = createContext<{ initialMode: PaletteMode; toggleColorMode: () => void }>({
  initialMode: 'dark',
  toggleColorMode: () => {
    // This is intentional
  },
});
