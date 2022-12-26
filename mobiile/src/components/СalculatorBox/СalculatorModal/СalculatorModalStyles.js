import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clear: {
    marginTop: 10,
    marginRight: -10,
  },
  modalContainer: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  container: {
    padding: 24,
    paddingTop: 0,
    borderRadius: 30,
    backgroundColor: '#fff',
    width: width - 60,
  },
  scrollView: {
    marginTop: height * 0.03,
  },
  volumeContainerLowOpacity: {
    opacity: 0.4,
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#DFDEE7',
    padding: 20,
    marginBottom: 20,
  },
  volumeLabel: {
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
  },
  volume: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#484653',
    marginBottom: 24,
  },
  plus: {
    opacity: 0.6,
  },
});
