import React, { useCallback, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

import { useNavigation } from '@react-navigation/native';
import { differenceInCalendarDays } from 'date-fns';

import {
  Container,
  CarImage,
  Top,
  BrandModelContainer,
  Brand,
  Model,
  PriceContainer,
  DayLabel,
  Price,
  SpecsContainer,
  SpecBox,
  SpecIcon,
  SpecIcon2,
  SpecText,
  FromToContainer,
  FromContainer,
  ToContainer,
  FromToLabel,
  FromToInput,
  ArrowContainer,
  ArrowIcon,
  ArrowLine,
  BottomContainer,
  FinalPriceContainer,
  PerDayPrice,
  TotalPrice,
  PerDayPriceContainer,
} from './styles';

import Button from '../../components/Button';
import TopNavigator from '../../components/TopNavigator';
import formatValue from '../../utils/formatValue';

interface rentDetailProps {
  car: {
    model: string;
    brand: string;
    // eslint-disable-next-line camelcase
    image_url: string;
    fuelType: string;
    rentPrice: number;
    maxSpeed: 280;
    aceleration: 3.2;
    horsePower: 800;
    transmission: 'auto';
    seats: 2;
  };
  startDate: Date;
  endDate: Date;
}

interface rentSpecProps {
  icon: string;
  text: string;
}

const RentDetails: React.FC = () => {
  const route = useRoute();
  const params = route.params as rentDetailProps;

  const navigation = useNavigation();

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const RentSpec: React.FC<rentSpecProps> = ({ icon, text }) => {
    return (
      <SpecBox>
        {icon === 'car-shift-pattern' || icon === 'engine-outline' ? (
          <SpecIcon2 name={icon} />
        ) : (
          <SpecIcon name={icon} />
        )}
        <SpecText>{text}</SpecText>
      </SpecBox>
    );
  };

  const formatedStartDate = useMemo(() => {
    if (params.startDate) {
      return format(params.startDate, 'dd MMM yyyy', {
        locale: ptBR,
      });
    }
    return '';
  }, [params.startDate]);

  const formatedEndDate = useMemo(() => {
    if (params.endDate) {
      return format(params.endDate, 'dd MMM yyyy', {
        locale: ptBR,
      });
    }
    return '';
  }, [params.endDate]);

  const [totalDays, totalPrice] = useMemo(() => {
    const days = differenceInCalendarDays(params.endDate, params.startDate);
    const price = formatValue(days * params.car.rentPrice);
    return [days, price];
  }, [params.startDate, params.endDate, params.car.rentPrice]);

  const handleBackScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleRentCar = useCallback(() => {
    navigation.navigate('ConfirmationScreen', {
      title: 'Carro alugado!',
      subtitle:
        'Agora você só precisa ir até a concessionária da RENTX pegar o seu automóvel.',
      okFunction: () => {
        navigation.navigate('Appointments');
      },
    });
  }, [navigation]);

  return (
    <>
      <Container>
        <TopNavigator onPress={handleBackScreen} />
        <CarImage source={{ uri: params.car.image_url }} />
        <Top>
          <BrandModelContainer>
            <Brand>{params.car.brand}</Brand>
            <Model>{params.car.model}</Model>
          </BrandModelContainer>
          <PriceContainer>
            <DayLabel>AO DIA</DayLabel>
            <Price>R$ {params.car.rentPrice}</Price>
          </PriceContainer>
        </Top>
        <SpecsContainer>
          <RentSpec
            icon="speedometer-outline"
            text={params.car.maxSpeed.toString()}
          />
          <RentSpec
            icon="timer-outline"
            text={params.car.aceleration.toString()}
          />
          <RentSpec icon="engine-outline" text="800hp" />
        </SpecsContainer>
        <SpecsContainer>
          <RentSpec icon="water-outline" text={params.car.fuelType} />
          <RentSpec icon="car-shift-pattern" text={params.car.transmission} />
          <RentSpec icon="people-outline" text={params.car.seats.toString()} />
        </SpecsContainer>
      </Container>
      <FromToContainer>
        <FromContainer>
          <FromToLabel>DE</FromToLabel>
          <FromToInput value={formatedStartDate} editable={false} />
        </FromContainer>
        <ArrowContainer>
          <ArrowLine />
          <ArrowIcon name="chevron-right" color="#aeaeb3" size={22} />
        </ArrowContainer>
        <ToContainer>
          <FromToLabel>ATÉ</FromToLabel>
          <FromToInput value={formatedEndDate} editable={false} />
        </ToContainer>
      </FromToContainer>
      <BottomContainer>
        <FinalPriceContainer>
          <PerDayPriceContainer>
            <FromToLabel>TOTAL</FromToLabel>
            <PerDayPrice>
              R$ {params.car.rentPrice} x {totalDays} diárias
            </PerDayPrice>
          </PerDayPriceContainer>
          <TotalPrice>{totalPrice}</TotalPrice>
        </FinalPriceContainer>
        <Button onPress={handleRentCar}>Alugar agora</Button>
      </BottomContainer>
    </>
  );
};

export default RentDetails;
