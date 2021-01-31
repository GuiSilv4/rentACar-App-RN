import React, { useMemo } from 'react';
import { format, isBefore } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
  PeriodContainer,
  FromToContainer,
  FromToDate,
  ArrowRight,
  OngoingText,
} from './styles';

interface smallCarCardProps {
  brand: string;
  model: string;
  price: number;
  image: string;
  fuelType: string;
  period?: Date[];
}

const SmallCarCard: React.FC<smallCarCardProps> = ({
  brand,
  model,
  price,
  image,
  fuelType,
  period,
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

  const formattedDates = useMemo(() => {
    if (period?.length === 2) {
      return {
        from: format(period[0], 'dd MMMM yyyy', {
          locale: ptBR,
        }),
        to: format(period[1], 'dd MMMM yyyy', {
          locale: ptBR,
        }),
      };
    }
    return { from: '', to: '' };
  }, [period]);

  const ongoingStyle = useMemo(() => {
    if (period?.length === 2 && isBefore(period[0], Date.now())) {
      return true;
    }

    return false;
  }, [period]);

  return (
    <>
      <Container>
        <LeftContainer>
          <Label>{brand}</Label>
          <Model>{model}</Model>
          <LeftBottomContainer>
            <LabelPriceContainer>
              <Label>AO DIA</Label>
              <Price>R$ {price}</Price>
            </LabelPriceContainer>
            <FuelTypeIcon name={fuelIcon} />
          </LeftBottomContainer>
        </LeftContainer>
        <CarImage source={{ uri: image }} />
      </Container>
      {period?.length === 2 && (
        <PeriodContainer onGoing={ongoingStyle}>
          {ongoingStyle ? (
            <OngoingText>Utilizando até {formattedDates?.to} </OngoingText>
          ) : (
            <>
              <Label>Período</Label>
              <FromToContainer>
                <FromToDate>{formattedDates?.from}</FromToDate>
                <ArrowRight name="arrow-right" />
                <FromToDate>{formattedDates?.to}</FromToDate>
              </FromToContainer>
            </>
          )}
        </PeriodContainer>
      )}
    </>
  );
};

export default SmallCarCard;
