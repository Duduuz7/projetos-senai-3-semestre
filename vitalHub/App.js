import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';

import { useFonts, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold} from '@expo-google-fonts/montserrat-alternates';


const Stack = createNativeStackNavigator();



export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (

    //Container - envolve toda a estrutura de navegação
    //Navigator - componente para a navegação
    //Screen - tela
    //name: nome da tela
    //component: componente que será chamado
    //options(title): título da tela

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Navegação"
          component={Navegacao}
          options={{ title: 'Navegação' }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

