import React from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import styles from './styles';

interface IProps {
  style?: ViewStyle;
}

const LoaderComponent: React.FC<IProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator color="rgb(92,188,190)" />
    </View>
  );
};

export default LoaderComponent;
