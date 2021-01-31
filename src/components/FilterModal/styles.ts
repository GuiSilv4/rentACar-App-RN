import styled from 'styled-components/native';

import { Animated } from 'react-native';

export const Modal = styled.Modal`
  flex: 1;
  justify-content: flex-end;
`;

export const BackgroundView = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

export const BackBackgroundPressable = styled.TouchableWithoutFeedback``;

export const Container = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 78%;
  bottom: 0;
`;

export const FilterContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 25px;
`;

export const TopPushable = styled(Animated.View)`
  width: 100%;
  height: 48px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  align-items: center;
`;

export const TopPushableLine = styled.View`
  width: 48px;
  height: 4px;
  background: #ebebf0;
  border-radius: 100px;
  margin-top: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ebebf0;
  padding-bottom: 25px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;
  color: #47474d;
`;

export const CleanLabel = styled.Text`
  font-family: 'Inter-Regular';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #aeaeb3;
`;

export const CleanButton = styled.TouchableOpacity``;

export const SubTitleLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0 20px 0;
`;

export const SubTitle = styled.Text`
  font-family: 'Archivo-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #47474d;
`;

export const PriceLabel = styled.Text`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #dc1637;
`;

export const Thumb = styled.View`
  width: 35px;
  height: 25px;
  border-width: 1px;
  border-color: #7f7f7f20;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px #e6e6eb;
  elevation: 3;
  flex-direction: row;
  padding: 0 7px;
  justify-content: space-around;
  align-items: center;
`;
export const Rail = styled.View`
  flex: 1px;
  height: 2px;
  border-radius: 2px;
  background-color: #f4f5f6;
`;
export const RailSelected = styled.View`
  height: 2px;
  background-color: #dc1637;
  border-radius: 2px;
`;

export const ThumbLine = styled.View`
  height: 8px;
  width: 2px;
  background-color: #ebebf0;
`;

export const ScrollVertical = styled.ScrollView`
  flex: 1;
`;

export const ScrollableView = styled.View`
  height: 67%;
`;
