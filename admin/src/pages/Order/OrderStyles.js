import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
`;

export const TipContainer = styled.div`
  margin-bottom: 32px;
`;

export const PurpleText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background: linear-gradient(93.27deg, #392D92 3.37%, #2A2263 112.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const GrayText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #484653;
`;

export const Id = styled.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: #484653;
  
  margin: 0 0 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const ChangeStatusContainer = styled.div`
  width: 320px;
  height: fit-content;
  
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: #FFFFFF;
  border: 0.2px solid #DFDEE7;
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  border-radius: 30px;
  
  padding: 16px 14px 16px 24px;
  margin-right: 132px;  
  
  &:active {
    opacity: 0.3;
  }
`;

export const ChangeStatusLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 136%;
  color: #484653;
`;

export const InfoContent = styled.div`
  &:nth-child(2) {
    margin-right: 132px;
  }
`;

export const Title = styled.span`
  display: block;
  
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #484653;
  
  margin-bottom: 8px;
  
  &:nth-child(2) {
    margin-bottom: 16px;
  }
`;

export const SubTitle = styled.span`
  display: block;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #484653;
  
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 315px;
  
  border: 1px solid #392D92;
  border-radius: 30px;
  outline: none;
  
  cursor: pointer;
  
  text-align: center;
  
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.2px;
  background: linear-gradient(93.27deg, #392D92 3.37%, #2A2263 112.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  padding: 12px 0;
  
  &:active {
    opacity: 0.3;
  }
`;

export const StatusContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: #fff;
  border: 1px solid #FBFBFF;
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  border-radius: 60px;
  
  padding: 36px;
`;

export const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusLabel = styled.span`
  display: block;
  
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #484653;

  margin-bottom: 8px;
`;

export const StatusDate = styled.span`
  display: block;
  
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #484653;

  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #392D92;
  
  border-radius: 50%;
`;


