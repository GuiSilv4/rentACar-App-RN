import React, { useCallback } from 'react';

import { StatusBar, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

import { useRoute } from '@react-navigation/native';

import {
  Container,
  BackgroundLogoImage,
  CheckBox,
  TitleBox,
  Title,
  SubTitle,
  OkButton,
  OkButtonText,
} from './styles';

import BackgroundLogo from '../../assets/background_logo.png';

interface confirmationScreenProps {
  title: string;
  subtitle: string;
  okFunction?(): void;
}

const ConfirmationScreen: React.FC = () => {
  const route = useRoute();
  const params = route.params as confirmationScreenProps;
  const handleWelcomeScreen = useCallback(() => {
    if (params.okFunction) {
      params.okFunction();
    }
  }, [params]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1B1B1F" />
      <BackgroundLogoImage
        source={BackgroundLogo}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <CheckBox>
        <Icon name="check" color="#03B352" size={32} />
      </CheckBox>

      <TitleBox>
        <Title>{params.title}</Title>
        <SubTitle>{params.subtitle}</SubTitle>
      </TitleBox>

      <OkButton onPress={handleWelcomeScreen}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default ConfirmationScreen;
