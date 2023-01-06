import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  border-radius: 40px;
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  
  padding: 4px 64px;
  margin: 16px auto 40px;
`;

export const ContainerImage = styled.div`
  width: 210px;
`;

export const Image = styled.img`
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  
  margin-right: 56px;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const Item = styled.li`
  width: 80px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.active ? '#392D92' : '#484653'};
  
  cursor: pointer;
  
  transition: all 0.3s ease-in;
  
  &:hover {
    color: #392D92;
  }
`;

export const Button = styled.button`
  text-align: center;
  background: linear-gradient(93.27deg, #392D92 3.37%, #2A2263 112.43%);
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  border-radius: 30px;
  border: none;
  outline: none;
  
  cursor: pointer;
  
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  
  padding: 10px 32.5px;
  
  &:active {
    opacity: 0.5;
  }
`;
