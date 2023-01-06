import styled from 'styled-components';

export const Container = styled.div`

`;

export const FixedContainer = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  filter: drop-shadow(0px 4px 15px rgba(223, 222, 230, 0.5));
  
  border: 1px solid #DFDEE7;
  border-radius: 40px;
  
  padding: 5px;
  margin-right: 20px;
`;

export const Image = styled.img`
  display: block;
  border-radius: 35px;
`;


export const HeaderContainer = styled.p`
  margin-bottom: 32px;
`;

export const Name = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #484653;
`;

export const DriverLabel = styled.span`
  font-size: 16px;
  line-height: 19px;
  background: linear-gradient(93.27deg, #392D92 3.37%, #2A2263 112.43%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Form = styled.div`
  display: flex;
`;

export const InfoUser = styled.div`
  // display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  margin-bottom: 64px;
`;

export const BlockedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  width: 300px;
`;

export const BlockedStatusContainer = styled.div`
  display: flex;
  align-items: center;
  
  cursor: pointer;
  
  margin-bottom: 12px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const СauseLabel = styled.span`
  display: block;
  
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #7E7B93;
`;

export const Cause = styled.span`
  display: block;
  
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #7E7B93;
`;

export const ImageClear = styled.img`
  margin-right: 10px;
`;

export const ClearLabel = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #484653;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: #484653;
  
  margin: 0 0 12px;
`;

export const Phone = styled.span`
  display: block;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #484653;
  
  margin-bottom: 8px;
`;

export const QtyReadyOrder = styled.span`
  display: block;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #484653;
  
  margin-bottom: 8px;
`;

export const Date = styled.span`
  display: block;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #484653;
  
  margin-bottom: 32px;
`;