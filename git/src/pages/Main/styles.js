import styled from 'styled-components';


export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;
  background: #7159c1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    & + li {
      border-top: 1px solid #eee;
    }

  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0 10px 0;
  padding: 10px; 
  border: 1px solid #7159c1;
  border-radius: 10px;
  background: #eee;
  transition: 1s;
  a {
    text-decoration: none;
    color: #7159c1;
    transition: 1s;
  }

  &:hover {
    background: #7159c1;
    color: white;

    a {
      color: white;
    }
  }
`;