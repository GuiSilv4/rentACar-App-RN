import React, { useCallback } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Title from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';

import {
  Container,
  Header,
  PageNumber,
  TitleBox,
  Navigator,
  NextScreenButton,
  Dot,
  DotBlack,
  DotsBox,
} from './styles';

const Onboard01: React.FC = () => {
  const navigation = useNavigation();
  const handleNextScreen = useCallback(() => {
    navigation.navigate('Onboard02');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <Icon name="calendar" color="#DC1637" size={70} />
        <PageNumber>01</PageNumber>
      </Header>
      <TitleBox>
        <Title>Primeiro, escolha a data</Title>
        <Subtitle>
          Você é quem define um período, e nós mostraremos os carros
          disponíveis.
        </Subtitle>
      </TitleBox>
      <Navigator>
        <DotsBox onPress={handleNextScreen}>
          <DotBlack />
          <Dot />
        </DotsBox>

        <NextScreenButton onPress={handleNextScreen}>
          <Icon name="chevron-right" color="#AEAEB3" size={20} />
        </NextScreenButton>
      </Navigator>
    </Container>
  );
};

export default Onboard01;
