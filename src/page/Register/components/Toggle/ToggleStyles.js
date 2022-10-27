import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(57, 45, 146, 0.1)',
    borderRadius: 30,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    borderRadius: 30,
    paddingVertical: 16,
    width: '50%',
  },
  itemActive: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    color: '#484653',
  },
});
