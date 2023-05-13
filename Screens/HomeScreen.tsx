import React from 'react';
import {Text, View} from 'react-native';
import Permission from '../components/Permission';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Go to Profile tab to change pet details</Text>
    </View>
  );
};

export default HomeScreen;
