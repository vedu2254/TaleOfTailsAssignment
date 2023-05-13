import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Profile} from './Screens';
import HomeScreen from './Screens/HomeScreen';
import {ImageGallery} from './Screens/ImagesGallery';
import {AppEntry} from './splash/AppEntry';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }
  }, [isVisible]);

  return (
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      {isVisible ? (
        <AppEntry />
      ) : (
        <NavigationContainer>
          <Tab.Navigator initialRouteName={HomeScreen} options={{HeaderShown: false}}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                // headerShown: false,
                tabBarIcon: () => (
                  <MaterialIcons name={"home"} color="#000" size={28} />
                ),
              }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                headerShown: false,

                tabBarIcon: () => (
                  <MaterialIcons name={"person"} color="#000" size={28} />
                ),
              }}/>
           
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};

export default App;
