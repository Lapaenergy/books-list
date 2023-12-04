import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import SearchIcon from '../../../../assets/svg/search.svg';
import styles from './styles';

interface IProps {
  onSearchPress: () => void;
  onChangeText: (text: string) => void;
}

const SearchComponent: React.FC<IProps> = ({ onSearchPress, onChangeText }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Nach Material oder Autor*innen suchen"
        placeholderTextColor="grey"
        onSubmitEditing={onSearchPress}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
        <SearchIcon width={18} height={18} fill="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
