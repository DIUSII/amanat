import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
  },
  userInfoContainer: {
    backgroundColor: '#227845',
    paddingLeft: 30,
    paddingTop: 67,
    paddingBottom: 36,
    borderTopRightRadius: 29,
    marginBottom: 36,
  },
  fullName: {
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 30,
    color: '#fff',
    marginBottom: 8,
  },
  phone: {
    fontSize: 17,
    lineHeight: 22,
    color: '#fff',
  },
  navigationContainer: {
    marginLeft: 30,
  },
  itemContainer: {
    marginBottom: 36,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    color: '#484653',
  },
  logOut: {
    alignSelf: 'flex-end',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
