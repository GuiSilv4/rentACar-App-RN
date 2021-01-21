import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b1b1f;
  align-items: center;
  padding: 20px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-top: ${Platform.OS === 'ios' ? '40%' : '15%'};
`;

export const TitleBox = styled.View`
  margin-top: 30%;
  width: 65%;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #f4f5f6;
  font-family: 'Archivo-Bold';
  font-size: 40px;
  line-height: 43.52px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-family: 'Inter-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #dedee3;
  margin-top: 10%;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 50px;
`;
export const ButtonsBox = styled.View`
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 10%;
  width: 100%;
  justify-content: center;
`;
export const LoginButton = styled(RectButton)`
  height: 56px;
  width: 46%;
  background-color: #dc1637;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const RegisterButton = styled(RectButton)`
  height: 56px;
  width: 46%;
  margin-left: 20px;
  background-color: #29292e;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const BackButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 80px;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  color: #e1e1e6;
  font-family: 'Archivo-Medium';
  font-size: 15px;
  line-height: 18.15px;
`;
export const BackButtonText = styled.Text`
  color: #7a7a80;
  font-size: 15px;
  margin-bottom: 5%;
  font-family: 'Archivo-Medium';
`;
