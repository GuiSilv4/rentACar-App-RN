import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import ProfileFoto from '../../assets/Foto.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Header,
  Title,
  BackButtonIcon,
  BackButton,
  ProfileImage,
  Body,
  EditImageButton,
  EditImageIcon,
  ImageContainer,
  EditDataButtonsContainer,
  EditDataButton,
  EditDataButtonText,
} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const [dataOrPassword, setDataOrPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const toggleDataOrPassword = useCallback(() => {
    setDataOrPassword(!dataOrPassword);
  }, [dataOrPassword]);

  const handleBackScreen = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const handleSaveData = useCallback(() => {
    navigation.navigate('ConfirmationScreen', {
      title: 'Feito!',
      subtitle: 'Agora suas informações estão atualziadas.',
      okFunction: () => {
        navigation.navigate('Profile');
      },
    });
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
        <ImageContainer>
          <ProfileImage source={ProfileFoto} />
          <EditImageButton>
            <EditImageIcon name="camera-outline" />
          </EditImageButton>
        </ImageContainer>
        <EditDataButtonsContainer>
          <EditDataButton
            selected={dataOrPassword}
            onPress={toggleDataOrPassword}
          >
            <EditDataButtonText selected={dataOrPassword}>
              Dados
            </EditDataButtonText>
          </EditDataButton>
          <EditDataButton
            selected={!dataOrPassword}
            onPress={toggleDataOrPassword}
          >
            <EditDataButtonText selected={!dataOrPassword}>
              Trocar Senha
            </EditDataButtonText>
          </EditDataButton>
        </EditDataButtonsContainer>
        <Form ref={formRef} onSubmit={() => {}} style={{ width: '100%' }}>
          {dataOrPassword ? (
            <>
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
            </>
          ) : (
            <>
              <Input
                name="actual-password"
                icon="lock"
                placeholder="Senha atual"
                secureTextEntry
                showPassword={(item: boolean) => {
                  setShowPassword(item);
                }}
                passwordVisible={showPassword}
              />
              <Input
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                showPassword={(item: boolean) => {
                  setShowPassword(item);
                }}
                passwordVisible={showPassword}
              />
              <Input
                name="password-confirm"
                icon="lock"
                placeholder="RepetirSenha"
                secureTextEntry
                showPassword={(item: boolean) => {
                  setShowPassword(item);
                }}
                passwordVisible={showPassword}
              />
            </>
          )}
        </Form>

        <Button
          style={{ marginTop: 'auto', marginBottom: 40 }}
          onPress={handleSaveData}
        >
          Salvar alterações
        </Button>
      </Body>
    </Container>
  );
};

export default Profile;
