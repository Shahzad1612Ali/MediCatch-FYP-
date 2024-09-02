import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image, View, Button, TouchableOpacity, TextInput, PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import {Marker} from 'react-native-maps';

const Locator = () => {
  const navigation = useNavigation();
  const [locationPermission, setLocationPermission] = useState(false);
  const [curLatitude,setCurLatitude]=useState(0);
  const [curLongitude,setCurLongitude]=useState(0);
  const [origin, setOrigin]=useState(null);
  const [destination,setDestination]=useState(null);
  const GOOGLE_MAPS_APIKEY="AIzaSyBC4MhfGWYyIdXxlnMaeVIbEGWHE_h5RXU";

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool MediCatch App Location Permission',
          message: 'Cool MediCatch App needs access to your Location so you can take locate your place',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        setLocationPermission(true);

      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  const getLocation=()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCurLatitude(position.coords.latitude);
        setCurLongitude(position.coords.longitude);
      //  setOrigin({latitude:curLatitude, longitude:curLongitude});
        //setDestination({latitude:31.479176221774683, longitude:74.266173424214});
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }


  return (
    <View style={page.body}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Image
            source={require('../icons_fyp/icons8-back-24.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
        <Text style={page.titleText}>Pharmacy Locator</Text>
      </View>
      <View style={page.searchContainer}>
        <TextInput
          style={page.inputText}
          placeholder='Search for Medicine'
        />
        <Image
          source={require('../icons_fyp/icons8-search-24.png')}
          style={page.searchIcon}
        />
      </View>
      <View style={{ marginTop: 5 }}>
      <MapView
  style={{ width: '100%', height: '86%', borderRadius: 10 }}
  initialRegion={{
    latitude: 31.58030661383284, 
    longitude:74.35692480887384,
    latitudeDelta: 0.0422,
    longitudeDelta: 0.0421,
  }}
>

      <Marker coordinate={{latitude: curLatitude, longitude: curLongitude}}/>
  </MapView>
     
          <TouchableOpacity onPress={getLocation} style={{marginBottom:20, position:'absolute',bottom:130, right:20,backgroundColor:'yellow'}}>
          <Image
                source={require('../icons_fyp/icons8-my-location-50.png')}
                style={{
                  width: 30,
                  height: 30
  
                }}
              />
          </TouchableOpacity>
        
      </View>
     
    </View>
  );
}

export default Locator;

const page = StyleSheet.create({
  body: {
    backgroundColor: '#C6E6F3',
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  searchContainer:{
    height:50,
    width:350,
    backgroundColor:'white',
    margin:10,
    marginLeft:28,
    borderRadius:20,
    flexDirection:'row',
    elevation:5
  },

  inputText:{
    fontSize:20,
    paddingLeft:15,
    color:'black',
    width:300,
  },
  
  searchIcon:{
    top:12,
    right:10,
    position:'absolute'
  },
});
