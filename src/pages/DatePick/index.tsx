import React, { useState, useCallback, useMemo, useEffect } from 'react';

import { addDays, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { StatusBar, Platform } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Button from '../../components/Button';

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

const DatePick: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
      <TopPageContainer>
        <Title>
          Escolha a {`\n`}
          data e encontre um carro.
        </Title>
      </TopPageContainer>
      <FromToContainer>
        <FromContainer>
          <FromToLabel>DE</FromToLabel>
          <FromToInput
            value={formatedStartDate}
            picked={!formatedStartDate}
            editable={false}
          />
        </FromContainer>
        <ArrowContainer>
          <ArrowLine />
          <ArrowIcon name="chevron-right" color="#7A7A80" size={22} />
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
      <Calendar
        style={{
          paddingVertical: Platform.OS === 'ios' ? 30 : 5,
        }}
        minDate={Date()}
        markingType="period"
        markedDates={markedDates}
        onDayPress={pickDate}
        renderArrow={direction => (
          <ArrowIcon name={`chevron-${direction}`} size={20} color="#7A7A80" />
        )}
        theme={{
          textMonthFontFamily: 'Archivo-Medium',
          textMonthFontSize: 20,
          textDayFontFamily: 'Archivo-Medium',
        }}
      />
      <BottonPageContainer>
        <Button>Confirmar</Button>
      </BottonPageContainer>
    </Container>
  );
};

export default DatePick;
