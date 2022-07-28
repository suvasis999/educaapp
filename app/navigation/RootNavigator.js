import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screen/Home";
import Payment from "../screen/Payment";
import Register from "../screen/Register";
import Signin from "../screen/Signin";
import IonIcon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator=()=> {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={Home}  
        options={{headerShown: false,
          tabBarIcon: () => (<IonIcon name="home-outline" size={18} color="#51C3FE" />)
      }}/>
        <Tab.Screen name="Payment" component={Payment} 
        options={{headerShown: false,
          tabBarIcon: () => (<IonIcon name="md-checkbox-outline" size={18} color="#51C3FE" />)
      }}/>
         <Tab.Screen name="Register" component={Register}  options={{headerShown: false,
          tabBarIcon: () => (<IonIcon name="person-circle-outline" size={18} color="#51C3FE" />)
      }}/>
      </Tab.Navigator>
    );
  }

const RootNavigator=() =>{
    return (
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Home"
                component={TabNavigator}
                options={{headerShown: false}}
                />
                
                </Stack.Navigator>
            </NavigationContainer>
    );

}

export default RootNavigator