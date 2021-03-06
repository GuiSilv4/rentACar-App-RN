import React, { useState, useCallback, useMemo, useEffect } from 'react';

import { addDays, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { StatusBar, Platform, Animated, Dimensions, Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import BigCarCard from '../../components/BigCarCard';
import FilterModal from '../../components/FilterModal';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  TopPageContainer,
  BottonPageContainer,
  FromToContainer,
  FromContainer,
  FromToLabel,
  FromToInput,
  ArrowIcon,
  ToContainer,
  ArrowContainer,
  ArrowLine,
  CalendarContainer,
  CarsContainer,
  CarsContainerScrollView,
  CarListHeader,
  CarListTitle,
  CarsListResults,
  FilterIcon,
  CarListRight,
  FilterIconButton,
  FromToPressable,
} from './styles';
import api from '../../services/api';

LocaleConfig.locales.br = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago,',
    'Set.',
    'Out.',
    'Nov.',
    'Dec.',
  ],
  dayNames: [
    'Domigo',
    'Segunda-feira',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
};

LocaleConfig.defaultLocale = 'br';

interface periodParamsDTO {
  color: string;
  selected: boolean;
  textColor: string;
  startingDay?: boolean;
  endingDay?: boolean;
}

interface Car {
  id: number;
  brand: string;
  model: string;
  rentPrice: number;
  // eslint-disable-next-line camelcase
  image_url: string;
  fuelType: string;
  transmission: string;
}

interface FilterModalDTO {
  low: number;
  high: number;
  fuelType: string;
  transmission: string;
}

const { height } = Dimensions.get('window');

