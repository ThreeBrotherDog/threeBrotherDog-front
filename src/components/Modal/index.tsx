import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
  background-color: white;
  width: 745px;
  height: 570px;
`;

const Div = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 23px;
`;
const LabelSub = styled.label`
  font-size: 16px;
  font-color: gray;
`;
const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Ul = styled.ul`
  width: 150px;
  text-align: center;
`;

const CompleteBtn = styled.button`
  cursor: pointer;
  width: 370px;
  height: 56px;
  color: white;
  border-style: none;
  border-radius: 6px;
  background-color: #1c00ff;
  font-size: 19px;
`;

const MainUl = styled.ul`
  width: 300px;
  overflow: hidden;
  margin: 150px auto;
`;
const MainLi = styled.li`
  width: 100%;
  text-align: center;
  line-height: 40px;
  background-color: #5778ff;
  transition-duration: 0.5s;
`;
const SubUl = styled.ul`
  height: 0;
  overflow: hidden;
`;
const SubLi = styled.li`
  line-height: 50px;
  background-color: #94a9ff;
  height: 250px;
  transition-duration: 1s;
`;
const A = styled.a`
  color: #fff;
`;
const MajorModal = () => (
  <Background>
    <Div>
      <Label>전공을 선택해주세요</Label>
      <LabelSub>선택할 수 있는 전공은 최대 2개까지 선택할 수 있어요.</LabelSub>
      <MenuDiv>
        <MainUl>
          <MainLi>
            <a href="#">MENU1</a>
            <SubUl>
              <SubLi>
                <a href="#">submenu01</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu02</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu03</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu04</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu05</a>
              </SubLi>
            </SubUl>
          </MainLi>
        </MainUl>
        <MainUl>
          <MainLi>
            <a href="#">MENU1</a>
            <SubUl>
              <SubLi>
                <a href="#">submenu01</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu02</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu03</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu04</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu05</a>
              </SubLi>
            </SubUl>
          </MainLi>
        </MainUl>
        <MainUl>
          <MainLi>
            <a href="#">MENU1</a>
            <SubUl>
              <SubLi>
                <a href="#">submenu01</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu02</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu03</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu04</a>
              </SubLi>
              <SubLi>
                <a href="#">submenu05</a>
              </SubLi>
            </SubUl>
          </MainLi>
        </MainUl>

        <CompleteBtn>완료</CompleteBtn>
      </MenuDiv>
    </Div>
  </Background>
);

export default MajorModal;
