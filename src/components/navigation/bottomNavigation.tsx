import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType } from 'react-native';
import Pagina2 from '../../screens/Pagina2';
import Listagem from '../../screens/Listagem';


type RouteName = 'Registrar' | 'Listar';

const icons: Record<RouteName, ImageSourcePropType> = {
  Registrar: require('../../assets/agenda.png'),
  Listar: require('../../assets/lista.png'),
};

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icon = icons[route.name as RouteName];
            return <Image source={icon} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Registrar" component={Pagina2} />
        <Tab.Screen name="Listar" component={Listagem} />
      </Tab.Navigator>

  );
}
