import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styled from 'styled-components';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>sinapsis-base-template</title>
      </Head>
      <Section>
        <h1>Sinapsis Base Project</h1>
        <p>Initial content</p>
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
