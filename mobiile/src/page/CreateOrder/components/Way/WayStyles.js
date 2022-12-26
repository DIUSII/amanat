import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    paddingHorizontal: 30,
    backgroundColor: '#FBFBFF',
    width: width,
    height: height * 3,
    left: -30,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 240,
    flex: 1,
    marginLeft: 68,
    marginRight: 20,
    marginBottom: 120,
  },
  hideVisible: {
    position: 'absolute',
    width: '100%',
    top: 150,
  },
  item: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DFDEE7',
  },
  textAddress: {
    fontSize: 17,
    lineHeight: 22,
    color: '#ABA9B9',
  },
});
