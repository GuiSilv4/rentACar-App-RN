import React, { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  TitleBox,
  RememberMeBox,
  RememberMeText,
  RememberMeContainer,
  ForgotPassword,
  BottomContainer,
} from './styles';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import TopNavigator from '../../components/TopNavigator';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [checkedRememberMe, setCheckedRememberMe] = useState(false);

  const handleSignIn = useCallback(async () => {
    await signIn({
      email: 'teste@gmail.com',
      password: '12345',
    });
  }, [signIn]);

  const toggleRememberMe = useCallback(() => {
    setCheckedRememberMe(!checkedRememberMe);
  }, [checkedRememberMe]);

  const handleBackScreen = useCallback(() => {
    navigation.navigate('WelcomeScreen');
  }, [navigation]);

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
            <Title>Estamos quase lá.</Title>
            <Subtitle>
              Faça seu login para começar uma experiência incrível.
            </Subtitle>
          </TitleBox>
          <Form ref={formRef} onSubmit={handleSignIn} style={{ width: '100%' }}>
            <Input name="email" icon="mail" placeholder="E-mail" />
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
            <BottomContainer>
              <RememberMeContainer>
                <RememberMeBox
                  onPress={toggleRememberMe}
                  checked={checkedRememberMe}
                />
                <RememberMeText>Lembrar-me</RememberMeText>
              </RememberMeContainer>
              <ForgotPassword>Esqueci minha senha</ForgotPassword>
            </BottomContainer>
            <Button onPress={handleSignIn}>Login</Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
