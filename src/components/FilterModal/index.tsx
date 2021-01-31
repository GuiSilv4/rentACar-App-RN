import React, { useCallback, useEffect, useState } from 'react';

import { Animated } from 'react-native';
import RangeSlider from 'rn-range-slider';

import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Button from '../Button';
import Selectors from '../Selectors';

import {
  BackgroundView,
  Container,
  BackBackgroundPressable,
  Modal,
  FilterContainer,
  TopPushable,
  TopPushableLine,
  Header,
  Title,
  CleanButton,
  CleanLabel,
  SubTitleLine,
  SubTitle,
  PriceLabel,
  Thumb,
  Rail,
  RailSelected,
  ThumbLine,
  ScrollVertical,
  ScrollableView,
} from './styles';

interface FilterModalDTO {
  low: number;
  high: number;
  fuelType: string;
  transmission: string;
}

interface FilterModalProps {
  closeModal(): void;
  onChangeValue(data: FilterModalDTO): void;
  visible: boolean;
  minPrice: number;
  maxPrice: number;
}

const FilterModal: React.FC<FilterModalProps> = ({
  closeModal,
  onChangeValue,
  visible,
  minPrice,
  maxPrice,
}) => {
  const [containerY] = useState(new Animated.Value(500));
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(120);
  const [fuelFilter, setFuelFilter] = useState('');
  const [transmissionFilter, setTransmissionFilter] = useState('');

  useEffect(() => {
    setLow(minPrice);
    setHigh(maxPrice);
  }, [minPrice, maxPrice]);

  const handleOnShow = useCallback(() => {
    Animated.parallel([
      Animated.timing(containerY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [containerY]);

  const renderThumb = useCallback(
    () => (
      <Thumb>
        <ThumbLine />
        <ThumbLine />
      </Thumb>
    ),
    [],
  );

  const renderRail = useCallback(() => <Rail />, []);

  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const handleValueChange = useCallback((_low, _high, fromuser) => {
    if (fromuser) {
      setLow(_low);
      setHigh(_high);
    }
  }, []);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: { translationY: containerY },
      },
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChanged = useCallback(
    event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        let opened = true;

        const { translationY } = event.nativeEvent;

        if (translationY >= 200) {
          opened = false;
        }
        Animated.timing(containerY, {
          toValue: opened ? 0 : 700,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          if (!opened) {
            closeModal();
          }
        });
      }
    },
    [containerY, closeModal],
  );

  const handleApplyFilters = useCallback(() => {
    onChangeValue({
      low,
      high,
      fuelType: fuelFilter,
      transmission: transmissionFilter,
    });
    closeModal();
  }, [low, high, closeModal, onChangeValue, fuelFilter, transmissionFilter]);

  const handleBackScreen = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleCleanFilter = useCallback(() => {
    setLow(minPrice);
    setHigh(maxPrice);
    setFuelFilter('');
    setTransmissionFilter('');
  }, [minPrice, maxPrice]);

  return (
    <Modal transparent visible={visible} onShow={handleOnShow}>
      <BackBackgroundPressable onPress={handleBackScreen}>
        <BackgroundView />
      </BackBackgroundPressable>
      <Container style={{ transform: [{ translateY: containerY }] }}>
        <PanGestureHandler
          activeOffsetX={[0, 0]}
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <TopPushable>
            <TopPushableLine />
          </TopPushable>
        </PanGestureHandler>
        <FilterContainer>
          <Header>
            <Title>Filtro</Title>
            <CleanButton onPress={handleCleanFilter}>
              <CleanLabel>Limpar todos</CleanLabel>
            </CleanButton>
          </Header>
          <ScrollableView>
            <ScrollVertical>
              <SubTitleLine>
                <SubTitle>Preço ao dia</SubTitle>
                <PriceLabel>
                  R$ {low} - R$ {high}
                </PriceLabel>
              </SubTitleLine>
              <RangeSlider
                min={minPrice}
                max={maxPrice}
                low={low}
                high={high}
                step={1}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                onValueChanged={handleValueChange}
              />
              <SubTitleLine>
                <SubTitle>Combustível</SubTitle>
              </SubTitleLine>
              <Selectors
                buttons={[
                  { name: 'gasoline', label: 'Gasolina', icon: 'gasoline' },
                  { name: 'eletric', label: 'Elétrico', icon: 'eletric' },
                  { name: 'diesel', label: 'Diesel', icon: 'diesel' },
                ]}
                value={fuelFilter}
                onChange={newValue => setFuelFilter(newValue)}
              />
              <SubTitleLine>
                <SubTitle>Transmissão</SubTitle>
              </SubTitleLine>
              <Selectors
                buttons={[
                  { name: 'auto', label: 'Automático' },
                  { name: 'manual', label: 'Manual' },
                ]}
                value={transmissionFilter}
                onChange={newValue => setTransmissionFilter(newValue)}
              />
            </ScrollVertical>
          </ScrollableView>
          <Button onPress={handleApplyFilters}>Confirmar</Button>
        </FilterContainer>
      </Container>
    </Modal>
  );
};

export default FilterModal;
