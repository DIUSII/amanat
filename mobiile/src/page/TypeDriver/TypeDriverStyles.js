import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    paddingTop: 64,
    paddingBottom: 32,
    paddingHorizontal: 30,
    minHeight: height - 86,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    color: '#484653',
    marginBottom: 40,
  },
  label: {
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
    marginRight: 5,
  },
});
