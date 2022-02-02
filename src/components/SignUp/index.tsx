import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import useInput from 'src/hooks/useInput';
import Modal from 'react-modal';

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
const NickInput = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 16px;
  display: flex;
`;
const ValidationLabel = styled.label`
  font-size: 14px;
  float: left;
  color: #ff0a0a;
`;
const EmailInput = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
`;

const EmailBtn = styled.button`
  width: 70px;
  height: 35px;
  float: right;
  border-radius: 6px;
  background-color: #1c00ff;
  color: white;
  border-style: none;
  cursor: pointer;
`;
const EmailDiv = styled.div`
  display: flex;
  width: 510px;
`;
const LectureModal = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
`;

const FavoriteModal = styled.input`
  width: 510px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
`;

const RegisterBtn = styled.button`
  cursor: pointer;
  width: 510px;
  height: 56px;
  color: white;
  border-style: none;
  border-radius: 6px;
  background-color: #1c00ff;
  font-size: 19px;
`;

const Register = () => {
  // const [nick, onChangeNick] = useInput('');
  // const [email, onChangeEmail] = useInput('');
  const [nick, setNick] = useState('');
  const onChangeNick = useCallback((e) => {
    setNick(e.target.value);
  }, []);

  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const emailCheck = (e) => {
    const regExp = /\d{8}@\w[bu]+\.\w[ac]+\.\w[kr]/i;
    // 이메일 형식 : 숫자 8개@bu.ac.kr
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [modalLecture, setModalLecture] = useState(false);
  const modalClose = (e) => {
    setModalLecture(false);
  };
  const modalOpen = (e) => {
    setModalLecture(true);
    return (
      <>
        <Modal />
      </>
    );
  };

  return (
    <>
      <Background>
        <SignUpForm>
          <Div>
            <SignUpLabel>회원가입</SignUpLabel>
            <br /> <br /> <br /> <br /> <br />
            <div>
              <Label htmlFor="user-nick">닉네임</Label>
              <br />
              <NickInput
                name="user-nick"
                required
                onChange={onChangeNick}
                value={nick}
                placeholder="닉네임을 입력해주세요."
              />
            </div>
            <br /> <br /> <br />
            <div>
              <Label htmlFor="user-email">이메일</Label>
              <br />
              <EmailDiv>
                <EmailInput
                  name="user-email"
                  required
                  onChange={onChangeEmail}
                  value={email}
                  placeholder="인증메일이 발송되니 정확히 입력해주세요."
                  onBlur={emailCheck}
                />
                <EmailBtn>인증</EmailBtn>
              </EmailDiv>
              <br />
              <ValidationLabel>ㄴ 대학교 웹메일 계정만 웹메일이 발송 가능합니다.</ValidationLabel>
              <br />
              <ValidationLabel>ㄴ 형식: 학번@bu.ac.kr</ValidationLabel>
            </div>
            <br /> <br /> <br />
            <div>
              <Label htmlFor="user-lecture">전공 선택</Label>
              <LectureModal type="button" onClick={modalOpen} placeholder="최대 2개까지 선택할 수 있습니다.">
                {/* // eslint-disable-next-line react/jsx-boolean-value */}
              </LectureModal>
            </div>
            <br /> <br /> <br />
            <div>
              <Label htmlFor="user-favorite">관심사 선택</Label>
              <FavoriteModal placeholder="#팀플 없음 #학점 잘줌" />
            </div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <RegisterBtn type="submit" onSubmit={onSubmit}>
              가입하기
            </RegisterBtn>
          </Div>
        </SignUpForm>
      </Background>
    </>
  );
};

export default Register;
