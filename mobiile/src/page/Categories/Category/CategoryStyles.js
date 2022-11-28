import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    backgroundColor: '#FBFBFF',
    borderRadius: 30,
    height: 140,
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  categoryActive: {
    backgroundColor: '#227845',
  },
  title: {
    lineHeight: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#484653',
  },
  titleActive: {
    color: '#fff',
  },
  icon: {
    textAlign: 'center',
    alignItems: 'center',
  },
  iconActive: {
    // backgroundColor: '#fff',
    color: '#fff',
  },
});
