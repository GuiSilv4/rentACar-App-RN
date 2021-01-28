import styled, { css } from 'styled-components/native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface EditDataButtonProps {
  selected: boolean;
}

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

export const ImageContainer = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: -90px;
`;

export const Body = styled.View`
  align-items: center;
  flex: 1;
  padding: 0 25px;
`;

export const EditImageButton = styled.TouchableOpacity`
  background-color: #dc1637;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
export const EditImageIcon = styled(IconIonicons)`
  font-size: 25px;
  color: #fff;
  margin-left: 1px;
`;

export const EditDataButtonsContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  padding-bottom: 15px;
  width: 100%;
  justify-content: space-between;
  padding-top: 10%;
  padding-left: 18%;
  padding-right: 18%;
  margin-bottom: 25px;
`;

export const EditDataButton = styled.TouchableOpacity<EditDataButtonProps>`
  border-bottom-width: 0px;
  padding-bottom: 15px;
  border-bottom-color: #dc1637;
  margin-bottom: -17px;
  ${props =>
    props.selected &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #dc1637;
    `}
`;

export const EditDataButtonText = styled.Text<EditDataButtonProps>`
  font-family: 'Archivo-Regular';
  font-weight: 400;
  font-size: 20px;
  color: #aeaeb3;
  ${props =>
    props.selected &&
    css`
      color: #3d3d4d;
      font-family: 'Archivo-SemiBold';
      font-weight: 600;
    `}
`;
