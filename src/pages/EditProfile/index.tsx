import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import ProfileFoto from '../../assets/Foto.png';
import LancerImage from '../../assets/Lancer.png';

import SmallCarCard from '../../components/SmallCarCard';

import {
  Container,
  Header,
  Title,
  LogoutButtonIcon,
  LogoutButton,
  BackButtonIcon,
  BackButton,
  ProfileImage,
  Body,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const profileName = 'Tiago Luchtenberg';
  const doneAppointmentsQuantity = '05';
  const timesUsed = '2';

  const handleLogout = useCallback(() => {
    navigation.navigate('WelcomeScreen');
  }, [navigation]);

  const handleBackScreen = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <BackButton>
          <BackButtonIcon name="chevron-left" onPress={handleBackScreen} />
        </BackButton>
        <Title>Editar Perfil</Title>
      </Header>
      <Body>
        <ProfileImage source={ProfileFoto} />
      </Body>
    </Container>
  );
};

export default Profile;
