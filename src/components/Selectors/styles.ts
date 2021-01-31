import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

interface ButtonsContainerProps {
  size?: number;
  selected: boolean;
}

export const Container = styled.View`
  background: #f4f5f6;
  width: 100%;
  flex-direction: row;
  padding: 4px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View<ButtonsContainerProps>`
  background-color: #f4f5f6;
  justify-content: center;
  align-items: center;
  padding: 12px 23px;
  width: ${props => props.size && (width - 50 - 8) / props.size}px;
  ${props =>
    props.selected &&
    css`
      background-color: #ffffff;
    `}
`;
export const ButtonText = styled.Text<ButtonsContainerProps>`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #aeaeb3;
  ${props =>
    props.selected &&
    css`
      color: #47474d;
    `}
`;

export const ButtonPressable = styled.TouchableOpacity``;

export const FuelIcon = styled(Icon)<ButtonsContainerProps>`
  font-size: 25px;
  margin-bottom: 5px;
  color: #aeaeb3;
  ${props =>
    props.selected &&
    css`
      color: #dc1637;
    `}
`;
