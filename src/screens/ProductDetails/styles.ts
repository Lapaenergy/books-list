import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 26,
    paddingHorizontal: 24,
  },
  containerLandscape: {
    flexDirection: 'row',
  },
  imageWrapperLandscape: {
    marginRight: 24,
    flex: 1,
    width: undefined,
    height: '100%',
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: 'rgb(224,224,224)',
    width: '100%',
    height: '60%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 18,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  descriptionWrapper: {},
  descriptionWrapperLandscape: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  publicName: {
    fontSize: 16,
    marginBottom: 12,
    color: 'grey',
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
});
