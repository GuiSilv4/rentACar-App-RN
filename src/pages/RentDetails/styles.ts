import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const border = 0;

export const Container = styled.View`
  flex: 4;
  background-color: #fff;
  align-items: center;
  padding: 20px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 10}px;
`;

export const CarImage = styled.Image`
  margin-top: 50px;
  margin-bottom: 20px;
  height: 132px;
  width: 280px;
`;

export const Top = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-width: ${border}px;
  padding: 5px;
  margin-bottom: 20px;
`;

export const Brand = styled.Text`
  font-family: 'Archivo-Regular';
  font-style: normal;
  font-size: 12px;
  border-width: ${border}px;
  text-transform: uppercase;
  color: #aeaeb3;
`;

export const DayLabel = styled.Text`
  font-family: 'Archivo-Regular';
  font-style: normal;
  font-size: 12px;
  border-width: ${border}px;
  text-transform: uppercase;
  color: #aeaeb3;
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
  font-size: 25px;
  border-width: ${border}px;
`;

export const Price = styled.Text`
  padding-top: 4px;
  font-family: 'Archivo-Medium';
  color: #dc1637;
  font-size: 25px;
  border-width: ${border}px;
`;

export const SpecsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SpecBox = styled.View`
  background-color: #f4f5f6;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  justify-content: center;
  align-items: center;
  width: 31.5%;
`;

export const SpecIcon = styled(Icon)`
  font-size: 28px;
  color: #47474d;
`;
export const SpecIcon2 = styled(MaterialIcon)`
  font-size: 28px;
  color: #47474d;
`;

export const SpecText = styled.Text`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  color: #7a7a80;
`;

export const FromToContainer = styled.View`
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 0px 23px ${Platform.OS === 'ios' ? 20 : 5}px 23px;
  background-color: #fff;
`;

export const FromContainer = styled.View`
  border-width: 0px;
  justify-content: center;
`;

export const ToContainer = styled.View`
  justify-content: center;
`;

export const FromToLabel = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 12px;
  text-transform: uppercase;
  color: #aeaeb3;
`;

export const FromToInput = styled.TextInput`
  padding-left: 0;
  font-family: 'Inter-Medium';
  color: #dc1637;
  font-size: 16px;
  height: 40px;
  width: 100%;
`;

export const ArrowContainer = styled.View`
  flex-direction: row;
  width: 33%;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled(FeatherIcon)``;

export const ArrowLine = styled.View`
  background-color: #aeaeb3;
  width: 40px;
  height: 2px;
  margin-right: -12px;
`;

export const BottomContainer = styled.View`
  background-color: #f4f5f6;
  align-items: center;
  justify-content: flex-end;
  padding: ${Platform.OS === 'ios' ? 30 : 20}px 20px;
  padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() + 5 : 20}px;
`;

export const FinalPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2px;
  margin-bottom: 20px;
`;

export const PerDayPriceContainer = styled.View``;

export const PerDayPrice = styled.Text`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 16px;
  color: #47474d;
  margin-top: 5px;
`;

export const TotalPrice = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 24px;
  color: #3d3d4d;
`;
