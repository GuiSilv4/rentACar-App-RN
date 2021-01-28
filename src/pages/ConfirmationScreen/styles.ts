import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #1b1b1f;
`;

export const BackgroundLogoImage = styled.Image`
  width: ${width}px;
  height: ${(235 / 375) * width}px;
  margin-top: ${Platform.OS === 'ios' ? '20%' : '10%'};
`;

export const CheckBox = styled.View`
  width: 80px;
  height: 80px;
  background-color: transparent;
  border-width: 7px;
  border-color: #29292e;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.View`
  margin-top: 15%;
  width: 65%;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #e1e1e6;
  font-family: 'Archivo-Bold';
  font-size: 30px;
  line-height: 32px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-family: 'Inter-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #a8a8b3;
  margin-top: 10%;
  width: 70%;
`;

export const OkButton = styled(RectButton)`
  background-color: #29292e;
  height: 56px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20%;
  margin-bottom: ${Platform.OS === 'ios' ? '20%' : '10%'};
`;

export const OkButtonText = styled.Text`
  font-family: 'Archivo-Regular';
  color: #fff;
  font-size: 16px;
`;
