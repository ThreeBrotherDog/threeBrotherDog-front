import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Top = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.PUBLIC_WHITE};
  width: 1920px;
  height: 69px;
`;
const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
  height: 100%;
`;
// const Logo = styled.div
const LoginBtn = styled.button`
  margin-right: 20px;
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  cursor: pointer;
  width: 130px;
  height: 40px;
  color: ${(props) => props.theme.PUBLIC_BLUE};
  border-color: ${(props) => props.theme.PUBLIC_BLUE};
  background-color: white;
`;
const SignUpBtn = styled.button`
  margin-right: 20px;
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  cursor: pointer;
  width: 130px;
  height: 40px;
  color: white;
  border-style: none;
  background-color: ${(props) => props.theme.PUBLIC_BLUE};
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
  color: ${(props) => props.theme.PUBLIC_BLUE};
`;

const NextLink = styled.a`
  color: ${(props) => props.theme.PUBLIC_BLUE};
  text-decoration: none;
`;

const Header = () => (
  <Top>
    <Head>
      <Logo>coclass</Logo>
      <Ul>
        <Li>
          <Link href="/" passHref>
            <NextLink>메인</NextLink>
          </Link>
        </Li>

        <Li>
          <Link href="/" passHref>
            <NextLink>강의평</NextLink>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <NextLink>마이페이지</NextLink>
          </Link>
        </Li>
      </Ul>
      <div className="btn">
        <LoginBtn>로그인</LoginBtn>
        <Link href="/signup" passHref>
          <SignUpBtn>회원가입</SignUpBtn>
        </Link>
      </div>
    </Head>
  </Top>
);
export default Header;
