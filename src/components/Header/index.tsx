import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Top = styled.div`
  background-color: #FFFFF;
  width: 1920px;
  height: 69px;
`;
const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
`;
// const Logo = styled.div
const LoginBtn = styled.button`
  margin-right: 20px;
  border-radius: 6px;
  cursor: pointer;
  width: 130px;
  height: 40px;
  color: #1c00ff;
  border-color: #1c00ff;
  background-color: white;
`;
const SignUpBtn = styled.button`
  margin-right: 20px;
  border-radius: 6px;
  cursor: pointer;
  width: 130px;
  height: 40px;
  color: white;
  border-style: none;
  background-color: #1c00ff;
`;
const Ul = styled.ul`
  justify-content: space-around;
  list-style: none;
`;
const Li = styled.li`
  float: left;
  margin-right: 40px;
`;
const Logo = styled.div`
  font-size: 30px;
  color: #1c00ff;
`;

const NextLink = styled.a`
  color: #1c00ff;
  text-decoration: none;
`;

const Header = () => (
  <Top>
    <Head>
      <Logo>coclass</Logo>
      <Ul>
        <Li>
          <Link href="/" passHref>
            <NextLink>main</NextLink>
          </Link>
        </Li>

        <Li>
          {' '}
          <Link href="/" passHref>
            <NextLink>Lecture review</NextLink>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <NextLink>myPage</NextLink>
          </Link>
        </Li>
      </Ul>
      <div className="btn">
        <LoginBtn>로그인</LoginBtn>
        <SignUpBtn>회원가입</SignUpBtn>
      </div>
    </Head>
  </Top>
);
export default Header;
