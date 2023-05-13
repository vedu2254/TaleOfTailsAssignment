import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {Pressable} from 'react-native'; //additional import.
import { useState } from "react";
import styles from './styles';


export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
  return (
    // <ScrollView 
    // // horizontal="true"
    // >

    <View style={{padding:10}}>
        <View flexDirection="row">

        <Text style={{color: 'black', fontSize: 25, fontWeight:2000, marginTop:-5, marginBottom:-10}}> Gender:</Text><Text style={{color: 'grey', fontSize:25, verticalAlign: 'center'}}> {userOption}</Text>
        </View>
      {data.map((item) => {
          return <Text style={{color: 'grey', fontSize: 18, marginBottom: 5,}} onPress={()=>setUserOption(item.value)} > {item.value}</Text>;
        })}

    </View>
        // </ScrollView>
  );
}