import React from 'react';
import styled from '@emotion/styled';
import { ShareContainer } from 'src/components/Share/style';
import { HiOutlineChevronRight } from 'react-icons/hi';
import StarRatings from 'react-star-ratings';
import { AiOutlineHeart } from 'react-icons/ai';

const LectrueCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const LectureCommentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  span:nth-child(1) {
    font-size: 1.3rem;
    font-weight: 500;
  }
  .add {
    display: flex;
    align-items: center;
    color: #5b5b5b;
    span {
      font-size: 1.1rem;
    }
  }
`;

const LectureComment = styled.div`
  display: flex;
  align-items: center;

  .flexContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .flexColumnContainer {
      display: flex;
      flex-direction: column;
    }
  }
`;

const LectureCommentBox = styled.div`
  width: 350px;
  height: 270px;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 4px 10px 2px #ece9f5;
  padding: 0 1rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .topContainer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1.2rem 0 0.8rem 0;

    span:nth-child(1) {
      font-size: 1rem;
      color: #666666;
      margin-bottom: 10px;
    }
    span:nth-child(2) {
      font-size: 0.9rem;
      color: #9e9e9e;
    }

    .LectureHeartContainer {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  hr {
    width: 96%;
    margin: 0 0 0 0rem;
    opacity: 0.2;
  }

  p {
    color: #666666;
    font-size: 0.9rem;
    margin: 2rem 0 1rem 0;
  }

  .bottomContainer {
    padding: 1rem 0;
    span {
      font-size: 0.9rem;
      color: #666666;
      margin-top: 1rem;
    }

    hr {
      margin-bottom: 0.5rem;
    }
  }
`;

const StarContainer = styled.div`
  text-align: center;
  margin: 1rem 0 0 0;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;

  div {
    padding: 0.3rem 0.7rem;
    border-radius: 34px;
    border: 1px solid #9082ff;
  }
  span {
    font-size: 0.8rem;
    color: #1c00ff;
    font-weight: 500;
  }
`;

const LectureCommentCompoent = () => (
  <>
    <ShareContainer>
      <LectrueCommentContainer>
        <LectureCommentTitle>
          <span>많은 사람들이 이 전공을 듣고 있어요!</span>
          <div className="add">
            <span>더 보기</span>
            <HiOutlineChevronRight
              size="1.4rem"
              style={{
                marginLeft: '0.3rem',
              }}
            />
          </div>
        </LectureCommentTitle>
        <LectureComment>
          <div className="flexContainer">
            {[1, 2, 3].map((item) => (
              <div className="flexColumnContainer">
                <LectureCommentBox>
                  <div>
                    <div className="topContainer">
                      <div className="flexColumnContainer">
                        <span>상명 Career Design</span>
                        <span>김승윤 교수님</span>
                      </div>
                      <div className="LectureHeartContainer">
                        <AiOutlineHeart size="1.5rem" color="#9E9E9E" />
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <StarContainer>
                      <StarRatings
                        rating={4}
                        starDimension="25px"
                        starSpacing="2px"
                        starRatedColor="#FE864D"
                        starHoverColor="#FE864D"
                        // changeRating={(rating) => setStarRate(rating)}
                      />
                    </StarContainer>
                    <p>무난한 수업임. 자기 장래희망 관련 검사들도 많이해서 좋음.</p>
                  </div>
                  <div className="bottomContainer">
                    <hr />
                    <span>2021년 1학기 수강생</span>
                  </div>
                </LectureCommentBox>
                <TagContainer>
                  <div>
                    <span>점수 꿀 교양</span>
                  </div>
                </TagContainer>
              </div>
            ))}
          </div>
        </LectureComment>
      </LectrueCommentContainer>
    </ShareContainer>
  </>
);

export default LectureCommentCompoent;
