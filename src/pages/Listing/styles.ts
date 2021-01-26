import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #1b1b1f;
  height: 142px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 27px;
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  color: #fff;
  font-size: 25px;
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

export const SearchBarContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const SearchBar = styled.TextInput`
  padding: 20px;
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #a0a0b3;
  margin-top: -28px;
  height: 56px;
  background-color: #f4f5f6;
  margin-bottom: 20px;
  flex: 1;
`;

export const SearchButtonIcon = styled(FeatherIcon)`
  font-size: 24px;
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: -28px;
  height: 56px;
  width: 56px;
  border-left-width: 1px;
  border-left-color: #ffffff;
  background-color: #f4f5f6;
`;
