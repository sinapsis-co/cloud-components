import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { FormattedMessage } from 'react-intl';

import Footer from '@components/footer';
import Header from '@components/header';
import IframeCtrl from '@components/iframe-container';

const PrivacyPolicy: NextPage = () => {
  return (
    <section id="privacy-policy">
      <Head>
        <title>reedy.it | Privacy Policy</title>
      </Head>
      <Header />
      <IframeCtrl
        title={<FormattedMessage id="LEGALS.COOKIES_POLICY" defaultMessage="Privacy Policy" />}
        url="https://www.iubenda.com/privacy-policy/35554845"
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

export default PrivacyPolicy;
