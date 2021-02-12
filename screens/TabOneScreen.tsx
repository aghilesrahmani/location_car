import { HeaderBackground } from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet,Image, ImageBackground, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('/Users/antoine/AwesomeProject/ferrari.jpg')}
      style={styles.img}
      ></ImageBackground>
      
      <Text style={styles.title}> Location de Voiture</Text>
      
      <TextInput style={styles.inputBox} placeholder='Email' placeholderTextColor='white'></TextInput>
      
      <TextInput style={styles.inputBox} placeholder='Password' placeholderTextColor='white'></TextInput>
    
    <View style={styles.Btn}>
      <Button title="Login"     color='white' onPress={() => Alert.alert('bonjour')}/>
      </View>
    </View>

  ); 

}
HeaderBackground

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  img:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:'absolute',
    justifyContent:'center'
  },
  title: {
    bottom: 200,
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputBox: {
    bottom:-180,
    fontSize:25,
    width:300,
    height:60,
    borderRadius:29,
    color:'black',
    backgroundColor: 'black',
    textAlign:'center',
    marginVertical:10
    
    
    //flex:1,
    
  },

  Btn:{
    bottom:-190,
    borderRadius:10,
    backgroundColor: 'black',
    

  }
});
