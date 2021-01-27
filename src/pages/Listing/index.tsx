import React, { useState } from 'react';

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
  SearchBar,
  Body,
  SearchButton,
  SearchButtonIcon,
  SearchBarContainer,
  CarsListView,
} from './styles';

const Listing: React.FC = () => {
  const carQuantityResult = 12;

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
        <CarSearchResult>{carQuantityResult} carros</CarSearchResult>
      </Header>
      <Body>
        <SearchBarContainer>
          <SearchBar placeholder="Qual carro você procura?" />
          <SearchButton>
            <SearchButtonIcon name="search" color="#47474D" />
          </SearchButton>
        </SearchBarContainer>
        <CarsListView showsVerticalScrollIndicator={false}>
          <SmallCarCard
            brand="Audi"
            model="RS 5 Coupé"
            price={120}
            fuelType="eletric"
            image={AudiImage}
          />
          <SmallCarCard
            brand="Porsche"
            model="Panamera"
            price={340}
            fuelType="gasoline"
            image={PorsheImage}
          />
          <SmallCarCard
            brand="Chevrolet"
            model="Corvette Z06"
            price={620}
            fuelType="gasoline"
            image={CorveteImage}
          />
          <SmallCarCard
            brand="Lamborghini"
            model="Huracan"
            price={120}
            fuelType="eletric"
            image={LamboImage}
          />
        </CarsListView>
      </Body>
    </Container>
  );
};

export default Listing;
