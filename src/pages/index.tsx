import React from 'react';
import Header from 'src/components/Header';
import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';
import { ShareContainer } from 'src/components/Share/style';
import { HiOutlineChevronRight } from 'react-icons/hi';
import StarRatings from 'react-star-ratings';

const SearchContainer = styled.div`
  width: 100%;
  height: 480px;
  background-color: #f4f4fc;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
`;

const SearchFlexContainer = styled(ShareContainer)`
  display: flex;
  transform: translateY(-60%);

  .searchInput {
    width: 100%;
    height: 60px;
    padding: 0rem 1.5rem;
    border-radius: 6px;
    border: none;
    font-size: 1rem;

    &::placeholder {
      color: #a4a4a4;
    }

    &:focus {
      outline: none;
    }
  }

  .searchBtn {
    background-color: #1c00ff;
    color: #fff;
    width: 120px;
    height: 60px;
    border-radius: 0 6px 6px 0;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const RankContainer = styled(ShareContainer)`
  display: flex;
  flex-direction: column;
  transform: translateY(-40%);

  .title {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const RankFlexContainer = styled.div`
  width: 100%;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 4px 30px 2px #ece9f5;
  background-color: #fff;

  .container {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 1.1rem;
    position: relative;

    .number {
      color: #1c00ff;
      width: 5%;
      padding-left: 1.5rem;
    }
    .lecture {
      width: 35%;
    }
    .lecture:after {
      content: '';
      position: absolute;
      right: 61%;
      height: 30px;
      bottom: 15px;
      width: 1px;
      background-color: #f2f2f2;
    }
    .professorContainer {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  hr {
    width: 95%;
    margin: 0 0 0 1rem;
    opacity: 0.1;
  }
`;

const IconContainer = styled.div`
  padding-right: 3rem;
  cursor: pointer;
`;

const LectrueCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Home = () => (
  <>
    <Header />
    <SearchContainer>
      <SearchFlexContainer>
        <input type="text" placeholder="찾고싶은 강의를 검색해 보세요!" className="searchInput" />
        <button className="searchBtn">검색</button>
      </SearchFlexContainer>
    </SearchContainer>
    <RankContainer>
      <span className="title">교양 실시간 순위 BEST6</span>
      <RankFlexContainer>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <>
            <div className="container">
              <span className="number">1</span>
              <span className="lecture">러시아문화의이해</span>
              <div className="professorContainer">
                <span>임진목 교수님</span>
                <IconContainer>
                  <AiOutlineHeart size="1.5rem" color="#666666" />
                </IconContainer>
              </div>
            </div>
            <hr />
          </>
        ))}
      </RankFlexContainer>
    </RankContainer>
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
              <span>test</span>
            </div>
          </div>
        </LectureComment>
      </LectrueCommentContainer>
    </ShareContainer>
  </>
);
export default Home;
