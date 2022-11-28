import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
    zIndex: 2,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  input: {
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 22,
    color: '#484653',
    paddingLeft: 20,
    paddingTop: 6,
    paddingBottom: 6,
    flex: 1,
  },
  map: {
    borderLeftColor: '#DFDEE7',
    borderLeftWidth: 1,
    paddingLeft: 12,
    height: 36,
    opacity: 0,
    justifyContent: 'center',
    marginRight: 30,
  },
  mapActive: {
    opacity: 1,
  },
  textMap: {
    fontSize: 15,
    lineHeight: 18,
    color: '#484653',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DFDEE7',
    marginRight: 26,
  },
});
