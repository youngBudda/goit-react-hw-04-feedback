import styled from 'styled-components';

export const StyledFeedbackOptions = styled.div`
  margin-bottom: 50px;

  button {
    width: 100px;
    height: 40px;
    margin: 0 3px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }

  button.bad {
    background-color: #f8365b;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
      rgb(248, 54, 91) 0px 0px 0px 1px;
  }

  button.good {
    background-color: #ffb332;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
      rgb(255, 179, 50) 0px 0px 0px 1px;
  }

  button.neutral {
    background-color: #67baf7;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
      rgb(103, 186, 247) 0px 0px 0px 1px;
  }
`;
