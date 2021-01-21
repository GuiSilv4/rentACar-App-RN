import React from 'react';

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
        <LoginButton>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <RegisterButton>
          <ButtonText>Cadastro</ButtonText>
        </RegisterButton>
      </ButtonsBox>
      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonText>Voltar</BackButtonText>
      </BackButton>
    </Container>
  );
};

export default WelcomeScreen;
