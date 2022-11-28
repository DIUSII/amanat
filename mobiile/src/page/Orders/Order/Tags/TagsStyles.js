import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  content: {
    backgroundColor: 'transparent',
    marginRight: 12,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    fontSize: 15,
    lineHeight: 19,
    color: '#333',
  },
});
