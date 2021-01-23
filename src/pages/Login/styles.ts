import styled, { css } from 'styled-components/native';

interface RememberMeBoxProps {
  checked: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 20px 25px;
  justify-content: center;
`;

export const TitleBox = styled.View`
  width: 60%;
  margin-bottom: 30%;
`;

export const RememberMeBox = styled.TouchableOpacity<RememberMeBoxProps>`
  width: 20px;
  height: 20px;
  background-color: #ebebf0;
  ${props =>
    props.checked &&
    css`
      background-color: #fff;
      border-color: #1b1b1f;
      border-width: 6px;
    `}
`;

export const RememberMeText = styled.Text`
  font-family: 'Inter-Regular';
  color: #737380;
  font-size: 13px;
  line-height: 16px;
  padding: 30px 10px;
`;

export const RememberMeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ForgotPassword = styled.Text`
  font-family: 'Inter-Regular';
  color: #737380;
  font-size: 13px;
  line-height: 16px;
  padding: 25px 10px;
`;
export const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
