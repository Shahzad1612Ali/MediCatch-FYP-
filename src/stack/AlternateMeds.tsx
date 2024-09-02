import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

var AltMedsPrices = [
  { MedName: "Ciproxin", Price: 33, Salt: "Ciprofloxacin", Weight: "250mg" },
  { MedName: "Ciproxin", Price: 58, Salt: "Ciprofloxacin", Weight: "500mg" },
  { MedName: "Novidate", Price: 24, Salt: "Ciprofloxacin", Weight: "250mg" },
  { MedName: "Novidate", Price: 40, Salt: "Ciprofloxacin", Weight: "500mg" },
  { MedName: "Azomax", Price: 58, Salt: "Azithromycin", Weight: "250mg" },
  { MedName: "Azomax", Price: 83, Salt: "Azithromycin", Weight: "500mg" },
  { MedName: "Zetro", Price: 40, Salt: "Azithromycin", Weight: "250mg" },
  { MedName: "Zetro", Price: 77, Salt: "Azithromycin", Weight: "500mg" },
  { MedName: "Zyto", Price: 40, Salt: "Azithromycin", Weight: "250mg" },
  { MedName: "Risek", Price: 26, Salt: "Opemrazole", Weight: "20mg" },
  { MedName: "Risek", Price: 37, Salt: "Opemrazole", Weight: "40mg" },
  { MedName: "Mark", Price: 11, Salt: "Opemrazole", Weight: "20mg" },
  { MedName: "Mark", Price: 20, Salt: "Opemrazole", Weight: "40mg" },
  { MedName: "Nexum", Price: 22, Salt: "Opemrazole", Weight: "20mg" },
  { MedName: "Nexum", Price: 43, Salt: "Opemrazole", Weight: "40mg" },
  { MedName: "Omega", Price: 24, Salt: "Opemrazole", Weight: "20mg" },
  { MedName: "Omega", Price: 32, Salt: "Opemrazole", Weight: "40mg" },
  { MedName: "Rulling", Price: 16, Salt: "Opemrazole", Weight: "20mg" },
  { MedName: "Rulling", Price: 34, Salt: "Opemrazole", Weight: "40mg" },
  { MedName: "Panadol CF", Price: 12, Salt: "Paracetamol", Weight: "250" },
  { MedName: "Panadol Extend", Price: 10, Salt: "Paracetamol", Weight: "250" },
  { MedName: "Panadol Extra", Price: 5, Salt: "Paracetamol", Weight: "250" },
  { MedName: "Panadol", Price: 3, Salt: "Paracetamol", Weight: "500mg" },
  { MedName: "Pamzim", Price:22, Salt: "Paracetamol", Weight: "500mg" },
  { MedName: "Calamox DS SYP", Price: 275, Salt: "Co Amoxicalve", Weight: "90ml" },
  { MedName: "Calamox SYP", Price: 176, Salt: "Co Amoxicalve", Weight: "156.25mg" },
  { MedName: "Augmentin SYP", Price: 219, Salt: "Co Amoxicalve", Weight: "156.25mg" },
  { MedName: "Calamox", Price: 6, Salt: "Co Amoxicalve", Weight: "625mg" },
  { MedName: "Augmentin", Price: 7, Salt: "Co Amoxicalve", Weight: "625mg" },
  { MedName: "Calamox", Price: 4, Salt: "Co Amoxicalve", Weight: "375mg" },
  { MedName: "Augmentin SYP", Price: 356, Salt: "Co Amoxicalve", Weight: "90ml" },
  { MedName: "ANTEM", Price: 10, Salt: "Antemide", Weight: "5mg" },
  { "MedName": "ANTEM", Price: 15, Salt: "Antemide", Weight: "10mg" },
  { "MedName": "ANTEM PLUS", Price: 20, Salt: "Antemide", Weight: "5/10mg" },

{ MedName: "AVODART", Price: 25, Salt: "Dutasteride", Weight: "0.5mg" },
  { MedName: "DUOFIL ", Price: 30, Salt: "Dutasteride", Weight: "0.5mg" },
  { MedName: "DUTAGEN ", Price: 22, Salt: "Dutasteride", Weight: "0.5mg" },
  { MedName: "DUSTERIDE-MAX]", Price: 28, Salt: "Dutasteride", Weight: "0.5mg" },
  { MedName: "DUOVENT ", Price: 35, Salt: "Dutasteride", Weight: "0.5mg" },
  { MedName: "DUTALIX ", Price: 26, Salt: "Dutasteride", Weight: "0.5mg" },
  { MedName: "DUTAPRO ", Price: 32, Salt: "Dutasteride", Weight: "0.5mg" },

{ MedName: "AXESOM ", Price: 15, Salt: "Axesom", Weight: "40mg" },
  { MedName: "AXEPLIX ", Price: 20, Salt: "Axesom", Weight: "40mg" },
  { MedName: "AXETOR ", Price: 18, Salt: "Axesom", Weight: "40mg" },
  { MedName: "AXELOS ", Price: 22, Salt: "Axesom", Weight: "40mg" },
  { MedName: "AXEPAN ", Price: 25, Salt: "Axesom", Weight: "40mg" },
  { MedName: "AXEPRIL ", Price: 30, Salt: "Axesom", Weight: "40mg" },
  { MedName: "AXETAL ", Price: 28, Salt: "Axesom", Weight: "40mg" },

{ MedName: "AXID NEO ", Price: 18, Salt: "Axid Neo", Weight: "20mg" },
  { MedName: "AXIDEX ", Price: 22, Salt: "Axid Neo", Weight: "20mg" },
  { MedName: "AXINORM ", Price: 20, Salt: "Axid Neo", Weight: "20mg" },
  { MedName: "AXIRELIEF ", Price: 25, Salt: "Axid Neo", Weight: "20mg" },
  { MedName: "AXICARE ", Price: 28, Salt: "Axid Neo", Weight: "20mg" },
  { MedName: "AXIZOLE ", Price: 30, Salt: "Axid Neo", Weight: "20mg" },
  { MedName: "AXIREX ", Price: 26, Salt: "Axid Neo", Weight: "20mg" },

{ MedName: "AZILLA ", Price: 20, Salt: "Azithromycin", Weight: "500mg" },
  { MedName: "AZIMAX ", Price: 25, Salt: "Azithromycin", Weight: "200mg" },
  { MedName: "AZIWIN ", Price: 22, Salt: "Azithromycin", Weight: "250mg" },
  { MedName: "AZICURE ", Price: 30, Salt: "Azithromycin", Weight: "500mg" },
  { MedName: "AZILIFE ", Price: 28, Salt: "Azithromycin", Weight: "200mg" },
  { MedName: "AZITROX ", Price: 32, Salt: "Azithromycin", Weight: "500mg" },
  { MedName: "AZIFAST ", Price: 26, Salt: "Azithromycin", Weight: "500mg" },

{ MedName: "BENZIM ", Price: 15, Salt: "Benzim", Weight: "20mg" },
  { MedName: "BENZOCURE ", Price: 18, Salt: "Benzim", Weight: "20mg" },
  { MedName: "BENZOSAFE", Price: 20, Salt: "Benzim", Weight: "40mg" },
  { MedName: "BENZIPRO ", Price: 22, Salt: "Benzim", Weight: "20mg" },
  { MedName: "BENZITOL ", Price: 25, Salt: "Benzim", Weight: "100mg" },
  { MedName: "BENZORAL ", Price: 28, Salt: "Benzim", Weight: "20mg" },
  { MedName: "BENZIFAST ", Price: 30, Salt: "Benzim", Weight: "40mg" },












];

