import styled from 'styled-components/native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #1b1b1f;
  width: 100%;
  align-items: flex-start;
  padding: 24px 25px;
  height: ${Platform.OS === 'ios' ? 227 : 200}px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 32 : 20}px;
`;

export const Title = styled.Text`
  margin-right: auto;
  margin-left: auto;
  font-family: 'Archivo-SemiBold';
  color: #fff;
  font-size: 25px;
`;

export const LogoutButtonIcon = styled(IconIonicons)`
  color: #aeaeb3;
  font-size: 27px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const BackButtonIcon = styled(IconFeather)`
  color: #aeaeb3;
  font-size: 27px;
`;

export const BackButton = styled.TouchableOpacity``;

export const ProfileImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: -90px;
`;

export const Body = styled.View`
  align-items: center;
  padding: 0 25px;
`;
