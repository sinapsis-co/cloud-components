import { Theme, useMediaQuery } from '@mui/material';

export const useIsTablet = (): boolean => useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
