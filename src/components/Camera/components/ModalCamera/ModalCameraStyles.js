import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '33%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#ABA9B9',
    borderRadius: 15,
    width: '10%',
    height: 2,
  },
  content: {
    width: '80%',
    height: '100%',
    marginTop: 20,
  },
});
