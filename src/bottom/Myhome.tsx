import React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, TextInput } from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import { useNavigation } from '@react-navigation/native';

 
const MyHome = (props:any) => {
    const MyUseNavigation=useNavigation();
  const images=[
    require('../icons_fyp/Image1.jpg'),
    require('../icons_fyp/Image2.jpg'),
    require('../icons_fyp/Image3.jpg'),
    require('../icons_fyp/Image4.jpg'),
    require('../icons_fyp/Image5.jpeg'),
    require('../icons_fyp/Image6.jpg'),
  ]


  return (
    <View style={styles.body}>
      <View style={styles.menubutton}>
        <TouchableOpacity  onPress={() => MyUseNavigation.openDrawer()}>
          <Image
            source={require('../icons_fyp/icons8-menu-24.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25
            }}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome</Text>

        </View>
      </View>

      <View style={styles.Articles}>
        <Text style={styles.HealthText}>Health Tips</Text>
      </View>
      
      <View style={styles.Slider}>
          <SliderBox 
            images={images} 
            
            sliderBoxHeight={200}
            sliderBoxWidth={200}
            dotColor="red" 
            inactiveDotColor="blue"
            autoplay={true}
            autoplayInterval={3000}
            circleLoop={true}
            borderRadius={15}
            />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Articles')}>
          <Text style={styles.buttonText}>View All Articles</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
          <View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Covid-19')}>
            <Image
                source={
                require('../icons_fyp/Vaccine_Covid.jpg')}
                style={styles.tips}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.navigate('Weight Loss')}>            
              <Image
              source={
              require('../icons_fyp/Weight_Loss.png')}
              style={styles.tips}
              />
            </TouchableOpacity>

          </View>
          <View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Breast Cancer')}>            
              <Image
              source={require('../icons_fyp/Cancer.png')}
              style={styles.cancer}
              />
            </TouchableOpacity>

          </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#C6E6F3',
    flex: 1,
  },

  menubutton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    top:15,
    resizeMode:'cover',
  },

  textContainer: {
    marginLeft: 10,
  },

  welcome: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },

  username: {
    fontSize: 18,
    color: '#66A4E5',
  },


  Articles:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:10
  },

  HealthText:{
    fontSize:25, 
    fontWeight:'bold',
     color:'black', 
     marginTop:30,
     marginLeft:15
    },

  button: {
    backgroundColor: 'transparent',
    marginLeft:15,
    marginTop:20,
    marginRight:15
  },

  buttonText: {
    color: '#66A4E5',
    fontSize: 20,
  },

  Slider:{
    marginLeft:10,
    marginRight:10,
  },

  logo: {
    marginTop:50,
    width: 80,
    height:80,
  }, 

  tips:{
    margin:8,
    width: 190,
    height:130,
    borderRadius:15
  },
  
  cancer:{
    marginTop:8,
      width:200,
      height:275,
      borderRadius:15
    

  },
  Navbar: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between', // Adjust as needed
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 15, // Adjust horizontal padding as needed
    marginLeft:20,
    marginBottom:20
  },
  

});



export default MyHome;