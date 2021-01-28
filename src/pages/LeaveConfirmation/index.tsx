import React, { useCallback } from 'react';

import { StatusBar, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
  ButtonsContainer,
  NoButton,
  NoButtonText,
} from './styles';

import BackgroundLogo from '../../assets/background_logo.png';
import { useAuth } from '../../hooks/auth';

const LeaveConfirmation: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  const handleWelcomeScreen = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleProfileScreen = useCallback(() => {
    navigation.navigate('Profile');
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
        <Icon name="close" color="#DC1637" size={45} />
      </CheckBox>

      <TitleBox>
        <Title>Sair do RENTX</Title>
        <SubTitle>Tem certeza que quer fazer isso?</SubTitle>
      </TitleBox>
      <ButtonsContainer>
        <NoButton onPress={handleProfileScreen}>
          <NoButtonText>Não</NoButtonText>
        </NoButton>
        <OkButton onPress={handleWelcomeScreen}>
          <OkButtonText>Sim</OkButtonText>
        </OkButton>
      </ButtonsContainer>
    </Container>
  );
};

export default LeaveConfirmation;
