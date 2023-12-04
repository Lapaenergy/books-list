import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 24,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  navigationButtonText: {
    color: 'black',
  },
  listHeaderComponent: {
    height: 100,
    width: '100%',
  },
  list: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 14,
  },
  loaderWrapper: {
    marginTop: -30,
    paddingBottom: 12,
  },
});
