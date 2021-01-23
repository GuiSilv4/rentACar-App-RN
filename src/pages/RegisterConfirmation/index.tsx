import React, { useCallback } from 'react';

import { StatusBar, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

import { useNavigation } from '@react-navigation/native';

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

const RegisterConfirmation: React.FC = () => {
  const navigation = useNavigation();
  const handleWelcomeScreen = useCallback(() => {
    navigation.navigate('WelcomeScreen');
  }, [navigation]);

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
        <Title>Conta Criada</Title>
        <SubTitle>Agora é só fazer login e aproveitar.</SubTitle>
      </TitleBox>

      <OkButton onPress={handleWelcomeScreen}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default RegisterConfirmation;
