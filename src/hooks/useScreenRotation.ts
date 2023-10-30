import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const SCREEN_MODE = {
  portrait: 'portrait',
  landscape: 'landscape',
};

export function useOrientation() {
  const [orientation, setOrientation] = useState(SCREEN_MODE.portrait);

  const detectScreenMode = (width: number, height: number) => {
    if (width < height) {
      setOrientation(SCREEN_MODE.portrait);
      return;
    }
    if (width > height) {
      setOrientation(SCREEN_MODE.landscape);
    }
  };

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    detectScreenMode(screenWidth, screenHeight);

    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      detectScreenMode(width, height);
    });
  }, []);

  return { orientation, screenModes: SCREEN_MODE };
}
