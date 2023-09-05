import styled from 'styled-components';

export const StyledStatistics = styled.ul`
  display: flex;
  justify-content: center;
  row-gap: 20px;
  flex-wrap: wrap;
  list-style: none;
  width: 600px;
  margin: 0 auto;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: #525252;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  li {
    width: 150px;
    padding: 20px 0;
  }

  li:nth-child(1) {
    color: #ffb332;
  }

  li:nth-child(2) {
    color: #67baf7;
  }

  li:nth-child(3) {
    color: #f8365b;
  }

  li:nth-child(4) {
    width: 160px;
    padding: 20px 0;
    border: 2px solid #989898;
    border-radius: 15px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(152, 152, 152) 0px 0px 0px 3px;
  }

  li:nth-child(5) {
    width: 100%;
    color: #989898;
  }

  span {
    color: #525252;
    margin-left: 2px;
  }

  li.positive span {
    color: #ffb332;
  }

  li.negative span {
    color: #f8365b;
  }

  li.neutral span {
    color: #67baf7;
  }
`;
