import * as React from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Avatar} from './Avatar';
import {UserInfo} from './UserInfo';
// import {Gallery} from './Gallery';

export const Profile = () => {
  const onAvatarChange = (image: ImageOrVideo) => {
    //console.log(image);
  };
  
  return (
    <View style={styles.scroll}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userRow}>
      <Text style={{color: 'black', fontSize: 25}}>Your Cat's Details</Text>
      
      <Text
        style={{
          color: 'black',
          fontSize: 12,
        }}>
        Did you know? Raspberry Pi are the most loyal of all cats and they also served in the military!
        </Text>

        <Text style={{color: 'black', fontSize: 17}}>Your Cat's name</Text>


      <TextInput
            placeholder="Fluffy"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            // borderColor
           
          />
        <Text style={{color: 'black', fontSize: 17}}>Your Cat's picture</Text>

        <Avatar
          onChange={onAvatarChange}
          source={require('./avatar-placeholder.png')}
        />
      </View>
        {/* <UserInfo /> */}
      <View style={styles.content} />
    </View>
  );
};



const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    padding: 15,
    // marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: '#d8d8db',
  },
 
});