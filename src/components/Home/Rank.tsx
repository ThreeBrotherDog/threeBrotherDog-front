import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';
import { ShareContainer } from '../Share/style';

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

const Rank = () => (
  <>
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
  </>
);

export default Rank;
