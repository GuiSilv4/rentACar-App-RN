import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Platform, Animated, Dimensions } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const { height, width } = Dimensions.get('window');

interface fromToProps {
  picked: boolean;
}

interface fromToBarProps {
  show: boolean;
}

interface arrowProps {
  rotate: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const TopPageContainer = styled(Animated.View)`
  width: 100%;
  background-color: #1b1b1f;
  justify-content: center;
  height: ${Platform.OS === 'ios'
    ? (height * 30) / 100
    : (height * 20) / 100}px;
  padding: 0px 25px;
  border-width: 0px;
  border-color: #fff;
  z-index: 25;
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 30 : 0}px;
  color: #fff;
  font-family: 'Archivo-SemiBold';
  width: 70%;
  font-size: 30px;
  line-height: 34px;
  border-width: 0px;
  border-color: #fff;
`;

export const FromToContainer = styled(Animated.View)<fromToBarProps>`
  padding: 0px 25px 20px 25px;
  background-color: #1b1b1f;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  border-width: 0px;
  border-color: #fff;
  width: 100%;
  z-index: 25;
  margin-top: -2px;
  ${props =>
    !props.show &&
    css`
      padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 30 : 15}px;
    `}
`;

export const CalendarContainer = styled(Animated.View)`
  flex: 1;
  position: absolute;
  bottom: 0;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  height: ${Platform.OS === 'ios' ? 63 : 71}%;
  background-color: #fff;
`;

export const CarsContainer = styled(Animated.View)`
  flex: 1;
  position: absolute;
  bottom: 0;
  align-self: center;
  width: 100%;
  height: ${Platform.OS === 'ios' ? 85 : 88}%;
  background-color: #fff;
`;

export const CarsContainerScrollView = styled.ScrollView`
  width: ${width}px;
  padding: 25px;
`;

export const BottonPageContainer = styled.View`
  position: absolute;
  bottom: ${getBottomSpace() + 20}px;
  width: 100%;
  padding: 0px 20px 0px 20px;
  background-color: #fff;
`;

export const FromContainer = styled.View`
  width: 33%;
  border-width: 0px;
  border-color: #fff;
  justify-content: center;
`;

export const ToContainer = styled.View`
  width: 33%;
  justify-content: center;
`;

export const ArrowContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 33%;
  justify-content: center;
  align-items: center;
`;

export const FromToLabel = styled.Text`
  font-family: 'Archivo-Medium';
  font-size: 12px;
  text-transform: uppercase;
  color: #7a7a80;
  margin-bottom: -8px;
`;

export const FromToInput = styled.TextInput<fromToProps>`
  padding-left: 0;
  font-family: 'Inter-Regular';
  color: #fff;
  font-size: 14px;
  height: 40px;
  width: 100%;
  ${props =>
    props.picked &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #7a7a80;
    `}
`;

export const ArrowIcon = styled(FeatherIcon)<arrowProps>`
  transform: rotate(0deg);
  ${props =>
    props.rotate &&
    css`
      transform: rotate(90deg);
    `}
`;

export const ArrowLine = styled.View`
  background-color: #7a7a80;
  width: 40px;
  height: 2px;
  margin-right: -12px;
`;

export const CarListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-between;
`;

export const CarListRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarListTitle = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #47474d;
`;
export const CarsListResults = styled.Text`
  font-family: 'Inter-regular';
  font-size: 13px;
  color: #aeaeb3;
  margin-right: 25px;
`;
export const FilterIcon = styled(IoniconsIcon)`
  font-size: 26px;
`;
