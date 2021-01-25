import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';

interface fromToProps {
  picked: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #1b1b1f;
`;

export const TopPageContainer = styled.View`
  width: 100%;
  background-color: #1b1b1f;
  justify-content: center;
  height: ${Platform.OS === 'ios' ? 30 : 20}%;
  padding: 0px 25px;
  border-width: 0px;
  border-color: #fff;
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 30 : 0}px;
  color: #fff;
  font-family: 'Archivo-SemiBold';
  width: 70%;
  font-size: 30px;
  line-height: 34px;
  border-width: 0px;
  border-color: #fff;
`;

export const FromToContainer = styled.View`
  padding: 0px 25px 20px 25px;
  background-color: #1b1b1f;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  border-width: 0px;
  border-color: #fff;
  width: 100%;
`;

export const BottonPageContainer = styled.View`
  padding: 20px 25px;
  background-color: #fff;
  flex: 1;
  justify-content: flex-start;
`;

export const FromContainer = styled.View`
  width: 33%;
  border-width: 0px;
  border-color: #fff;
  justify-content: center;
`;

export const ToContainer = styled.View`
  width: 33%;
  justify-content: center;
`;

export const ArrowContainer = styled.View`
  flex-direction: row;
  width: 33%;
  justify-content: center;
  align-items: center;
`;

export const FromToLabel = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 12px;
  text-transform: uppercase;
  color: #7a7a80;
  margin-bottom: -8px;
`;

export const FromToInput = styled.TextInput<fromToProps>`
  padding-left: 0;
  font-family: 'Inter-Regular';
  color: #fff;
  font-size: 14px;
  height: 40px;
  width: 100%;
  ${props =>
    props.picked &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #7a7a80;
    `}
`;

export const ArrowIcon = styled(FeatherIcon)``;

export const ArrowLine = styled.View`
  background-color: #7a7a80;
  width: 40px;
  height: 2px;
  margin-right: -12px;
`;
