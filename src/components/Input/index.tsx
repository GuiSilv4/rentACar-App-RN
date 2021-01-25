import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon, Line, EyeButton } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: object;
  showPassword?: any;
  passwordVisible?: boolean;
  secureTextEntry?: boolean;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  {
    name,
    icon,
    containerStyle = {},
    showPassword,
    passwordVisible,
    secureTextEntry,
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  const EyeIcon = useCallback(
    () => (
      <EyeButton
        onPress={() => {
          passwordVisible ? showPassword(false) : showPassword(true);
        }}
      >
        <Icon
          name={passwordVisible ? 'eye' : 'eye-off'}
          size={22}
          color="#AEAEB3"
        />
      </EyeButton>
    ),
    [passwordVisible, showPassword],
  );

  useEffect(() => {
    inputValueRef.current.value = defaultValue;
  }, [defaultValue]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    // registerField<string>({
    //   name: fieldName,
    //   ref: inputValueRef.current,
    //   path: 'value',
    //   setValue(ref: any, value: string) {
    //     inputValueRef.current.value = value;
    //     inputElementRef.current.setNativeProps({ text: value });
    //   },
    //   clearValue(ref: any) {
    //     inputValueRef.current.value = '';
    //     inputElementRef.current.clear();
    //   },
    // });
  }, []);

  return (
    <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#47474d' : '#666360'}
      />
      <Line />
      <TextInput
        secureTextEntry={secureTextEntry ? !passwordVisible : false}
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#AEAEB3"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {secureTextEntry && <EyeIcon />}
    </Container>
  );
};

export default forwardRef(Input);
