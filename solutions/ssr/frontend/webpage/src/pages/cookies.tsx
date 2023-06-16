import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { FormattedMessage } from 'react-intl';

import Footer from '@components/footer';
import Header from '@components/header';
import IframeCtrl from '@components/iframe-container';

const Cookies: NextPage = () => {
  return (
    <section id="cookies">
      <Head>
        <title>reedy.it | Cookies</title>
      </Head>
      <Header />
      <IframeCtrl
        title={<FormattedMessage id="LEGALS.COOKIES_POLICY" defaultMessage="Cookies Policy" />}
        url="https://www.iubenda.com/privacy-policy/35554845/cookie-policy"
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

export default Cookies;
