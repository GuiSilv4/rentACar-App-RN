import React, { useState, useCallback, useEffect } from 'react';

import {
  Container,
  ButtonText,
  ButtonContainer,
  ButtonPressable,
  FuelIcon,
} from './styles';

interface ButtonsInterface {
  name: string;
  label: string;
  icon?: string;
  size?: number;
}

interface SelectorsProps {
  buttons: ButtonsInterface[];
  value: string;
  onChange(newValue: string): void;
}

const Selectors: React.FC<SelectorsProps> = ({ buttons, value, onChange }) => {
  const [buttonSelected, setButtonSelected] = useState(value);

  const handleSelection = useCallback(
    (label: string) => {
      if (label !== buttonSelected) {
        setButtonSelected(label);
      } else {
        setButtonSelected('');
      }
    },
    [buttonSelected],
  );

  useEffect(() => {
    onChange(buttonSelected);
  }, [buttonSelected, onChange]);

  const Button: React.FC<ButtonsInterface> = ({ label, icon, size, name }) => {
    const fuelIcon = (iconName: string): string => {
      switch (iconName) {
        case 'eletric':
          return 'lightning-bolt-outline';
          break;
        case 'gasoline':
          return 'water';
          break;
        case 'alcool':
          return 'sprout-outline';
          break;
        case 'diesel':
          return 'water-outline';
          break;

        default:
          return 'water-outline';
          break;
      }
    };

    return (
      <ButtonPressable
        onPress={() => {
          handleSelection(name);
        }}
      >
        <ButtonContainer size={size} selected={name === buttonSelected}>
          {icon && (
            <FuelIcon
              name={fuelIcon(icon)}
              selected={name === buttonSelected}
            />
          )}
          <ButtonText selected={name === buttonSelected}>{label}</ButtonText>
        </ButtonContainer>
      </ButtonPressable>
    );
  };

  return (
    <Container>
      {buttons.map(button => (
        <Button
          name={button.name}
          label={button.label}
          icon={button.icon}
          size={buttons.length}
          key={button.name}
        />
      ))}
    </Container>
  );
};

export default Selectors;
