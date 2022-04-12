import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

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

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;


export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Nav>
        <div>
        <Link href='/' passHref>
          <StyledLink>NXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/goals' passHref>
        <StyledLink>Goals</StyledLink>
        </Link>
        <Link href='/' passHref>
        <StyledLink>Achievements</StyledLink>
        </Link>
        <Link href='/' passHref>
        <StyledLink>Challenges</StyledLink>
        </Link>
        <Link href='/' passHref>
        <StyledLink>Next Steps</StyledLink>
        </Link>
      </div>
        </Nav>
      </Hero>
    </>
  );
}
