import styled from 'styled-components';

export const BackgroundStylesHeaders = styled.div`
  background-color: #FBFBFF;
  border: 1px solid #DFDEE7;
  border-left: none;
  border-right: none;
`;

export const BackgroundStyles = styled.div`
  border-bottom: 1px solid #DFDEE7;
`;

export const FixedContainer = styled.div`
  max-width: 1320px;
  width: 100%;
  box-sizing: border-box;
    
  display: grid;
  grid-template-columns: 90px 1.5fr 1fr 1fr 1fr 1fr;
  ${props => props.alignCenter && 'align-items: center;'}
  gap: 20px;
 
  padding: 14px 0;
  margin: 0 auto;
`;

export const LabelTHead = styled.span`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #7E7B93;
  margin-right: 8px;
  ${({disabledButtonMargin}) => !disabledButtonMargin && 'margin-bottom: 8px;'}
`;

export const Arrow = styled.img`
  width: 12px;
  height: 8px;
  ${props => props.rotate && 'transform: rotate(180deg);'}
  ${props => props.opacity && 'opacity: 0.5;'}
`;

export const Table = styled.table`
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;
`;

export const TRow = styled.tr`
  vertical-align: top;
  border: none;
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #484653;
`;

export const GroupArrow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const RowHeader = styled.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 8px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  background: #fff;
  border: 0.2px solid #DFDEE7;
  box-shadow: 0px 4px 15px rgba(223, 222, 230, 0.5);
  border-radius: 30px;
  padding: 10px 16px;
  outline: none;
  box-sizing: border-box;

  transition: border 0.3s ease-in;

  font-size: 14px;
  line-height: 16px;
  color: #484653;

  &::placeholder {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #ABA9B9;
  }

  &:hover, &:focus {
    border: 0.2px solid #392D92;
  }
`;


