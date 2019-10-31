import React, {Component} from 'react';
import {View,Text,ImageBackground,Dimensions,Image,TouchableOpacity} from  'react-native';
import {Actions} from 'react-native-router-flux';
export default function Menu() {
    return (
      <View style={{
        flex:1,
        backgroundColor:'#7B1FA2'
      }}>
        <Text onPress={()=>Actions.Login()} style={styles.section}>- Anasayfa</Text>
        <Text style={styles.section}>- Hakkımızda</Text>
        <Text style={styles.section}>- İletişim</Text>
        <Text style={styles.section}>- Hakkımızda</Text>
        <Text style={styles.section}>- İletişim</Text>
        <Text style={styles.section}>- Hakkımızda</Text>
        <Text style={styles.section}>- İletişim</Text>
      </View>
    );
  
}
const styles={
  section:{
    color:'white',
    marginLeft:20,
    marginTop: 20,
    borderBottomColor:'#D81B60',
    borderBottomWidth:1,
  }
};
