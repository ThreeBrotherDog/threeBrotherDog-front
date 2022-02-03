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
const SubUl = styled.ul`
  margin-top: 7px;
  background-color: #fff;
  display: none;
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

const MajorModal = () => (
  <Background>
    <Div>
      <Label>전공을 선택해주세요</Label>
      <LabelSub>선택할 수 있는 전공은 최대 2개까지 선택할 수 있어요.</LabelSub>
      <MenuDiv>
        <ul>
          {' '}
          공과대학
          <li>소프트웨어학과</li>
          <li>데이터</li>
          <li>소프트웨어학과</li>
        </ul>

        <CompleteBtn>완료</CompleteBtn>
      </MenuDiv>
    </Div>
  </Background>
);

export default MajorModal;
