import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CreateAccount from "../modules/auth/screens/CreateAccount";
import {Icon} from '@rneui/base'
import LearningComponent from "../learning/screens/LearningComponent";
import HomeStack from "./stack/home/HomeStack";
import Profile from "../modules/home/screens/Profile";


const Tab= createBottomTabNavigator();

//Si no se define initialRouteName se renderiza el primero
export default function NavigationLogger(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const { iconName, iconType } = getIconName(route.name, focused);
                  return (
                    <Icon name={iconName} type={iconType} size={size} color={color} />
                  );
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
              })}>

                <Tab.Screen name="Home" component={HomeStack} options={{title:"Inicio"}}></Tab.Screen>
                <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil"}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const getIconName = (routeName, focused) => {
    let iconName = "";
    let iconType = "material-community";
  
    switch (routeName) {
      case "Home":
        iconName = focused ? "home" : "home-outline";
        break;
        case "Profile":
            iconName = focused ? "account" : "account-outline";
            break;
    }
    return { iconName, iconType };
  };