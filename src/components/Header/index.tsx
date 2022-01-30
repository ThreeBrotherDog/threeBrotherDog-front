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
const BtnOne = styled.button`
  margin-right: 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 130px;
  height: 40px;
  color: #1c00ff;
  border-color: #1c00ff;
  background-color: white;
`;
const BtnTwo = styled.button`
  margin-right: 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 130px;
  height: 40px;
  color: white;
  border-color: #1c00ff;
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
        <BtnOne>로그인</BtnOne>
        <BtnTwo>회원가입</BtnTwo>
      </div>
    </Head>
  </Top>
);
export default Header;
