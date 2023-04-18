import { useState, useEffect } from 'react';
import { size } from '../components/styles';

interface WindowSize {
  width?: number;
  height?: number;
}

export default function useIsMobile(): boolean {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize.width ? windowSize.width <= size.laptopS : false;
}
