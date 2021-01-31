import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface periodContainerProps {
  onGoing: boolean;
}

export const Container = styled.View`
  background-color: #f4f5f6;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  padding: 20px 30px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

export const PeriodContainer = styled.View<periodContainerProps>`
  background-color: #f4f5f6;
  border-top-width: 2px;
  border-top-color: #fff;
  padding: 12px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  ${props =>
    props.onGoing &&
    css`
      background-color: #daf3e5;
      justify-content: center;
    `}
`;

export const OngoingText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #03b352;
`;

export const Label = styled.Text`
  color: #aeaeb3;
  font-family: 'Archivo-Regular';
  font-size: 10px;
  text-transform: uppercase;
`;

export const Model = styled.Text`
  margin-top: 3px;
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #47474d;
  margin-bottom: 15px;
`;

export const Price = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #dc1637;
`;

export const CarImage = styled.Image`
  width: 180px;
  height: 85px;
`;

export const LeftContainer = styled.View``;

export const FuelTypeIcon = styled(Icon)`
  margin-left: 20px;
  font-size: 25px;
  color: #aeaeb3;
`;

export const LeftBottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelPriceContainer = styled.View``;

export const FromToContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FromToDate = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #47474d;
`;

export const ArrowRight = styled(Icon)`
  color: #aeaeb3;
  margin: 0 10px;
`;
