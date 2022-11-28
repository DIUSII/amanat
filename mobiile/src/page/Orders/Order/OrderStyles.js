import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  content: {
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  dateContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#DFDEE7',
    paddingTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 12,
    marginBottom: 14,
  },
  date: {
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    color: '#333',
  },
  padding: {
    paddingHorizontal: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  info: {
    fontSize: 17,
    lineHeight: 22,
    color: '#333333',
  }
});
