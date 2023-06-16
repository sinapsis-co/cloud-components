import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FormattedMessage } from 'react-intl';
import { fadeIn } from '../framer/index';
import { ContentWrapper, HeroBannerContainer, TextWrapper } from './styled';

import Image from 'next/image';

interface HeroBannerProps {
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ className }) => {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  const [contentRef, contentInView] = useInView({ rootMargin: '-100px 0px', triggerOnce: true });

  return (
    <motion.div
      ref={contentRef}
      initial="hidden"
      animate={contentInView ? 'visible' : 'hidden'}
      variants={fadeIn}
      style={{ position: 'relative', zIndex: 10 }}
    >
      <HeroBannerContainer className={className}>
        <Stack
          direction={upMd ? 'row' : 'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={theme.spacing(4)}
          width={'100%'}
        >
          <ContentWrapper>
            <TextWrapper>
              <Typography variant="h1" component="h1">
                <FormattedMessage id="HERO_BANNER.TITLE" values={{ separator: <br /> }} />
              </Typography>
              <Typography variant="caption" component="p" fontWeight={400} fontSize={24} lineHeight={'28px'}>
                <FormattedMessage id="HERO_BANNER.DESCRIPTION" values={{ separator: <br /> }} />
              </Typography>
            </TextWrapper>
            <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
              <FormattedMessage id="COMMON.REGISTER" />
            </Button>
          </ContentWrapper>

          <div className="wrapper-hero-img">
            <Image src={'/image/content/hero-image.webp'} alt="Main image" fill loading="eager" />
          </div>
        </Stack>
      </HeroBannerContainer>
    </motion.div>
  );
};

export default HeroBanner;
