import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

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
  codeFieldRoot: {
    marginBottom: 20,
  },
  cellContainer: {
    width: width * 0.2,
    height: width * 0.2,
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
