import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    width: width - 60,
    top: 64,
    left: 30,
  },
  content: {
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingVertical: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#484653',
  }
});
