import React from 'react';
import { StyleSheet, View,ScrollView,StatusBar,TextInput} from 'react-native';
import HomeSectionComponent from '../src/conponents/HomeSectionComponent';
const HomeScreen = () => {
  return (
    <View>
      {/* header container*/}
      <StatusBar barStyle={"light-content"}/>
      <View style={styles.headercontainer}>
        <View style={styles.inputheader}>
         <TextInput style={styles.inputText} placeholder='Nhap cai gi do'>
         </TextInput>
      </View>
     </View>
     {/* */}
     <View style={styles.bodyContainer}>
        <ScrollView>
            <HomeSectionComponent/>      
        </ScrollView>
     </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    paddingTop:50,
    backgroundColor:'#1e88e5',

  },
  inputheader:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex:1,
    marginHorizontal:15,
    alignItems:'center',
    marginBottom:5,
    paddingHorizontal:10,
    borderRadius:7,
    height:40,
  },
  inputText:{
    fontSize:15,
    color:'#C0C0C0',
    fontWeight:'bold',
  },
  bodyContainer:{
    flex:1,
    backgroundColor: '#fff',

  },
});
export default HomeScreen ;
