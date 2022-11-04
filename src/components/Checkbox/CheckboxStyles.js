import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
  },
  checkbox: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },
});
