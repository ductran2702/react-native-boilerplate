import { loadAsync } from 'expo-font';

export const fonts = {
  openSan: {
    regular: 'openSans_regular',
    regularItalic: 'openSans_regular_italic',
    semiBold: 'openSans_semiBold',
    semiBoldItalic: 'openSans_semiBold_italic',
    bold: 'openSans_bold',
    boldItalic: 'openSans_bold_italic',
  },
  FcSubjectRounded: 'FcSubjectRounded',
};

// preload fonts
export const loadFonts = () =>
  loadAsync({
    FcSubjectRounded: require('@assets/fonts/FC Subject Rounded Regular.ttf'),
    openSans_regular: require('@assets/fonts/OpenSans-Regular.ttf'),
    openSans_regular_italic: require('@assets/fonts/OpenSans-Italic.ttf'),
    openSans_semiBold: require('@assets/fonts/OpenSans-Semibold.ttf'),
    openSans_semiBold_italic: require('@assets/fonts/OpenSans-SemiboldItalic.ttf'),
    openSans_bold: require('@assets/fonts/OpenSans-Bold.ttf'),
    openSans_bold_italic: require('@assets/fonts/OpenSans-BoldItalic.ttf'),
  });
