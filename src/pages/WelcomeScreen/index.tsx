import React, { useCallback } from 'react';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LogoImage from '../../assets/logo.png';

import {
  Container,
  Header,
  TitleBox,
  Title,
  SubTitle,
  ButtonsBox,
  Logo,
  LoginButton,
  RegisterButton,
  BackButton,
  ButtonText,
  BackButtonText,
} from './styles';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleRegisterScreen = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const handleLoginScreen = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const handleBackScreen = useCallback(() => {
    navigation.navigate('Onboard02');
  }, [navigation]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1f" />
      <Header>
        <Logo source={LogoImage} resizeMode="cover" />
      </Header>
      <TitleBox>
        <Title>
          Seja {'\n'}
          Bem-Vindo
        </Title>
        <SubTitle>O que você deseja fazer?</SubTitle>
      </TitleBox>
      <ButtonsBox>
        <LoginButton onPress={handleLoginScreen}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <RegisterButton onPress={handleRegisterScreen}>
          <ButtonText>Cadastro</ButtonText>
        </RegisterButton>
      </ButtonsBox>
      <BackButton onPress={handleBackScreen}>
        <BackButtonText>Voltar</BackButtonText>
      </BackButton>
    </Container>
  );
};

export default WelcomeScreen;
