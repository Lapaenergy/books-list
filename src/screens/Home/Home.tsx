import React, { useCallback, useState, useEffect, useRef } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchIcon from '../../assets/svg/search.svg';
import { SCREENS } from '../../navigation/constants';
import { BookListItem } from './components';
import { useOrientation } from '../../hooks/useScreenRotation';
import { extractKey, formatFetchedData, getBooks } from './home.helper';
import { PreparedBook } from '../../store/storeData.types';
import { IProps } from './home.types';
import styles from './styles';

const ITEM_HEIGHT = 330;

const HomeScreen: React.FC<IProps> = ({ navigation: { navigate } }) => {
  const [books, setBooks] = useState<PreparedBook[]>([]);
  const [isLoading, setLoadingBooks] = useState<boolean>(false);
  const textInputRef = useRef('');
  const pageRef = useRef(0);

  const { screenModes, orientation } = useOrientation();

  const isLandscape = orientation === screenModes.landscape;
  const numOfTheColumns = isLandscape ? 4 : 2;

  useEffect(() => {
    getPaginatedContent({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPaginatedContent = async ({ searchParam }: { searchParam?: string }) => {
    if (isLoading) {
      return;
    }

    try {
      setLoadingBooks(true);
      const pageToFetch = pageRef.current + 1;
      const newBooks = await getBooks({ pageToFetch, searchParam });

      const formattedData = formatFetchedData(newBooks?.data?.items?.materials) || [];

      pageRef.current = pageToFetch;

      setBooks((prevBooks) => [...prevBooks, ...formattedData]);
    } catch (error) {
      console.log('Fetch content error', error);
    } finally {
      setLoadingBooks(false);
    }
  };

  const handleSearchPress = () => {
    setBooks([]);
    pageRef.current = 0;
    Keyboard.dismiss();
    getPaginatedContent({ searchParam: textInputRef.current });
  };

  const handleCallPress = useCallback(
    (book: PreparedBook) => {
      navigate(SCREENS.PRODUCT_DETAILS_SCREEN, book);
    },
    [navigate],
  );

  const handleEndReached = () => {
    if (pageRef.current) {
      getPaginatedContent({ searchParam: textInputRef.current });
    }
  };

  const handleChangeText = (text: string) => {
    textInputRef.current = text;
  };

  const renderListItem = useCallback(
    ({ item }: { item: PreparedBook }) => (
      <BookListItem book={item} onCallPress={handleCallPress} isLandscape={isLandscape} />
    ),
    [handleCallPress, isLandscape],
  );

  const getItemLayout = useCallback(
    (
      data: ArrayLike<PreparedBook> | null | undefined,
      index: number,
    ): { length: number; offset: number; index: number } => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [books],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Nach Material oder Autor*innen suchen"
            placeholderTextColor="grey"
            onSubmitEditing={handleSearchPress}
            onChangeText={handleChangeText}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
            <SearchIcon width={18} height={18} fill="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          key={numOfTheColumns}
          horizontal={false}
          style={styles.list}
          data={books}
          renderItem={renderListItem}
          keyExtractor={extractKey}
          numColumns={numOfTheColumns}
          onEndReachedThreshold={0.3}
          onEndReached={handleEndReached}
          getItemLayout={getItemLayout}
          ListHeaderComponent={<View style={styles.listHeaderComponent} />}
          ListFooterComponent={
            isLoading ? (
              <View style={styles.loaderWrapper}>
                <ActivityIndicator color="rgb(92,188,190)" />
              </View>
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
