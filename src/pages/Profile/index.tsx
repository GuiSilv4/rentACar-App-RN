import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import ProfileFoto from '../../assets/Foto.png';
import LancerImage from '../../assets/Lancer.png';

import { useAuth } from '../../hooks/auth';

import SmallCarCard from '../../components/SmallCarCard';

import {
  Container,
  Header,
  Title,
  LogoutButtonIcon,
  LogoutButton,
  EditButtonIcon,
  EditButton,
  ProfileImage,
  Body,
  ProfileName,
  DoneAppoitmentsLabel,
  DoneAppoitmentsBox,
  FavoriteAppoitmentsBox,
  DoneAppointmentsQuantity,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const profileName = 'Tiago Luchtenberg';
  const doneAppointmentsQuantity = '05';
  const timesUsed = '2';

  const handleLogout = useCallback(() => {
    navigation.navigate('LeaveConfirmation');
  }, [navigation]);

  const handleEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]);

  return (
    <Container>
      <Header>
        <EditButton>
          <EditButtonIcon name="edit" onPress={handleEditProfile} />
        </EditButton>
        <Title>Perfil</Title>
        <LogoutButton onPress={handleLogout}>
          <LogoutButtonIcon name="power" />
        </LogoutButton>
      </Header>
      <Body>
        <ProfileImage source={ProfileFoto} />
        <ProfileName>{profileName}</ProfileName>
        <DoneAppoitmentsBox>
          <DoneAppoitmentsLabel>Agendamentos feitos</DoneAppoitmentsLabel>
          <DoneAppointmentsQuantity>
            {doneAppointmentsQuantity}
          </DoneAppointmentsQuantity>
        </DoneAppoitmentsBox>
        <FavoriteAppoitmentsBox>
          <DoneAppoitmentsLabel>Carro favorito</DoneAppoitmentsLabel>
          <DoneAppointmentsQuantity>
            Utilizado {timesUsed} vezes
          </DoneAppointmentsQuantity>
        </FavoriteAppoitmentsBox>
        <SmallCarCard
          brand="Mistubishi"
          model="Lancer Evo X"
          price={290}
          fuelType="gasoline"
          image={LancerImage}
        />
      </Body>
    </Container>
  );
};

export default Profile;
