
import { ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native';

import { useFonts, Roboto_500Medium, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Container } from './style.js'
// import { ScrollViewContainer } from './src/components/Container/Container';
import { Header } from './src/components/Header/Header.js';
import { Home } from './src/screens/Home/Home.js';



export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Container>

      <StatusBar translucent backgroundColor='trasparent' barStyle={'dark-content'}/>

      <Header/>

      <Home/>

    </Container>
  );
}

