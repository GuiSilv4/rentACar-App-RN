import React, { useCallback, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useNavigation } from '@react-navigation/native';

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

import LamboImage from '../../assets/Lambo.png';
import Button from '../../components/Button';
import TopNavigator from '../../components/TopNavigator';

interface rentDetailProps {
  model: string;
  brand: string;
  images: any;
  fuelType: string;
  price: number;
}

interface rentSpecProps {
  icon: string;
  text: string;
}

const RentDetails: React.FC = () => {
  const route = useRoute();
  const params = route.params as rentDetailProps;

  const navigation = useNavigation();

  const startDate = new Date(2021, 1, 1);
  const endDate = new Date(2021, 1, 3);

  const { brand, model, price } = {
    brand: 'Lamborghini',
    model: 'Huracan',
    price: 580,
  };

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
    if (startDate) {
      return format(startDate, 'dd MMM yyyy', {
        locale: ptBR,
      });
    }
    return '';
  }, [startDate]);

  const formatedEndDate = useMemo(() => {
    if (endDate) {
      return format(endDate, 'dd MMM yyyy', {
        locale: ptBR,
      });
    }
    return '';
  }, [endDate]);

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
        <CarImage source={LamboImage} />
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
        <SpecsContainer>
          <RentSpec icon="speedometer-outline" text="380km/h" />
          <RentSpec icon="timer-outline" text="3.2s" />
          <RentSpec icon="engine-outline" text="800hp" />
        </SpecsContainer>
        <SpecsContainer>
          <RentSpec icon="water-outline" text="Gasolina" />
          <RentSpec icon="car-shift-pattern" text="auto" />
          <RentSpec icon="people-outline" text="2 pessoas" />
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
            <PerDayPrice>R$ 580 x 3 diárias</PerDayPrice>
          </PerDayPriceContainer>
          <TotalPrice>R$ 2,900</TotalPrice>
        </FinalPriceContainer>
        <Button onPress={handleRentCar}>Alugar agora</Button>
      </BottomContainer>
    </>
  );
};

export default RentDetails;
