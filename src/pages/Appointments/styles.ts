import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #1b1b1f;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 24px 25px;
  height: ${Platform.OS === 'ios' ? 113 : 90}px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 32 : 18}px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #fff;
  font-size: 25px;
`;

export const CarsListView = styled.ScrollView`
  flex: 1;
`;

export const CarSearchResult = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #7a7a80;
`;

export const Body = styled.View`
  padding: 0 16px;
  flex: 1;
`;
