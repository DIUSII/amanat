import React, {useEffect, useRef, useState} from 'react';
import { DateRangePicker  } from 'react-date-range';
import * as rdrLocales from 'react-date-range/dist/locale';


import calendar from './assets/images/calendar.svg';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {Container, ContainerDateRangePicker, ContainerInput, Image, Input} from './DatePickerInputStyles';


const DatePickerInput = () => {
  const rootEl = useRef(null);

  const [value, onChange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [range, setRange] = useState('');
  const [visibleCalendar, setVisibleCalendar] = useState(false);

  const handleRange = (date) => {
    const {startDate, endDate} = date.selection;
    const changedStartDate =
      startDate.toLocaleDateString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric'});
    const changedEndDate =
      endDate.toLocaleDateString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric'});

    onChange(date.selection);
    setRange(`${changedStartDate} - ${changedEndDate}`)
  }

  useEffect(() => {
    const onClick = e => rootEl.current.contains(e.target) || setVisibleCalendar(false);

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);


  return (
    <Container ref={rootEl}>
      <ContainerInput
        onClick={() => {
          setVisibleCalendar(!visibleCalendar);
        }}>
        <Input
          placeholder={'Не выбрана'}
          type="text"
          disabled
          value={range}
          visibleCalendar={visibleCalendar}
        />
        <Image src={calendar} alt="calendar" />
      </ContainerInput>
      {visibleCalendar ? (
        <ContainerDateRangePicker>
          <DateRangePicker
            locale={rdrLocales.ru}
            ranges={[value]}
            onChange={handleRange}
          />
        </ContainerDateRangePicker>
      ) : null}
    </Container>
  );
};

export default DatePickerInput;