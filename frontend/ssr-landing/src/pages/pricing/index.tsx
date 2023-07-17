import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import Footer from '@components/footer';
import Header from '@components/header';

import Stack from '@mui/material/Stack';

import PlanHeaderText from '@components/plan-header-text';

import Disclaimer from '@components/disclaimer';
import Container from '@components/layout/container';
import PlanItem, { PlanItemType } from '@components/plan/plan-item';

import Switch, { SwitchOption } from '@components/switch';

export const SWITCH_OPTIONS: SwitchOption[] = [
  {
    value: 'monthly',
    label: 'PLAN.SWITCH.TIMEFRAME.MONTHLY',
  },
  {
    value: 'yearly',
    label: 'PLAN.SWITCH.TIMEFRAME.YEARLY',
  },
];

// TODO: This is a mock data, it should be replaced with real data from the backend.
export const Plans: PlanItemType[] = [
  {
    id: 'ello',
    name: 'PLAN.ELLO.TITLE',
    monthlyPrice: 15,
    yearlyPrice: 165,
    image: '/image/plan/Buzz-01.webp',
    secondImage: '/image/plan/Buzz-02.webp',
    description: 'PLAN.ELLO.DESCRIPTION',
    recommendedFor: 'PLAN.ELLO.RECOMMENDED_FOR',
    features: ['PLAN.ELLO.FEATURE.1', 'PLAN.ELLO.FEATURE.2', 'PLAN.ELLO.FEATURE.3'],
    assistanceText: 'PLAN.ELLO.ASSISTANCE',
    guaranteeText: 'PLAN.ELLO.GUARANTEE',
    status: 'active',
    details: {
      description: 'PLAN.ELLO.DETAILS.DESCRIPTION',
      images: [
        '/image/plan/Buzz-01.webp',
        '/image/plan/Buzz-02.webp',
        '/image/plan/Buzz-03.webp',
        '/image/plan/Buzz-04.webp',
      ],
      specs: {
        title: 'PLAN.DETAILS.SPECS',
        items: [
          'PLAN.ELLO.DETAILS.SPECS.1',
          'PLAN.ELLO.DETAILS.SPECS.2',
          'PLAN.ELLO.DETAILS.SPECS.3',
          'PLAN.ELLO.DETAILS.SPECS.4',
          'PLAN.ELLO.DETAILS.SPECS.5',
        ],
      },
      dimensions: {
        title: 'PLAN.DETAILS.SIZE',
        items: ['PLAN.ELLO.DETAILS.SIZE.1', 'PLAN.ELLO.DETAILS.SIZE.2'],
      },
      features: {
        title: 'PLAN.DETAILS.FEATURES',
        items: [
          'PLAN.ELLO.DETAILS.TECH.1',
          'PLAN.ELLO.DETAILS.TECH.2',
          'PLAN.ELLO.DETAILS.TECH.3',
          'PLAN.ELLO.DETAILS.TECH.4',
          'PLAN.ELLO.DETAILS.TECH.5',
          'PLAN.ELLO.DETAILS.TECH.6',
          'PLAN.ELLO.DETAILS.TECH.7',
        ],
      },
      note: 'PLAN.DETAILS.NOTES',
      benefits: [
        'PLAN.DETAILS.BENEFITS.1',
        'PLAN.DETAILS.BENEFITS.2',
        'PLAN.DETAILS.BENEFITS.3',
        'PLAN.DETAILS.BENEFITS.4',
      ],
    },
  },
  {
    id: 'buzz',
    name: 'PLAN.BUZZ.TITLE',
    monthlyPrice: 25,
    yearlyPrice: 275,
    image: '/image/plan/Ello-01.webp',
    secondImage: '/image/plan/Ello-02.webp',
    description: 'PLAN.BUZZ.DESCRIPTION',
    recommendedFor: 'PLAN.BUZZ.RECOMMENDED_FOR',
    features: ['PLAN.BUZZ.FEATURE.1', 'PLAN.BUZZ.FEATURE.2', 'PLAN.BUZZ.FEATURE.3'],
    assistanceText: 'PLAN.BUZZ.ASSISTANCE',
    guaranteeText: 'PLAN.BUZZ.GUARANTEE',
    status: 'recommended',
    details: {
      description: 'PLAN.BUZZ.DETAILS.DESCRIPTION',
      images: [
        '/image/plan/Ello-01.webp',
        '/image/plan/Ello-02.webp',
        '/image/plan/Ello-03.webp',
        '/image/plan/Ello-04.webp',
      ],
      specs: {
        title: 'PLAN.DETAILS.SPECS',
        items: [
          'PLAN.BUZZ.DETAILS.SPECS.1',
          'PLAN.BUZZ.DETAILS.SPECS.2',
          'PLAN.BUZZ.DETAILS.SPECS.3',
          'PLAN.BUZZ.DETAILS.SPECS.4',
          'PLAN.BUZZ.DETAILS.SPECS.5',
          'PLAN.BUZZ.DETAILS.SPECS.6',
          'PLAN.BUZZ.DETAILS.SPECS.7',
        ],
      },
      dimensions: {
        title: 'PLAN.DETAILS.SIZE',
        items: ['PLAN.BUZZ.DETAILS.SIZE.1', 'PLAN.BUZZ.DETAILS.SIZE.2'],
      },
      features: {
        title: 'PLAN.DETAILS.FEATURES',
        items: [
          'PLAN.BUZZ.DETAILS.TECH.1',
          'PLAN.BUZZ.DETAILS.TECH.2',
          'PLAN.BUZZ.DETAILS.TECH.3',
          'PLAN.BUZZ.DETAILS.TECH.4',
          'PLAN.BUZZ.DETAILS.TECH.5',
          'PLAN.BUZZ.DETAILS.TECH.6',
          'PLAN.BUZZ.DETAILS.TECH.7',
          'PLAN.BUZZ.DETAILS.TECH.8',
        ],
      },
      note: 'PLAN.DETAILS.NOTES',
      benefits: [
        'PLAN.DETAILS.BENEFITS.1',
        'PLAN.DETAILS.BENEFITS.2',
        'PLAN.DETAILS.BENEFITS.3',
        'PLAN.DETAILS.BENEFITS.4',
      ],
    },
  },
  {
    id: 'ginger',
    name: 'PLAN.GINGER.TITLE',
    monthlyPrice: 45,
    yearlyPrice: 495,
    image: '/image/plan/Ginger-01.webp',
    secondImage: '/image/plan/Ginger-02.webp',
    description: 'PLAN.GINGER.DESCRIPTION',
    recommendedFor: 'PLAN.GINGER.RECOMMENDED_FOR',
    features: ['PLAN.GINGER.FEATURE.1', 'PLAN.GINGER.FEATURE.2', 'PLAN.GINGER.FEATURE.3'],
    assistanceText: 'PLAN.GINGER.ASSISTANCE',
    guaranteeText: 'PLAN.GINGER.GUARANTEE',
    status: 'active',
    details: {
      description: 'PLAN.GINGER.DETAILS.DESCRIPTION',
      images: [
        '/image/plan/Ginger-01.webp',
        '/image/plan/Ginger-02.webp',
        '/image/plan/Ginger-03.webp',
        '/image/plan/Ginger-04.webp',
      ],
      specs: {
        title: 'PLAN.DETAILS.SPECS',
        items: [
          'PLAN.GINGER.DETAILS.SPECS.1',
          'PLAN.GINGER.DETAILS.SPECS.2',
          'PLAN.GINGER.DETAILS.SPECS.3',
          'PLAN.GINGER.DETAILS.SPECS.4',
          'PLAN.GINGER.DETAILS.SPECS.5',
          'PLAN.GINGER.DETAILS.SPECS.6',
          'PLAN.GINGER.DETAILS.SPECS.7',
          'PLAN.GINGER.DETAILS.SPECS.8',
        ],
      },
      dimensions: {
        title: 'PLAN.DETAILS.SIZE',
        items: ['PLAN.GINGER.DETAILS.SIZE.1', 'PLAN.GINGER.DETAILS.SIZE.2'],
      },
      features: {
        title: 'PLAN.DETAILS.FEATURES',
        items: [
          'PLAN.GINGER.DETAILS.TECH.1',
          'PLAN.GINGER.DETAILS.TECH.2',
          'PLAN.GINGER.DETAILS.TECH.3',
          'PLAN.GINGER.DETAILS.TECH.4',
          'PLAN.GINGER.DETAILS.TECH.5',
          'PLAN.GINGER.DETAILS.TECH.6',
          'PLAN.GINGER.DETAILS.TECH.7',
          'PLAN.GINGER.DETAILS.TECH.8',
        ],
      },
      note: 'PLAN.DETAILS.NOTES',
      benefits: [
        'PLAN.DETAILS.BENEFITS.1',
        'PLAN.DETAILS.BENEFITS.2',
        'PLAN.DETAILS.BENEFITS.3',
        'PLAN.DETAILS.BENEFITS.4',
      ],
    },
  },
  {
    id: 'spank',
    name: 'PLAN.SPANK.TITLE',
    monthlyPrice: 54,
    yearlyPrice: 594,
    image: '/image/plan/Spank-01.webp',
    secondImage: '/image/plan/Spank-02.webp',
    description: 'PLAN.SPANK.DESCRIPTION',
    recommendedFor: 'PLAN.SPANK.RECOMMENDED_FOR',
    features: ['PLAN.SPANK.FEATURE.1', 'PLAN.SPANK.FEATURE.2', 'PLAN.SPANK.FEATURE.3'],
    assistanceText: 'PLAN.SPANK.ASSISTANCE',
    guaranteeText: 'PLAN.SPANK.GUARANTEE',
    status: 'active',
    details: {
      description: 'PLAN.SPANK.DETAILS.DESCRIPTION',
      images: [
        '/image/plan/Spank-01.webp',
        '/image/plan/Spank-02.webp',
        '/image/plan/Spank-03.webp',
        '/image/plan/Spank-04.webp',
      ],
      specs: {
        title: 'PLAN.DETAILS.SPECS',
        items: [
          'PLAN.SPANK.DETAILS.SPECS.1',
          'PLAN.SPANK.DETAILS.SPECS.2',
          'PLAN.SPANK.DETAILS.SPECS.3',
          'PLAN.SPANK.DETAILS.SPECS.4',
          'PLAN.SPANK.DETAILS.SPECS.5',
          'PLAN.SPANK.DETAILS.SPECS.6',
          'PLAN.SPANK.DETAILS.SPECS.7',
          'PLAN.SPANK.DETAILS.SPECS.8',
          'PLAN.SPANK.DETAILS.SPECS.9',
          'PLAN.SPANK.DETAILS.SPECS.10',
          'PLAN.SPANK.DETAILS.SPECS.11',
        ],
      },
      dimensions: {
        title: 'PLAN.DETAILS.SIZE',
        items: ['PLAN.SPANK.DETAILS.SIZE.1', 'PLAN.SPANK.DETAILS.SIZE.2'],
      },
      features: {
        title: 'PLAN.DETAILS.FEATURES',
        items: [
          'PLAN.SPANK.DETAILS.TECH.1',
          'PLAN.SPANK.DETAILS.TECH.2',
          'PLAN.SPANK.DETAILS.TECH.3',
          'PLAN.SPANK.DETAILS.TECH.4',
          'PLAN.SPANK.DETAILS.TECH.5',
          'PLAN.SPANK.DETAILS.TECH.6',
          'PLAN.SPANK.DETAILS.TECH.7',
        ],
      },
      note: 'PLAN.DETAILS.NOTES',
      benefits: [
        'PLAN.DETAILS.BENEFITS.1',
        'PLAN.DETAILS.BENEFITS.2',
        'PLAN.DETAILS.BENEFITS.3',
        'PLAN.DETAILS.BENEFITS.4',
      ],
    },
  },
];

const PricingPage: NextPage = () => {
  const [timeframe, setTimeframe] = useState('monthly');

  return (
    <section id="privacy-policy">
      <Head>
        <title>reedy.it | Pricing</title>
      </Head>
      <Header />
      <Container>
        <Stack
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          direction={{ xs: 'column', sm: 'row' }}
          rowGap={3}
          sx={{ mb: 6 }}
        >
          <PlanHeaderText />
          <Switch active={timeframe} onClick={(value: string) => setTimeframe(value)} options={SWITCH_OPTIONS} />
        </Stack>
        <Stack
          spacing={{ xs: 0, lg: 3 }}
          direction="row"
          alignItems={{ xs: 'flex-start', md: 'flex-end' }}
          sx={{ mb: 3 }}
          columnGap={{ xs: 3, lg: 0 }}
          rowGap={{ xs: 3, lg: 0 }}
          flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        >
          {Plans.map((plan) => (
            <PlanItem
              key={plan.id}
              plan={plan}
              timeframe={timeframe}
              sx={{ width: { xs: '100%', md: '45%', lg: 'auto' } }}
            />
          ))}
        </Stack>
        <Disclaimer />
      </Container>
      <Footer />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default PricingPage;
