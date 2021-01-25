import React, { useState, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';

import { Container } from './styles';

const Title: React.FC = ({ children }) => {
  const [keyboardOpened, setKeyboardOpened] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', _keyboardDidShow);
      Keyboard.addListener('keyboardWillHide', _keyboardDidHide);
    } else {
      Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    }
  }, []);

  const _keyboardDidShow = (): void => {
    setKeyboardOpened(true);
  };

  const _keyboardDidHide = (): void => {
    setKeyboardOpened(false);
  };

  return <>{!keyboardOpened && <Container>{children}</Container>}</>;
};

export default Title;
