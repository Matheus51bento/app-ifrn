import { ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import { theme } from "./src/global/styles/theme";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina2 from "./src/screens/Pagina2";
import { StatusBar } from 'react-native';
import BottomTabs from "./src/components/navigation/bottomNavigation";
import { SafeAreaView } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <StatusBar backgroundColor="#1DB863" barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={BottomTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
