import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: height - 86,
    paddingHorizontal: 30,
    paddingTop: 32,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },
  userAvatar: {
    paddingTop: 64,
    alignItems: 'center',
    marginBottom: 52,
  },
  fullName: {
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#484653',
  },
  logOut: {
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#484653',
  },
});
