import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

export const useIsMobile = (): boolean => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? theme.breakpoints.values.sm > window.innerWidth : false
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(theme.breakpoints.values.sm > window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [theme.breakpoints.values.sm]);

  return isMobile;
};
