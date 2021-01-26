import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  background-color: #f4f5f6;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  margin-bottom: 20px;
  padding: 20px 30px;
  flex-direction: row;
  justify-content: space-between;
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

export const CarImage = styled.Image``;

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
