import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 206,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 32,
    paddingHorizontal: 30,
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 12,
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
  },
  textSearchDriver: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#484653',
    marginBottom: 12,
  },
  timer: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#ABA9B9',
    marginBottom: 20,
  },
});
