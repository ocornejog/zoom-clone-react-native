import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import C from '../constants/mainColors';
import Styles from '../constants/Styles';
//import Colors from '../constants/Colors';
import Home from '../screens/Home';
import MeetingRoom from '../screens/MeetingRoom';
import FontStyles from '../constants/mainTextFormats';
import JoinARoom from '../screens/JoinARoom';


const Stack = createNativeStackNavigator();

export default function Navigation() {  
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'Home'}>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name='Room'
                component={MeetingRoom}
                options={{
                    title: 'Start a meeting',
                    headerStyle: {
                        backgroundColor: C.whitePrimary,
                    },
                    headerTitleStyle: [FontStyles.textBold, Styles.header],
                    headerTitleAlign: 'center',
                    headerTintColor: C.black
                }}
              />
              <Stack.Screen
                name='Join'
                component={JoinARoom}
                options={{
                    title: 'Walk into a meeting',
                    headerStyle: {
                        backgroundColor: C.whitePrimary,
                    },
                    headerTitleStyle: [FontStyles.textBold, Styles.header],
                    headerTitleAlign: 'center',
                    headerTintColor: C.black
                }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}