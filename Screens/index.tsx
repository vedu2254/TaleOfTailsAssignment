import * as React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Avatar} from './Avatar';
import {UserInfo} from './UserInfo';
import Customdatepicker from '../src/components/datepicker';
import {useState} from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioButton from '../src/components/RadioButton';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';


export const Profile = () => {
  
  const data = [
    { value: 'Female' },
    { value: 'Male' },
  ];

//   const onTestPress = () => {
//     this.props.navigator.push('page2');
// }

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  const navigation=useNavigation();
  const onAvatarChange = (image: ImageOrVideo) => {
    //console.log(image);
  };

  return (
    <View style={styles.scroll}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.userRow}>
        <Text style={{color: 'black', fontSize: 25, fontWeight:2000}}>Your Cat's Details</Text>
        <TextInput
        editable
        multiline
        numberOfLines={2}
          placeholder="Did you know? Raspberry Pi are the most loyal of all cats and they
          also served in the military!"
          placeholderTextColor="#666666"
          // keyboardType="email-address"
          autoCorrect={false}
          // style={{borderColor: 'black', }}
          // borderColor
        />

       

        <Text style={{color: 'black', fontSize: 25, fontWeight:2000, marginBottom:-5}}>Your Cat's name</Text>

        <TextInput
          placeholder="Fluffy"
          placeholderTextColor="#666666"
          // keyboardType="email-address"
          autoCorrect={false}
          // style={{borderColor: 'black', }}
          // borderColor
        />
        <Text style={{color: 'black', fontSize: 25, fontWeight:2000, marginBottom:10, marginTop:-5}}>Your Cat's picture</Text>

        <Avatar
          onChange={onAvatarChange}
          source={require('./avatar-placeholder.png')}
        />

        <Text style={{color: 'black', fontSize: 25, fontWeight:2000, marginTop:10, marginBottom:10}}>Date of Birth</Text>
        <Customdatepicker
          textStyle={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderColor: '#D3D3D3',
            borderWidth: 1,
          }}
          onDateChange={value => console.log('Date Changed:' + value)}
        />

        <Text style={{color: 'black', fontSize: 25, fontWeight:2000, marginTop:10, marginBottom:10}}>
          Current Weight(in kg)
        </Text>
        <View style={{width: '50%', flexDirection: 'row'}}>
          <Button
            style={{flex: 1}}
            title="   -   "
            color="black"
            onPress={decrementCounter}></Button>
          <Text
            style={{
              paddingLeft: 35,
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            {counter}
          </Text>
          <Button
            style={{flex: 1}}
            title="   +   "
            color="black"
            onPress={incrementCounter}></Button>
        </View>
      </View>
      {/* <UserInfo /> */}
      <RadioButton data={data} />
      
            
      {/* <View style={styles.content} /> */}
      <View style={{alignItems: "center"}}>

      <View width="80%">


      <Button
            // width="80%"
            // style={{flex: 1}}
            // fontSize="large"
            
            padding="10"
            title="Save and Proceed"
            color="black"
            onPress={()=>{navigation.navigate("Home")}}></Button>

            </View>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    flex: 1,
  },
  userRow: {
    // padding: 15,
    paddingLeft:15,
    paddingRight:15,
    // marginTop: 70,
  },
  content: {
    flex: 1,
    backgroundColor: '#d8d8db',
  },
});
