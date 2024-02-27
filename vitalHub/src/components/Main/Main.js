// import { FontAwesome } from "@expo/vector-lcons";
// import { FontAwesome } from "expo/vector-icons";
// import { Text } from "react-native";
// import { ContentIcon, Texticon } from "./Style";


// const bottomTab = createBottonTabNavigator()

// export const Main = () => {

//     return (

//         <bottomTab.Navigator

//             initialRouteName="PatientConsultation"

//             ScreenOptions={({ route }) => ({

//                 tabBarStyle: { backgroundColor: "#FFFFFF", helght: 80, paddingTop: 10 },

//                 tabBarActiveBackgroundcolor: "transparent",

//                 tabBarShowLabel: false,

//                 tabBarlcon: ({ focused }) => {
//                     if (route.name === "PatientConsultation") {

//                         return (

//                             <Contentlcon

//                                 tabBarActiveBackgroundcolors={
//                                     focused ? "#ECF2FF" : "transparent"
//                                 }
//                             >

//                                 <FontAwesome name="calendar" size={18} color="#4E4B59" />

//                                 {focused && <Textlcon>Agenda<TextIcon />}

//                                 </ContentIcon>
//                         );

//         }
//                                 else (route.name === "PatientProfile"){

//             return (
//                                 <ContentIcon
//                                     tabBarActiveBackgroundColor={
//                                         focused ? "#ECF2FF" : "transparent"
//                                     }
//                                 >

//                                     <FontAwesome5 name="user-circle" size={22} color="#4E4N59" />

//                                     {focused && <Text>Perfil</ Text>}
//                                 </ContentIcon>

//                                 );
//  }
//  },
//  })}
// >



// import { AppRegistry } from 'react-native';
// import App from '../'; // ou o caminho para o seu componente principal

// AppRegistry.registerComponent('App.js', () => App);

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";
import { ContentIcon, TextIcon } from "./StyleMain";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PatientProfile } from "../../screens/PatientProfile/PatientProfile";

import { PatientConsultation } from "../../screens/PatientConsultation/PatientConsultation";


const bottomTab = createBottomTabNavigator()

export const Main = () => {

    return (

        <bottomTab.Navigator 
            initialRouteName="PatientConsultation"

            screenOptions={({ route }) => ({
                
                tabBarStyle: { backgroundColor: "#FFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,

                tabBarIcon: ({ focused }) => {
                    if(route.name === "PatientProfile") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={
                                    focused ? "#ECF2FF" : "transparent"
                                }
                            >
                                <FontAwesome name="calendar" size={18} color="#4E4B59"/>
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        );
                    } 
                    
                    else( route.name === "PatientProfile") 
                    
                    {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={
                                    focused ? "#ECF2FF" : "transparent"
                                }
                            >
                                <FontAwesome5 name="user-circle" size={22} color="#4E4B59"/>
                                {focused && <Text>Perfil</Text>}
                            </ContentIcon>
                        );
                    }
                }
            })}
        />
    )
}