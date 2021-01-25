import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const border = 0;

export const Container = styled.View`
  background-color: #f4f5f6;
  width: 100%;
  padding: 22px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-width: ${border}px;
`;

export const BrandModelContainer = styled.View`
  border-width: ${border}px;
`;

export const PriceContainer = styled.View`
  border-width: ${border}px;
`;
export const Model = styled.Text`
  padding-top: 4px;
  font-family: 'Archivo-Medium';
  color: #47474d;
  font-size: 20px;
  border-width: ${border}px;
`;

export const Price = styled.Text`
  padding-top: 4px;
  font-family: 'Archivo-Medium';
  color: #dc1637;
  font-size: 20px;
  border-width: ${border}px;
`;

export const Mid = styled.View`
  justify-content: center;
  align-items: center;
  border-width: ${border}px;
  margin-top: 15px;
`;

export const Brand = styled.Text`
  font-family: 'Archivo-Regular';
  font-style: normal;
  font-size: 10px;
  border-width: ${border}px;
  text-transform: uppercase;
  color: #aeaeb3;
`;

export const DayLabel = styled.Text`
  font-family: 'Archivo-Regular';
  font-style: normal;
  font-size: 10px;
  border-width: ${border}px;
  text-transform: uppercase;
  color: #aeaeb3;
  border-width: ${border}px;
`;

export const Bottom = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: ${border}px;
`;

export const CarImage = styled.Image`
  border-width: ${border}px;
`;

export const FuelIcon = styled(Icon)`
  font-size: 26px;
  border-width: ${border}px;
`;

export const PageDots = styled.Image`
  border-width: ${border}px;
`;
