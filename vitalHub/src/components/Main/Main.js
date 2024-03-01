import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";
import { BarContent, TextBar } from "./StyleMain";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PatientProfile } from "../../screens/PatientProfile/PatientProfile";

import { PatientConsultation } from "../../screens/PatientConsultation/PatientConsultation";

import { NavigationContainer } from '@react-navigation/native';
import { TextBarNormal } from "../Descriptions/Descriptions";


const bottomTab = createBottomTabNavigator()

export const Main = ({ navigation }) => {

    return (

        <bottomTab.Navigator
            initialRouteName="PatientConsultation"

            screenOptions={({ route }) => ({

                tabBarStyle: {  height: 60, paddingTop: 20, elevation: 20, },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {

                    if (route.name === "PatientProfile") {
                        return (
                            <BarContent
                                tabBarActiveBackgroundColor={
                                    focused ? "#ECF2FF" : "transparent"
                                }
                            >
                                <FontAwesome name="calendar" size={18} color="#4E4B59" />
                                {focused && <TextBar>Agenda</TextBar>}
                            </BarContent>
                        );
                    }

                    else (route.name === "PatientProfile")

                    {
                        return (
                            <BarContent
                                tabBarActiveBackgroundColor={
                                    focused ? "#ECF2FF" : "transparent"
                                }
                            >
                                <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />
                                {focused && <TextBarNormal onPress={() => { navigation.navigate("PatientProfile")}} text={"Perfil"}/>}
                            </BarContent>
                        );
                    }
                }
            })}
        >
            <bottomTab.Screen
                name="PatientConsultation"
                component={PatientConsultation}   
            />
            
        </bottomTab.Navigator>


    )
}