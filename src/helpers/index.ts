import { CURRENT_CURRENCY } from '../constants';

export const getPrice = (price: string) => `${price} ${CURRENT_CURRENCY}`;
