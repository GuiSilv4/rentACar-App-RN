import styled from 'styled-components/native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
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
  justify-content: space-between;
  padding: 24px 25px;
  height: ${Platform.OS === 'ios' ? 227 : 200}px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 32 : 20}px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #fff;
  font-size: 25px;
`;

export const LogoutButtonIcon = styled(IconIonicons)`
  color: #aeaeb3;
  font-size: 27px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const EditButtonIcon = styled(IconAntDesign)`
  color: #aeaeb3;
  font-size: 27px;
`;

export const EditButton = styled.TouchableOpacity``;

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

export const ProfileName = styled.Text`
  margin-top: 22px;
  width: 180px;
  font-family: 'Archivo-SemiBold';
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #3d3d4d;
`;
export const DoneAppoitmentsBox = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? 18 : 10}%;
  border-bottom-width: 1px;
  padding-bottom: 19px;
  border-bottom-color: #e6e6f0;
`;

export const FavoriteAppoitmentsBox = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const DoneAppoitmentsLabel = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #7a7a80;
`;

export const DoneAppointmentsQuantity = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 15px;
  color: #47474d;
`;
