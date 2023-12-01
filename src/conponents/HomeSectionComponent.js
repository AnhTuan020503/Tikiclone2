import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const item_image = require('../asset/samsung-galaxy-s22-ultra-5g-cu-2.jpg');
const section_banner = require('../asset/Logo_Tiki.png');
const item_image2 = require('../asset/vn-galaxy-s23-s918-446906-sm-s918bzrbxxv-thumb-534877307.webp');

const ProductItem = ({ image, name, price }) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemimage}/>  
    <Text style={styles.textName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.text}>{price}</Text>
  </View>
);

const HomeSectionComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Dien Thoai - May Tinh bang</Text>
      <Image style={styles.sectionImage} source={section_banner}/>
      <ScrollView horizontal={true}>
        <View style={styles.filterContainer}>
          {[
            'Tat ca ',
            'Dien thoai SmartPhone',
            'May tinh bang ',
            'Dien Thoai',
          ].map((e, index) => (
            <View 
              key={index.toString()}
              style={index === 0 ? styles.filterActiveButtonContainer : styles.filterInActiveButtonContainer}
            >
              <Text style={index === 0 ? styles.filterActiveText : styles.filterInActiveText}>{e}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {[
            {image1: item_image, image2: item_image},
            {image1: item_image, image2: item_image},
            {image1: item_image2, image2: item_image2},
            {image1: item_image2, image2: item_image2},
          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem
                name="SamSung galaxy s23 ultra"
                image={e.image1}
                price="23.000.000"
              />
              <ProductItem
                name="SamSung galaxy s23 ultra"
                image={e.image2}
                price="23.000.000"
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>Xem them san pham</Text>
      </View>
    </View>
  );
};

const styles =StyleSheet.create({
    sectionContainer:{
        backgroundColor: '#fff',
        paddingHorizontal:10,
        
      },
      sectionTitle:{
        fontWeight:'700',
        fontSize:16,
        color:'#2f2f2f',
        marginVertical:10,
      },
      sectionImage:{
        width: 320,
        height: 130,
        borderRadius:4,
        marginLeft:20,
      },
      listItemContainer:{
        flexDirection:'row',
        marginTop: 20,
      },
      itemContainer:{
          width:80,
          marginRight:15,
          
      },
      itemimage:{
        width:100,
        height:100,
        marginVertical:10,
      },
      textName:{
        fontSize :14,
        color:'#484848',
        marginVertical:4,
        marginHorizontal:5,
      },
      text:{
        marginLeft:5,
        fontWeight:'bold'
      },
      filterContainer:{
        flexDirection:'row',
        marginTop:10,
      },
      filterActiveButtonContainer:{
        backgroundColor:'#242424',
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius: 4,
        marginRight:10,
      },
      filterInActiveButtonContainer:{
        backgroundColor:'#fff',
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:4,
        borderColor:'#5a5a5a',
        borderWidth:1,
        marginRight:10,
      },
      filterActiveText:{
        color: '#fff',
      },
      filterInActiveText:{
        color:'#5a5a5a',
      },
      seeMoreContainer:{
        marginTop:10,
        padding:12,
        borderTopWidth:0.5,
        borderTopColor:'#ededed',
        alignItems:'center',
      },
      seeMoreText:{
        color:'#0e45b4',
      }
});
export default HomeSectionComponent;