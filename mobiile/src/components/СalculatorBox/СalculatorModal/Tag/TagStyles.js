import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tags: {
    backgroundColor: '#DFDEE7',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  name: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
  },
  clear: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});
