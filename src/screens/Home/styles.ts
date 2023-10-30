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
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    maxHeight: 50,
    marginBottom: 24,
  },
  input: {
    backgroundColor: 'rgb(243,243,243)',
    height: '100%',
    flex: 1,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgb(224,224,224)',
    color: 'black',
  },
  searchButton: {
    backgroundColor: 'rgb(92,188,190)',
    paddingHorizontal: 18,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  loaderWrapper: {
    marginTop: -30,
    paddingBottom: 12,
  },
});
