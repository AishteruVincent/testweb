import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 3rem;
  font-weight: 900;
`;

const Paragraph = styled.p`
  color: #000;
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
`;

export default function Author() {
  return (
    <>
    <Paragraph>Test</Paragraph>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Author</Heading>
      </Hero>
    </>
  );
}
