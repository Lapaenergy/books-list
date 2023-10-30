import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  touchableWrapper: {
    width: '50%',
    paddingHorizontal: 8,
  },
  touchableWrapperLandscape: {
    width: '25%',
  },
  container: {
    height: 200,
    marginBottom: 130,
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgb(209,209,209)',
  },
  contentWrapper: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'absolute',
    top: -100,
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    width: '100%',
    height: 182,
  },
  image: {
    width: '100%',
    height: 180,
  },
  fullName: {
    marginLeft: 8,
    color: 'black',
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: 'black',
    marginBottom: 2,
  },
  publicName: {
    fontSize: 11,
    color: 'grey',
  },
  price: {
    fontSize: 12,
    fontWeight: '800',
    color: 'black',
  },
  descriptionWrapper: {
    height: '51%',
    justifyContent: 'space-between',
  },
});
