import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOrientation } from '../../hooks/useScreenRotation';
import { getPrice } from '../../helpers';
import { IProps } from './productDetails.types';
import styles from './styles';

const VideoCallScreen: React.FC<IProps> = ({ route }) => {
  const { preview, title, publicName, price } = route.params;

  const { screenModes, orientation } = useOrientation();

  const isLandscape = orientation === screenModes.landscape;

  const priceValue = getPrice(price);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, isLandscape && styles.containerLandscape]}>
        <View style={[styles.imageWrapper, isLandscape && styles.imageWrapperLandscape]}>
          <Image source={{ uri: preview }} style={styles.image} resizeMode="contain" />
        </View>
        <View style={[styles.descriptionWrapper, isLandscape && styles.descriptionWrapperLandscape]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.publicName}>{publicName}</Text>
          <Text style={styles.price}>{priceValue}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoCallScreen;
