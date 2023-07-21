import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { FormattedMessage } from 'react-intl';

import Footer from '@components/footer';
import Header from '@components/header';
import IframeCtrl from '@components/iframe-container';

const TermsAndConditions: NextPage = () => {
  return (
    <section id="terms-and-conditions">
      <Head>
        <title>reedy.it | Terms & Conditions</title>
      </Head>
      <Header />
      <IframeCtrl
        title={<FormattedMessage id="LEGALS.TERMS_CONDITIONS" defaultMessage="Terms & Conditions" />}
        url="https://www.iubenda.com/termini-e-condizioni/35554845"
      />
      <Footer />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default TermsAndConditions;
