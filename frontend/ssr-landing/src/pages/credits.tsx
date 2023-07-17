import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import CreditsList from '@components/credits-list';
import Footer from '@components/footer';
import Header from '@components/header';

const CreditsPage: NextPage = () => {
  return (
    <section id="credits">
      <Head>
        <title>reedy.it | Credits</title>
      </Head>
      <Header />
      <CreditsList />
      <Footer />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default CreditsPage;
