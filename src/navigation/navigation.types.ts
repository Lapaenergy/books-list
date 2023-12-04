import { PreparedBook } from '../store/storeData.types';
import { SCREENS } from './constants';

export type RootStackParamList = {
  [SCREENS.HOME_SCREEN]: undefined;
  [SCREENS.PRODUCT_DETAILS_SCREEN]: PreparedBook;
};
