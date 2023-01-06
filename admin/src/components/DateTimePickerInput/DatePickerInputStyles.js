import styled from 'styled-components';

export const ContainerDateRangePicker = styled.div`
  position: absolute;
`;

export const Container = styled.div`
  transition-duration: 0.3s;
  
  &:active {
    opacity: 0.5;
  }
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  background: #fff;
  border: 0.2px solid ${props => props.visibleCalendar ? '#392D92' : '#DFDEE7'};
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  border-radius: 30px;
  padding: 10px 16px;
  box-sizing: border-box;
  
  transition: border 0.3s ease-in;
  
  caret-color: transparent;
  
  font-size: 14px;
  line-height: 16px;
  color: #484653;

  &::placeholder {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #ABA9B9;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 12px;
  top: 9px;
  
  &:active  {
    opacity: 0.5;
  }
`;
