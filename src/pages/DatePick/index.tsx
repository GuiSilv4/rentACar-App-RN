import React, { useState, useCallback, useMemo, useEffect } from 'react';

import { addDays, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { StatusBar, Platform, Animated, Dimensions } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import Button from '../../components/Button';
import BigCarCard from '../../components/BigCarCard';
import { useAuth } from '../../hooks/auth';

import Lambo from '../../assets/Lambo.png';

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
} from './styles';

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

const { height } = Dimensions.get('window');

const DatePick: React.FC = () => {
  const [titleOpened, setTitleOpened] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [confirmButtonOpacity, setConfirmButtonOpacity] = useState(0.5);

  const { toggleShowTabBar, showTabBar } = useAuth();

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
        };

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
    // console.log(dates);
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

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1f" />
      <TopPageContainer style={{ transform: [{ translateY: topContainerY }] }}>
        <Title>
          Escolha a {`\n`}
          data e encontre um carro.
        </Title>
      </TopPageContainer>
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
        <ArrowContainer onPress={handleOpenCalendar}>
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
      <CarsContainer
        style={{
          opacity: carContainerOpacity,
          zIndex: titleOpened ? -20 : 10,
        }}
      >
        <CarsContainerScrollView>
          <CarListHeader>
            <CarListTitle>Resultados</CarListTitle>
            <CarListRight>
              <CarsListResults>5 carros</CarsListResults>
              <FilterIcon name="ios-options-outline" />
            </CarListRight>
          </CarListHeader>
          <BigCarCard
            brand="LAMBORGHINI"
            model="Huracan"
            price={580}
            fuelType="eletric"
            images={Lambo}
          />
          <BigCarCard
            brand="LAMBORGHINI"
            model="Huracan"
            price={580}
            fuelType="eletric"
            images={Lambo}
          />
          <BigCarCard
            brand="LAMBORGHINI"
            model="Huracan"
            price={580}
            fuelType="eletric"
            images={Lambo}
          />
          <BigCarCard
            brand="LAMBORGHINI"
            model="Huracan"
            price={580}
            fuelType="eletric"
            images={Lambo}
          />
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
    </Container>
  );
};

export default DatePick;