const DatePick: React.FC = () => {
  const navigation = useNavigation();
  const [titleOpened, setTitleOpened] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [confirmButtonOpacity, setConfirmButtonOpacity] = useState(0.5);
  const [showFilter, setShowFilters] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState<Car[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const { toggleShowTabBar } = useAuth();

  useEffect(() => {
    api.get('cars').then(response => {
      setCars(response.data);
      setFilteredDataSource(response.data);
    });
  }, []);

  const [topContainerY] = useState(new Animated.Value(0));
  const [calendarOpacity] = useState(new Animated.Value(1));
  const [carContainerOpacity] = useState(new Animated.Value(0));

  useEffect(
    () =>
      startDate && endDate
        ? setConfirmButtonOpacity(1)
        : setConfirmButtonOpacity(0.5),
    [startDate, endDate],
  );

  const playAnimations = useCallback(() => {
    const topBarHeight =
      Platform.OS === 'ios' ? (height * 30) / 100 : (height * 20) / 100;

    Animated.parallel([
      Animated.timing(topContainerY, {
        toValue: titleOpened ? -topBarHeight : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(calendarOpacity, {
        toValue: titleOpened ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(carContainerOpacity, {
        toValue: titleOpened ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [topContainerY, calendarOpacity, titleOpened, carContainerOpacity]);

  const handleOpenCalendar = useCallback(() => {
    if (!titleOpened) {
      playAnimations();
      setTitleOpened(true);
      toggleShowTabBar();
    }
  }, [titleOpened, toggleShowTabBar, playAnimations]);

  const handleConfirmDates = useCallback(() => {
    if (startDate && endDate) {
      playAnimations();
      setTitleOpened(false);
      toggleShowTabBar();
    }
  }, [startDate, endDate, playAnimations, setTitleOpened, toggleShowTabBar]);

  const formatedStartDate = useMemo(() => {
    if (startDate) {
      return format(startDate, 'dd MMMM yyyy', {
        locale: ptBR,
      });
    }
    return '';
  }, [startDate]);

  const formatedEndDate = useMemo(() => {
    if (endDate) {
      return format(endDate, 'dd MMMM yyyy', {
        locale: ptBR,
      });
    }
    return '';
  }, [endDate]);

  const markedDates = useMemo(() => {
    let dates = {};
    const startEndColor = '#DC1637';

    if (startDate && endDate) {
      for (let i = startDate; i <= endDate; i = addDays(i, 1)) {
        const dateIndex = format(i, 'yyyy-MM-dd');

        let periodParams = {
          color: '#FDEDEF',
          selected: true,
          textColor: startEndColor,
        } as periodParamsDTO;

        if (i.getTime() === startDate.getTime()) {
          periodParams = {
            ...periodParams,
            startingDay: true,
            color: startEndColor,
            textColor: '#fff',
          };
        }
        if (i.getTime() === endDate.getTime()) {
          periodParams = {
            ...periodParams,
            endingDay: true,
            color: startEndColor,
            textColor: '#fff',
          };
        }

        dates = { ...dates, [dateIndex]: periodParams };
      }
    } else if (startDate && !endDate) {
      const dateIndex = format(startDate, 'yyyy-MM-dd');
      dates = {
        ...dates,
        [dateIndex]: {
          color: startEndColor,
          selected: true,
          startingDay: true,
          endingDay: true,
          textColor: '#fff',
        },
      };
    }
    return dates;
  }, [startDate, endDate]);

  const pickDate = useCallback(
    day => {
      const selectedDate = new Date(day.dateString);

      if (startDate) {
        if (selectedDate > startDate) {
          setEndDate(selectedDate);
        }
        if (endDate && endDate?.getTime() === selectedDate.getTime()) {
          setEndDate(null);
        }
        if (!endDate && startDate?.getTime() === selectedDate.getTime()) {
          setStartDate(null);
        }
        if (!endDate && selectedDate < startDate) {
          setStartDate(selectedDate);
        }
      } else {
        setStartDate(selectedDate);
      }
    },
    [startDate, endDate],
  );

  const handleOpenRentCarDetails = useCallback(
    car => {
      navigation.navigate('RentDetails', {
        car,
        startDate,
        endDate,
      });
    },
    [navigation, startDate, endDate],
  );

  const toggleFilter = useCallback(() => {
    setShowFilters(!showFilter);
  }, [showFilter]);

  const [min, max] = useMemo(() => {
    const prices = cars.map(car => car.rentPrice);
    if (prices.length === 0) {
      prices.push(0);
      prices.push(100);
    }
    prices.sort();
    return [prices[0], prices[prices.length - 1]];
  }, [cars]);

  const applyFilter = useCallback(
    ({ high, low, fuelType, transmission }: FilterModalDTO) => {
      const newArray = cars.filter(car => {
        let response = true;
        if (low > car.rentPrice || car.rentPrice > high) {
          response = false;
        }
        if (fuelType !== '' && fuelType !== car.fuelType) {
          response = false;
        }
        if (transmission !== '' && transmission !== car.transmission) {
          response = false;
        }
        return response;
      });
      setFilteredDataSource(newArray);
    },
    [cars],
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1f" />
      <TopPageContainer style={{ transform: [{ translateY: topContainerY }] }}>
        <Title>
          Escolha a {`\n`}
          data e encontre um carro.
        </Title>
      </TopPageContainer>
      <FromToPressable onPress={handleOpenCalendar}>
        <FromToContainer
          show={titleOpened}
          style={{ transform: [{ translateY: topContainerY }] }}
        >
          <FromContainer>
            <FromToLabel>DE</FromToLabel>
            <FromToInput
              value={formatedStartDate}
              picked={!formatedStartDate}
              editable={false}
            />
          </FromContainer>
          <ArrowContainer>
            {titleOpened && <ArrowLine />}

            <ArrowIcon
              name="chevron-right"
              color="#7A7A80"
              size={22}
              rotate={!titleOpened}
            />
          </ArrowContainer>
          <ToContainer>
            <FromToLabel>ATÉ</FromToLabel>
            <FromToInput
              value={formatedEndDate}
              picked={!formatedEndDate}
              editable={false}
            />
          </ToContainer>
        </FromToContainer>
      </FromToPressable>
      <CarsContainer
        style={{
          opacity: carContainerOpacity,
          zIndex: titleOpened ? -20 : 10,
        }}
      >
        <CarListHeader>
          <CarListTitle>
            Resultado{filteredDataSource.length > 1 && 's'}
          </CarListTitle>
          <CarListRight>
            <CarsListResults>
              {filteredDataSource.length} carro
              {filteredDataSource.length > 1 && 's'}
            </CarsListResults>
            <FilterIconButton onPress={toggleFilter}>
              <FilterIcon name="ios-options-outline" />
            </FilterIconButton>
          </CarListRight>
        </CarListHeader>
        <CarsContainerScrollView showsVerticalScrollIndicator={false}>
          {filteredDataSource.map(car => (
            <BigCarCard
              key={car.id}
              brand={car.brand}
              model={car.model}
              price={car.rentPrice}
              fuelType={car.fuelType}
              images={car.image_url}
              onPress={() => {
                handleOpenRentCarDetails(car);
              }}
            />
          ))}
        </CarsContainerScrollView>
      </CarsContainer>
      <CalendarContainer
        style={{
          opacity: calendarOpacity,
          zIndex: titleOpened ? 20 : -20,
        }}
      >
        <Calendar
          style={{
            paddingVertical: Platform.OS === 'ios' ? '10%' : '5%',
          }}
          minDate={Date()}
          markingType="period"
          markedDates={markedDates}
          onDayPress={pickDate}
          renderArrow={direction => (
            <ArrowIcon
              name={`chevron-${direction}`}
              size={20}
              color="#7A7A80"
              rotate={false}
            />
          )}
          theme={{
            textMonthFontFamily: 'Archivo-Medium',
            textMonthFontSize: 20,
            textDayFontFamily: 'Archivo-Medium',
          }}
        />
        <BottonPageContainer>
          <Button onPress={handleConfirmDates} opacity={confirmButtonOpacity}>
            Confirmar
          </Button>
        </BottonPageContainer>
      </CalendarContainer>
      <FilterModal
        closeModal={toggleFilter}
        visible={showFilter}
        onChangeValue={applyFilter}
        minPrice={min}
        maxPrice={max}
      />
    </Container>
  );
};

export default DatePick;
