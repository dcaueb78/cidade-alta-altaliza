import styled from 'styled-components';

const Container = styled.div`
  max-width: 1400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;

  hr {
    border: 0;
    width: 100%;
    height: 1px;
    background: #999;
    margin-bottom: 15px;
    border-radius: 2px;
  }

  h3 {
    margin: 0px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }

  ul {

    margin:4px, 4px;
    padding:4px;
    max-height: 720px;
    overflow-x: hidden;
    overflow-y: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
  .load-more {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    margin: 15px 0 25px 0;
    button {
      border: 0;
      background: none;
      width: 200px;
      background: blue;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
      color: #999;
    }
  }
`;

export default Container;
