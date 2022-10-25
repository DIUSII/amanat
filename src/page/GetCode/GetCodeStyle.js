import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 30,
    backgroundColor: '#F5F5F5',
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
  codeFieldRoot: {
    marginBottom: 20,
  },
  cellContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    lineHeight: 52,
    fontSize: 44,
    textAlign: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  changeNumber: {
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: 'underline',
    color: '#484653',
  },
  changeNumberContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 42,
    alignItems: 'center',
  },
});
