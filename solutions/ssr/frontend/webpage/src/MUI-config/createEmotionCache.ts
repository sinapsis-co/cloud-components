import createCache, { EmotionCache } from '@emotion/cache';

const createEmotionCache = (): EmotionCache => {
  return createCache({ key: 'css' });
};

export default createEmotionCache;
