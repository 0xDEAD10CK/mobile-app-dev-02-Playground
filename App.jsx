import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import NasaScreen from './screens/NASAScreen';

//const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: "My Home",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "My Details",
            tabBarLabel: "Details",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="card-account-details-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Nasa"
          component={NasaScreen}
          options={{
            title: "Image of the Day",
            tabBarLabel: "Nasa",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="card-account-details-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;