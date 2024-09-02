import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Articles = (props:any) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#C6E6F3'}}>
      <View style={{flexDirection:'row',marginTop:20}}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Image
              source={require('../icons_fyp/icons8-back-24.png')}
              style={{
                width:40,
                height:40
              }}  
            />
        </TouchableOpacity>
        <Text style={{fontSize:30, fontWeight:'bold',color:'black',marginLeft:70}}>Health Articles</Text>
      </View>

      <View style={{marginTop:75}}>
            <View style={{marginBottom:10}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Covid-19')} style={{flexDirection:'row', marginLeft:15,marginRight:15, backgroundColor:'#C6E6F3',borderWidth:2,borderColor:'black',padding:10,borderRadius:15}}>
                  <Image
                    source={require('../icons_fyp/download.jpg')}
                    style={{
                      width:180,
                      height:100,
                      borderRadius:15
                    }}
                  />
                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,color:'black'}}>Covid-19{'\n'}A Brief Guide</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginBottom:10}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Weight Loss')} style={{flexDirection:'row', marginLeft:15,marginRight:15, backgroundColor:'#C6E6F3',borderWidth:2,borderColor:'black',padding:10,borderRadius:15}}>
                  <Image
                    source={require('../icons_fyp/hlt3.jpg')}
                    style={{
                      width:180,
                      height:100,
                      borderRadius:15
                    }}
                  />
                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,color:'black'}}>Balanced Diet{'\n'}Weight Loss</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginBottom:10}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Breast Cancer')} style={{flexDirection:'row', marginLeft:15,marginRight:15, backgroundColor:'#C6E6F3',borderWidth:2,borderColor:'black',padding:10,borderRadius:15}}>
                  <Image
                    source={require('../icons_fyp/Image5.jpeg')}
                    style={{
                      width:180,
                      height:100,
                      borderRadius:15
                    }}
                  />
                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,color:'black'}}>Tips to Avoid{'\n'}Breast Cancer</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginBottom:10}}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Excessive Coffee Side Effects')} style={{flexDirection:'row', marginLeft:15,marginRight:15, backgroundColor:'#C6E6F3',borderWidth:2,borderColor:'black',padding:10,borderRadius:15}}>
                  <Image
                    source={require('../icons_fyp/Coffee.jpg')}
                    style={{
                      width:180,
                      height:100,
                      borderRadius:15
                    }}
                  />
                  <Text style={{fontSize:20,fontWeight:'bold',marginLeft:15,color:'black'}}>Side Effects of{'\n'}Excessive Tea</Text>
              </TouchableOpacity>
            </View>


      </View>

    </ScrollView>
  )
}

export default Articles