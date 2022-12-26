import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
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
    top: -15,
    right: -15,
    zIndex: 10,
  },
});
