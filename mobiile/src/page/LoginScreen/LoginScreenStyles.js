import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  subTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    color: '#484653',
    marginBottom: 40,
  },
  rules: {
    position: 'absolute',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 19,
    color: '#ABA9B9',
    left: 30,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
