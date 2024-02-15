import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { ForgotPassword } from './src/screens/ForgotPassword/ForgotPassword';

import { useFonts, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { CheckEmail } from './src/screens/CheckEmail/ChekEmail';
import { RedefinePassword } from './src/screens/RedefinePassword/RedefinePassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { PatientProfile } from './src/screens/PatientProfile/PatientProfile';
import { MedicalRecords } from './src/screens/MedicalRecords/MedicalRecords';
import { DoctorConsultation } from './src/screens/DoctorConsultation/DoctorConsultation';


const Stack = createNativeStackNavigator();



export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold
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

      <Stack.Navigator screenOptions={{
        headerShown:false
      }}   >

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

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: 'ForgotPassword' }}
        />

        <Stack.Screen
          name="CheckEmail"
          component={CheckEmail}
          options={{ title: 'CheckEmail' }}
        />

        <Stack.Screen
          name="RedefinePassword"
          component={RedefinePassword}
          options={{ title: 'RedefinePassword' }}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'CreateAccount' }}
        />

        <Stack.Screen
          name="PatientProfile"
          component={PatientProfile}
          options={{ title: 'PatientProfile' }}
        />

        <Stack.Screen
          name="MedicalRecords"
          component={MedicalRecords}
          options={{ title: 'MedicalRecords' }}
        />

        <Stack.Screen
          name="DoctorConsultation"
          component={DoctorConsultation}
          options={{ title: 'DoctorConsultation' }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

