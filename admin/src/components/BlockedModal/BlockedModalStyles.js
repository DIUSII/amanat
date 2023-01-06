import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  border: 0.2px solid #DFDEE7;
  box-shadow: 0px 5.70197px 34.2118px rgba(171, 169, 185, 0.5);
  border-radius: 60px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 42px;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  
  opacity: 0;
  z-index: -1;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  top: 0;
  
  background-color: rgba(0, 0, 0, 0.5);
  
  ${props => props.active && `
    opacity: 1; 
    z-index: 1;
  `}
`;

export const Button = styled.button`
  width: 420px;
  
  background: linear-gradient(93.27deg, #392D92 3.37%, #2A2263 112.43%);
  border-radius: 40px;
  outline: none;
  
  text-align: center;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: #fff;
  
  padding: 22px;
  
  &:active {
    opacity: 0.5;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

export const Textarea = styled.textarea`
  width: 566px;
  height: 135px;
  
  border: 0.2px solid #DFDEE7;
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  border-radius: 30px;
  outline: none;
  
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  
  padding: 24px;
  margin-bottom: 32px;
  
  &::placeholder {
    color: #ABA9B9;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #484653;
  
  margin: 0;
`;

export const Image = styled.img`
`;

export const Space = styled.img`
  width: 32px;
  height: 32px;
  opacity: 0;
`;