import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
