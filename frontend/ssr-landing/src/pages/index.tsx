import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { styled } from '@mui/system';

import { useMediaQuery, useTheme } from '@mui/material';

import Box from '@mui/material/Box';

import AboutReedy from '@components/about-reedy';
import Footer from '@components/footer';
import { fadeIn } from '@components/framer';
import Header from '@components/header';
import HeroBanner from '@components/hero-banner';
import KeyBenefits from '@components/key-benefits';
import Video from '@components/video';

import HomeCredits from '@components/credits-logos';
import HowItWorks from '@components/how-it-works';
import PricingBanner from '@components/pricing-banner';
import SustainabilitySection from '@components/sustainability';

const HomePage: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [videoRef, videoInView] = useInView({ rootMargin: '-10px 0px', triggerOnce: true });
  const [aboutReedyRef, aboutReedyInView] = useInView({ rootMargin: '-100px 0px', triggerOnce: true });
  const [keyBenefitsRef, keyBenefitsInView] = useInView({ rootMargin: '100px 0px', triggerOnce: true });
  const [howItWorksRef, howItWorksInView] = useInView({ rootMargin: '100px 0px', triggerOnce: true });

  return (
    <section id="home-page">
      <Head>
        <title>reedy.it</title>
      </Head>
      <Header />
      <HeroBanner />

      <GiganticLogoBackground image={'/image/logo/gigantic-logo.svg'}>
        <motion.div ref={videoRef} initial="hidden" animate={videoInView ? 'visible' : 'hidden'} variants={fadeIn}>
          <Video />
        </motion.div>
      </GiganticLogoBackground>

      <DotsPatternBackground className="benefits-wrapper">
        <motion.div
          ref={keyBenefitsRef}
          initial="hidden"
          animate={keyBenefitsInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          <KeyBenefits />
        </motion.div>
      </DotsPatternBackground>

      <DotsPatternBackground>
        <motion.div
          ref={howItWorksRef}
          initial="hidden"
          animate={howItWorksInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          <HowItWorks />
        </motion.div>
      </DotsPatternBackground>

      <PricingBanner />

      <ReedyLogoPatternBackground
        image={isMobile ? '/image/patterns/logo-pattern-mobile.webp' : '/image/patterns/logo-pattern.webp'}
      >
        <motion.div
          ref={aboutReedyRef}
          initial="hidden"
          animate={aboutReedyInView ? 'visible' : 'hidden'}
          variants={fadeIn}
        >
          <AboutReedy />
        </motion.div>
      </ReedyLogoPatternBackground>

      <HomeCredits />

      <SustainabilitySection />

      <Footer />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;

export const GiganticLogoBackground = styled(Box)<{ image: string }>(({ theme, image }) => {
  return {
    padding: '32px 0',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '0',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '5',
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: '64px 0 100px 0',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-8rem',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-10rem',
      padding: '64px 0',
    },
    [theme.breakpoints.up(2400)]: {
      padding: '128px 0',
      backgroundSize: 'contain',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none',
      '&:before': {
        content: `url(${image})`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200%',
      },
    },
  };
});

export const DotsPatternBackground = styled(Box)(({ theme }) => {
  return {
    backgroundImage: 'radial-gradient(#d8d8d8 2px, transparent 0)',
    backgroundSize: '35px 35px',
    margin: 'auto',
    width: '95%',
    maxWidth: '750px',
    position: 'relative',

    '&.benefits-wrapper': {
      marginTop: '-30rem',
      padding: '150px 0 50px 0',
      [theme.breakpoints.up(1100)]: {
        padding: '400px 0 0 0',
        marginTop: '-27rem',
      },
      [theme.breakpoints.up(1440)]: {
        padding: '350px 0 0 0',
        marginTop: '-30rem',
      },
      [theme.breakpoints.up(2000)]: {
        padding: '350px 0 160px 0',
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '-15rem',
        padding: '200px 0 50px',
      },
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '900px',
      backgroundSize: '25px 25px',
    },
    [theme.breakpoints.up(1100)]: {
      width: '85%',
      maxWidth: '1400px',
    },
    [theme.breakpoints.up(1440)]: {
      backgroundSize: '22px 22px',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '25px 25px',
      width: '90%',
    },
  };
});

export const ReedyLogoPatternBackground = styled(Box)<{ image: string }>(({ theme, image }) => {
  return {
    padding: '270px 0 190px 0',
    backgroundImage: `url(${image})`,
    backgroundAttachment: 'scroll',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '10',
    [theme.breakpoints.up(1600)]: {
      padding: '300px 0 150px 0',
      backgroundPosition: 'center -10%',
    },
    [theme.breakpoints.up(1900)]: {},
    [theme.breakpoints.up(2000)]: {
      backgroundPosition: 'center top',
    },
    [theme.breakpoints.down(1400)]: {
      backgroundPosition: '45%',
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '40%',
      padding: '230px 0 100px 0',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '25% 100%',
      padding: '180px 0 100px 0',
    },
  };
});
