import React, { useCallback, useEffect, useRef } from 'react';
import { View, FlatList, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREENS } from '../../navigation/constants';
import { BookListItem, Search } from './components';
import { Loader } from '../../components';
import { useOrientation } from '../../hooks/useScreenRotation';
import { extractKey } from './home.helper';
import { usePaginatedContent } from './home.hooks';
import { PreparedBook } from '../../store/storeData.types';
import { IProps } from './home.types';
import styles from './styles';

const ITEM_HEIGHT = 330;

const HomeScreen: React.FC<IProps> = ({ navigation: { navigate } }) => {
  const textInputRef = useRef('');

  const { screenModes, orientation } = useOrientation();

  const { getPaginatedContent, books, isLoading, currentPage } = usePaginatedContent();

  const isLandscape = orientation === screenModes.landscape;
  const numOfTheColumns = isLandscape ? 4 : 2;

  useEffect(() => {
    getPaginatedContent({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchPress = () => {
    Keyboard.dismiss();
    getPaginatedContent({ searchParam: textInputRef.current });
  };

  const handleChangeText = (text: string) => {
    textInputRef.current = text;
  };

  const handleBookPress = useCallback(
    (book: PreparedBook) => {
      navigate(SCREENS.PRODUCT_DETAILS_SCREEN, book);
    },
    [navigate],
  );

  const handleEndReached = () => {
    if (currentPage && books.length) {
      getPaginatedContent({ searchParam: textInputRef.current });
    }
  };

  const renderListItem = useCallback(
    ({ item }: { item: PreparedBook }) => (
      <BookListItem book={item} onBookPress={handleBookPress} isLandscape={isLandscape} />
    ),
    [handleBookPress, isLandscape],
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
        <Search onSearchPress={handleSearchPress} onChangeText={handleChangeText} />
        <FlatList
          key={numOfTheColumns}
          horizontal={false}
          style={styles.list}
          data={books}
          renderItem={renderListItem}
          keyExtractor={extractKey}
          numColumns={numOfTheColumns}
          onEndReachedThreshold={0.8}
          onEndReached={handleEndReached}
          getItemLayout={getItemLayout}
          ListHeaderComponent={<View style={styles.listHeaderComponent} />}
          ListFooterComponent={isLoading ? <Loader style={styles.loaderWrapper} /> : null}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
