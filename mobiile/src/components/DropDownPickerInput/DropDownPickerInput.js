import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Shadow} from 'react-native-shadow-2';

import {useAppDispatch} from '../../utils/hooks';

import styles from './DropDownPickerInputStyles';
import {getCities} from '../../store/slice/AuthSlice';

const DropDownPickerInput = ({
  value,
  setValue,
  placeholder,
  searchable,
  items,
  setItems,
  style,
  multiple,
}) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeCategoriesNames =
    items &&
    items
      .filter(item => {
        if (value.includes(item.value)) {
          return item.label;
        }
      })
      .map(item => item.label)
      .join(', ');
  const cutLengthNames =
    value.length > 1
      ? `${activeCategoriesNames.slice(
          0,
          activeCategoriesNames.indexOf(',') + 5,
        )}...`
      : activeCategoriesNames;
  console.log(value);
  // useEffect(() => {
  //   dispatch(getCities());
  // }, [open]);

  return (
    <View style={[styles.selectCity, style]}>
      <Shadow
        distance={2}
        startColor={'#DFDFE650'}
        endColor={'#DFDFE650'}
        style={{width: '100%'}}
        offset={[0, 3]}>
        <DropDownPicker
          textStyle={styles.text}
          searchTextInputStyle={styles.searchTextInputStyle}
          searchContainerStyle={styles.searchContainerStyle}
          style={[{borderWidth: open ? 1 : 0}, styles.dropDownStyle]}
          labelStyle={{flexWrap: 'nowrap'}}
          placeholder={placeholder}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          translation={{
            NOTHING_TO_SHOW: 'Ничего не найдено',
          }}
          open={open}
          multiple={multiple}
          multipleText={value && items ? cutLengthNames : ''}
          autoScroll={true}
          value={value}
          searchPlaceholder={'Поиск'}
          loading={loading}
          searchable={searchable}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </Shadow>
    </View>
  );
};

export default DropDownPickerInput;
