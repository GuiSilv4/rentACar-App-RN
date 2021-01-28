import React, { useMemo } from 'react';

import Dots from '../../assets/Fotos.png';

import {
  Container,
  Top,
  Mid,
  Bottom,
  PriceContainer,
  Brand,
  DayLabel,
  BrandModelContainer,
  Model,
  Price,
  CarImage,
  FuelIcon,
  PageDots,
} from './styles';

interface bigCarCardProps {
  model: string;
  brand: string;
  images: any;
  fuelType: string;
  price: number;
  onPress?(): void;
}

const BigCarCard: React.FC<bigCarCardProps> = ({
  model,
  brand,
  images,
  fuelType,
  price,
  onPress,
}) => {
  const fuelIcon = useMemo(() => {
    switch (fuelType) {
      case 'eletric':
        return 'lightning-bolt-outline';
        break;
      case 'gasoline':
        return 'water-outline';
        break;

      default:
        return 'water-outline';
        break;
    }
  }, [fuelType]);

  return (
    <Container>
      <Top>
        <BrandModelContainer>
          <Brand>{brand}</Brand>
          <Model>{model}</Model>
        </BrandModelContainer>
        <PriceContainer>
          <DayLabel>AO DIA</DayLabel>
          <Price>R$ {price}</Price>
        </PriceContainer>
      </Top>
      <Mid onPress={onPress}>
        <CarImage source={images} />
      </Mid>
      <Bottom>
        <FuelIcon name={fuelIcon} color="#AEAEB3" />
        <PageDots source={Dots} />
      </Bottom>
    </Container>
  );
};

export default BigCarCard;
