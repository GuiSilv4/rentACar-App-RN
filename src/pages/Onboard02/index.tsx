import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import CarIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';

import {
  Container,
  Header,
  PageNumber,
  TitleBox,
  Navigator,
  Dot,
  DotBlack,
  DotsBox,
  NextScreenButton,
} from './styles';

const Onboard02: React.FC = () => {
  const navigation = useNavigation();

  const handleBackScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNextScreen = useCallback(() => {
    navigation.navigate('WelcomeScreen');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <CarIcon name="car-outline" color="#DC1637" size={85} />
        <PageNumber>02</PageNumber>
      </Header>
      <TitleBox>
        <Title>Depois, escolha o carro</Title>
        <Subtitle>
          Vários modelos para você dirigir seguro, com conforto e segurança
        </Subtitle>
      </TitleBox>
      <Navigator>
        <DotsBox onPress={handleBackScreen}>
          <Dot />
          <DotBlack />
        </DotsBox>

        <NextScreenButton onPress={handleNextScreen}>
          <Icon name="chevron-right" color="#AEAEB3" size={20} />
        </NextScreenButton>
      </Navigator>
    </Container>
  );
};

export default Onboard02;
