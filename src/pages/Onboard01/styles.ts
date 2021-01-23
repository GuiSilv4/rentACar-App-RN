import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-top: ${Platform.OS === 'ios' ? '40%' : '15%'};
`;

export const PageNumber = styled.Text`
  color: #ebebf0;
  font-size: 64px;
  font-family: 'Archivo-Bold';
`;

export const TitleBox = styled.View`
  margin-top: 30%;
  width: 65%;
`;

export const Navigator = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 10%;
`;

export const NextScreenButton = styled(RectButton)``;

export const Dot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #aeaeb3;
`;

export const DotBlack = styled.View`
  width: 4px;
  height: 4px;
  background-color: #47474d;
  border-radius: 2px;
`;

export const DotsBox = styled.TouchableOpacity`
  flex-direction: row;
  width: 36px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
