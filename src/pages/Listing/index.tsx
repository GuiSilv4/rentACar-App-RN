import React, { useEffect, useMemo, useState } from 'react';

import SearchableDropdown from 'react-native-searchable-dropdown';
import SmallCarCard from '../../components/SmallCarCard';

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
import api from '../../services/api';

interface Car {
  id: number;
  brand: string;
  model: string;
  rentPrice: number;
  // eslint-disable-next-line camelcase
  image_url: string;
  fuelType: string;
}

const Listing: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredDataSource, setFilteredDataSource] = useState<Car[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('cars').then(response => {
      setCars(response.data);
      setFilteredDataSource(response.data);
    });
  }, []);

  const carQuantityResult = useMemo(() => filteredDataSource.length, [
    filteredDataSource,
  ]);

  const searchFilterFunction = (text: string): void => {
    if (text) {
      const newData = cars.filter(item => {
        const itemData = item.model
          ? item.model.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(cars);
      setSearch(text);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
        <CarSearchResult>
          {carQuantityResult} carro{carQuantityResult < 2 ? '' : 's'}
        </CarSearchResult>
      </Header>
      <Body>
        <SearchBarContainer>
          <SearchBar
            placeholder="Qual carro você procura?"
            value={search}
            onChangeText={text => searchFilterFunction(text)}
          />
          <SearchButton>
            <SearchButtonIcon name="search" color="#47474D" />
          </SearchButton>
        </SearchBarContainer>
        <CarsListView showsVerticalScrollIndicator={false}>
          {filteredDataSource.map(car => (
            <SmallCarCard
              key={car.id}
              brand={car.brand}
              model={car.model}
              price={car.rentPrice}
              fuelType={car.fuelType}
              image={car.image_url}
            />
          ))}
        </CarsListView>
      </Body>
    </Container>
  );
};

export default Listing;
