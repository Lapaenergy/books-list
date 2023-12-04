import React from 'react';
import { View, Text, TouchableOpacity, Image, InteractionManager } from 'react-native';
import { getPrice } from '../../../../helpers';
import { PreparedBook } from '../../../../store/storeData.types';
import styles from './styles';

interface IProps {
  book: PreparedBook;
  isLandscape: boolean;
  onBookPress: (book: PreparedBook) => void;
}

const BookListItemComponent: React.FC<IProps> = (props) => {
  const { book, onBookPress, isLandscape } = props;
  const { preview, publicName, title, price } = book || {};

  const handleCallPress = () => {
    InteractionManager.runAfterInteractions(() => onBookPress(book));
  };

  const priceValue = getPrice(price);

  return (
    <TouchableOpacity
      style={[styles.touchableWrapper, isLandscape && styles.touchableWrapperLandscape]}
      onPress={handleCallPress}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: preview }} style={styles.image} resizeMode="cover" />
          </View>
          <View style={styles.descriptionWrapper}>
            <View>
              <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
                {title}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.publicName}>
                {publicName}
              </Text>
            </View>
            <Text style={styles.price}>{priceValue}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookListItemComponent;
