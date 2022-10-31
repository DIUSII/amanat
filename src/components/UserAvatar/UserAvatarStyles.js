import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 109,
    height: 109,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 3,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 27,
  },
  initContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pencil: {
    position: 'absolute',
    right: -15,
    top: -15,
  },
});
