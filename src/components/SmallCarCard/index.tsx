import React from 'react';

import {
  Container,
  Label,
  Model,
  Price,
  CarImage,
  LeftContainer,
  FuelTypeIcon,
  LeftBottomContainer,
  LabelPriceContainer,
} from './styles';

interface smallCarCardProps {
  brand: string;
  model: string;
  price: number;
  image: any;
  fuelType: string;
}

const SmallCarCard: React.FC<smallCarCardProps> = ({
  brand,
  model,
  price,
  image,
  fuelType,
}) => {
  return (
    <Container>
      <LeftContainer>
        <Label>{brand}</Label>
        <Model>{model}</Model>
        <LeftBottomContainer>
          <LabelPriceContainer>
            <Label>AO DIA</Label>
            <Price>R$ {price}</Price>
          </LabelPriceContainer>
          <FuelTypeIcon name="lightning-bolt-outline" />
        </LeftBottomContainer>
      </LeftContainer>
      <CarImage source={image} />
    </Container>
  );
};

export default SmallCarCard;
