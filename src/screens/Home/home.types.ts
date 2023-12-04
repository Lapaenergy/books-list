import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation.types';
import { SCREENS } from '../../navigation/constants';

type NavigationProps = NativeStackScreenProps<RootStackParamList, SCREENS.HOME_SCREEN>;

export interface IProps extends NavigationProps {}
