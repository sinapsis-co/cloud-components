import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { useState } from 'react';

import { Plans, SWITCH_OPTIONS } from '..';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Disclaimer from '@components/disclaimer';
import Footer from '@components/footer';
import Header from '@components/header';
import Container from '@components/layout/container';
import PlanItemDetail from '@components/plan/plan-item-detail';
import Switch from '@components/switch';

import PlanHeaderText from '@components/plan-header-text';

const PlanDetail: NextPage = () => {
  const [timeframe, setTimeframe] = useState('monthly');

  const router = useRouter();
  const { planName } = router.query;

  return (
    <section id="planDetail">
      <Head>
        <title>reedy.it | Plan Detail</title>
      </Head>
      <Header />
      <Container>
        <Stack
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          direction={{ xs: 'column', md: 'row' }}
          rowGap={3}
          sx={{ mb: 6 }}
        >
          <PlanHeaderText hasLinkBack />
          <Switch active={timeframe} onClick={(value) => setTimeframe(value)} options={SWITCH_OPTIONS} />
        </Stack>
        <Box sx={{ mb: 3 }}>
          <PlanItemDetail plan={Plans.find((plan) => plan.id === planName)} timeframe={timeframe} />
        </Box>
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

export default PlanDetail;
