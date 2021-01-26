import React from 'react';

import SmallCarCard from '../../components/SmallCarCard';
import AudiImage from '../../assets/Audi.png';

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
} from './styles';

const Listing: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
        <CarSearchResult>12 carros</CarSearchResult>
      </Header>
      <Body>
        <SearchBarContainer>
          <SearchBar placeholder="Qual carro você procura?" />
          <SearchButton>
            <SearchButtonIcon name="search" color="#47474D" />
          </SearchButton>
        </SearchBarContainer>
        <SmallCarCard
          brand="Audi"
          model="RS 5 Coupé"
          price={120}
          fuelType="eletric"
          image={AudiImage}
        />
      </Body>
    </Container>
  );
};

export default Listing;
