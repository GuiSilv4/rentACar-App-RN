import React from 'react';

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
}

const BigCarCard: React.FC<bigCarCardProps> = ({
  model,
  brand,
  images,
  fuelType,
  price,
}) => {
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
      <Mid>
        <CarImage source={images} />
      </Mid>
      <Bottom>
        <FuelIcon name="lightning-bolt-outline" color="#AEAEB3" />
        <PageDots source={Dots} />
      </Bottom>
    </Container>
  );
};

export default BigCarCard;
