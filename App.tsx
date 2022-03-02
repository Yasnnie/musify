
import Login from './src/components/Login';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { View, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import HomePage from './src/components/HomePage';
export default function App() {
  let [fontsLoaded] = useFonts({
    Mont: Montserrat_400Regular,
    MontBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <HomePage />
  );
}

