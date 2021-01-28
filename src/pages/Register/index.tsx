import React, { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, TitleBox, BottomContainer, Label } from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import TopNavigator from '../../components/TopNavigator';
import Input from '../../components/Input';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showFieldsStepTwo, setShowFieldsStepTwo] = useState(false);

  const handleRegister = useCallback(() => {
    !showFieldsStepTwo
      ? setShowFieldsStepTwo(true)
      : navigation.navigate('ConfirmationScreen', {
          title: 'Conta criada!',
          subtitle: 'Agora é só fazer login e aproveitar.',
          okFunction: () => {
            navigation.navigate('WelcomeScreen');
          },
        });
  }, [navigation, showFieldsStepTwo]);

  const handleBackScreen = useCallback(() => {
    showFieldsStepTwo
      ? setShowFieldsStepTwo(false)
      : navigation.navigate('WelcomeScreen');
  }, [navigation, showFieldsStepTwo]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <TopNavigator onPress={handleBackScreen} />
          <TitleBox>
            <Title>Crie sua conta</Title>
            <Subtitle>
              Faça seu cadastro de {'\n'}
              forma rápida e fácil.
            </Subtitle>
          </TitleBox>
          <Form
            ref={formRef}
            onSubmit={handleRegister}
            style={{ width: '100%' }}
          >
            {showFieldsStepTwo ? (
              <Label>02. Senha</Label>
            ) : (
              <Label>01. Dados</Label>
            )}

            {!showFieldsStepTwo ? (
              <>
                <Input name="name" icon="user" placeholder="Nome" />
                <Input name="email" icon="mail" placeholder="E-mail" />
              </>
            ) : (
              <>
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
                  name="confirm-password"
                  icon="lock"
                  placeholder="Repetir senha"
                  secureTextEntry
                  showPassword={(item: boolean) => {
                    setShowPassword(item);
                  }}
                  passwordVisible={showPassword}
                />
              </>
            )}
            <BottomContainer>
              <Button onPress={handleRegister}>
                {!showFieldsStepTwo ? 'Próximo' : 'Cadastrar'}
              </Button>
            </BottomContainer>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
