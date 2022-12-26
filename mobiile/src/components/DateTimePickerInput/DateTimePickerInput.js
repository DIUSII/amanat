import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {View, TouchableOpacity} from 'react-native';
import Input from '../Input/Input';

const DateTimePickerInput = ({
  value,
  setValue,
  maximumDate,
  minimumDate = new Date(1950, 0, 1),
  placeholder,
  mode,
}) => {
  const [dateForDatePicker, setDateForDatePicker] = useState(new Date());
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [visibleDateTimePicker, setVisibleDateTimePicker] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setVisibleDatePicker(true);
      }}>
      <Input value={value.label} enable={false} placeholder={placeholder} />
      {visibleDatePicker ? (
        <DateTimePicker
          value={new Date()}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          onChange={event => {
            if (event.type === 'set') {
              setVisibleDatePicker(false);
              const timestamp = new Date(event.nativeEvent.timestamp);

              if (mode === 'datetime') {
                setDateForDatePicker(timestamp);
                setVisibleDateTimePicker(true);
              } else {
                setValue(timestamp);
              }
            }

            setVisibleDatePicker(false);
          }}
        />
      ) : null}
      {visibleDateTimePicker ? (
        <View>
          <DateTimePicker
            value={dateForDatePicker}
            mode={'time'}
            onChange={event => {
              if (event.type === 'set') {
                setVisibleDateTimePicker(false);

                const timestamp = new Date(event.nativeEvent.timestamp);

                setValue(timestamp);
              }

              setVisibleDateTimePicker(false);
            }}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default DateTimePickerInput;