const AlternateMeds = (props: any) => {

  const [Med2bSearch, setMed2bSearch] = useState('');
  const [MedWeight, setMedWeight] = useState('');
  const [screenSalt,setscreenSalt]=useState('');
  const [medicinesWithSameSalt, setMedicinesWithSameSalt] = useState([]);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("DATA", JSON.stringify(AltMedsPrices));
      console.log('Data Saved');
      console.log('\nMedicine : ', Med2bSearch);
      console.log('Med Weight : ', MedWeight)
    }
    catch (e) {
      console.error('Error saving data : ', e);
    }
  }

  const getData = async () => {
    try {
        saveData();
      var nameGot = "";
      let catchData = await AsyncStorage.getItem("DATA");
      let data_Got = JSON.parse(catchData);
      for (var i = 0; i < data_Got.length; i++) {
        if (data_Got[i].MedName === Med2bSearch || data_Got[i].Salt === Med2bSearch) {
          nameGot = data_Got[i].Salt;
          setscreenSalt(nameGot);
          console.log("\n\n**************************\n\n")
          console.log("Salt : ", nameGot);
          console.log("\n\n")
          break;
        }
      }

      const medicinesWithSameSalt = data_Got.filter((medicine) => medicine.Salt === nameGot);
      setMedicinesWithSameSalt(medicinesWithSameSalt);

    }
    catch (e) {
      console.error('Error Getting data : ', e)
    }
  }

  return (
    <View style={{ backgroundColor: '#C6E6F3', flex: 1 }}>
      <View style={{ margin: 10, flexDirection: 'row' }}>
        <TouchableOpacity onPress={props.navigation.goBack}>
          <Image
            source={require('../icons_fyp/icons8-back-24.png')}
            style={{
              width: 45,
              height: 45,
              tintColor: 'black'
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Alternate Medicines</Text>
      </View>

      <View style={page.searchContainer}>
        <TextInput
          style={page.inputText}
          placeholder='Enter Medicine/Salt'
          value={Med2bSearch}
          onChangeText={(txt) => setMed2bSearch(txt)}
        />
        <TouchableOpacity onPress={getData}>
          <Image
            source={require('../icons_fyp/icons8-search-24.png')}
            style={page.searchIcon}
          />
        </TouchableOpacity>

      </View>


      <TouchableOpacity style={{ alignItems: 'center' }} onPress={getData}>
        <Text style={page.searchName}>Search</Text>
      </TouchableOpacity>

<View>
  <Text style={{fontSize:25,fontWeight:'bold',margin:10}}>Salt Name : {screenSalt} {'\t'}</Text>
</View>
<ScrollView>
      <View>
        {medicinesWithSameSalt.map((medicine, index) => (

          <Text key={index} style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>
            {medicine.MedName}{'\t\t'}{medicine.Weight}{'\t\t'}{medicine.Price}Rs
            </Text>
          ))}
        </View>
</ScrollView>


  
      </View>
    )
  }
  
  const page = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      elevation:10
    },
  
    inputText: {
      fontSize: 20,
      paddingLeft: 15,
      color: 'black',
      flex: 1,
    },
  
    searchIcon: {
      marginRight: 15,
    },
  
    searchName: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 15,
      color:'white',
      backgroundColor:'#290066',
      padding:10,
      width:120,
      textAlign:'center',
      borderRadius:15,
      marginBottom:30
    },
  });
  
  export default AlternateMeds;
  