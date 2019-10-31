
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
  render(){
    return(
<View style={styles.container}>
  <View style={styles.headBackground}/>
  <KeyboardAvoidingView behavior="position">
    <View>
      <Text style={styles.logo}>BRF</Text>
      <Text style={styles.logoDescription}>Software</Text>
    </View>

  <ScrollView>
    <View style={styles.loginArea}>
     
     <LoginForm/>
    </View>
  </ScrollView>
  </KeyboardAvoidingView>
</View>
    )
  }
}
const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'#F5FCFF',
   paddingVertical:80
 },
 headBackground:{
   position:'absolute',
   top:0,
   left:0,
   height:250,
   width:'100%',
   backgroundColor: '#1572de',

 },
 logo:{
textAlign:'center',
fontSize:40,
fontWeight:'bold',
color:'#f2f2f2'
 },
 logoDescription:{
   textAlign:'center',
   color:'#f2f2f2'
 },
 loginArea:{
   marginHorizontal:40,
   marginVertical:40,
   backgroundColor:'#fff',
   padding:15,
   borderRadius:5,

   shadowColor:'black',
   shadowOpacity:.6,
   shadowRadius:3,
   shadowOffset:{
     width:0,
     height:2 
   },
   elevation:4
 },
 loginAreaTitle:{
     fontSize:20,
 textAlign:'center'
},
loginAreaDescription:{
    fontSize:12,
    color:'#7e868f',
    marginVertical:10,
    textAlign:'center'
}
});

