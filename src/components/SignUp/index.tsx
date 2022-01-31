import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
  background-color: #f4f4fc;
  text-align: center;
  width: 1920px;
  height: 1080px;
`;
const SignUpForm = styled.form`
  display: inline-block;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 142px;
  width: 642px;
  height: 865px;
  border-radius: 16px;
  background-color: white;
`;

const Div = styled.div`
  width: 510px;
  height: 752px;
  margin: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SignUpLabel = styled.label`
  font-size: 23px;
`;
const NickSubmit = styled.input``;

const NickLabel = styled.label``;

const EmailSubmit = styled.input``;

const EmailLabel = styled.label``;

const EmailBtn = styled.button``;
const LectureModal = styled.div``;

const FavoriteModal = styled.div``;

const RegisterBtn = styled.button``;

const Register = () => (
  <>
    <Background>
      <SignUpForm>
        <Div>
          <SignUpLabel>회원가입</SignUpLabel>
          <div>
            <NickLabel htmlFor="user-nick">닉네임</NickLabel>
            <NickSubmit />
          </div>
          <div>
            <EmailLabel htmlFor="user-email">이메일</EmailLabel>
            <EmailSubmit />
            <EmailBtn>인증</EmailBtn>
          </div>
          <div>
            <LectureModal />
          </div>
          <div>
            <FavoriteModal />
          </div>
        </Div>
      </SignUpForm>
    </Background>
  </>
);

export default Register;
