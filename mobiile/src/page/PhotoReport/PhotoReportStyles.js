import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 64,
  },
  scrollView: {},
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  clear: {
    position: 'absolute',
    right: -7,
    top: -7,
    zIndex: 1,
  },
});
