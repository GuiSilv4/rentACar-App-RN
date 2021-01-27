import React from 'react';

import SmallCarCard from '../../components/SmallCarCard';
import AudiImage from '../../assets/Audi.png';
import PorsheImage from '../../assets/Porche.png';
import LamboImage from '../../assets/Lambo2.png';
import CorveteImage from '../../assets/Corvete.png';

import {
  Container,
  Header,
  Title,
  CarSearchResult,
  Body,
  CarsListView,
} from './styles';

const Appointments: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Agendamentos</Title>
        <CarSearchResult>5 períodos</CarSearchResult>
      </Header>
      <Body>
        <CarsListView showsVerticalScrollIndicator={false}>
          <SmallCarCard
            brand="Porsche"
            model="Panamera"
            price={340}
            fuelType="gasoline"
            image={PorsheImage}
            period={[new Date(2021, 0, 25), new Date(2021, 0, 28)]}
          />
          <SmallCarCard
            brand="Chevrolet"
            model="Corvette Z06"
            price={620}
            fuelType="gasoline"
            image={CorveteImage}
            period={[new Date(2021, 0, 28), new Date(2021, 1, 5)]}
          />
          <SmallCarCard
            brand="Audi"
            model="RS 5 Coupé"
            price={120}
            fuelType="eletric"
            image={AudiImage}
            period={[new Date(2021, 1, 5), new Date(2021, 1, 15)]}
          />
          <SmallCarCard
            brand="Lamborghini"
            model="Huracan"
            price={120}
            fuelType="eletric"
            image={LamboImage}
            period={[new Date(2021, 1, 15), new Date(2021, 1, 19)]}
          />
        </CarsListView>
      </Body>
    </Container>
  );
};

export default Appointments;
