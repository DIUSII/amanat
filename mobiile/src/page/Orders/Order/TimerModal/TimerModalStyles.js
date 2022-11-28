import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  modalContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '25%',
    left: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 64,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#484653',
    marginBottom: 12,
    textAlign: 'center',
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 36,
  },
});
