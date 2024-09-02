import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,FlatList,ScrollView } from 'react-native';
//import axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';

const MedsInfo = (props:any) => {
  const [MedUses, SetMedUses] = useState<string[]>([]);
  const [MedSideEffects,SetMedSideEffects] = useState<string[]>([]);
  const [MedAlternatives,SetMedAlternatives] = useState<string[]>([]);
  const [ChemicalClass,SetChemicalClass]=useState("");
  const [AffectedPart,SetAffectedPart]=useState("");
  
  const [Med2bSearch,setMed2bSearch]=useState('');
  const [usesKeyword, SetUsesKeyWord]=useState("");
  const [EffectsKeyword, SetEffetcsKeyword]=useState("");
  const [substitueKeyword, SetSubstitueKeyword]=useState("");
  const [ChemicalKeyword, SetChemicalKeyword]=useState("");
  const [remidyKeyword, SetRemidyKeyword]=useState("");

  const [infoData, setInfoData] = useState<any[]>([]);
  const [isState, setIsState] = useState<any[]>([]);
  const [isSuggestion, setIsSuggestion] = useState<any[]>([]);

  async function fetchData() {
   
    fetch('http://192.168.137.48:3004/Meds/')
    .then(res=>res.json())
    .then(data=>{
      console.warn("Data Fetched Successfully");
      console.log(data);
      setInfoData(data);
      setIsState(data);
    })


/*
     axios
    .get('http://192.168.100.7:3004/Meds/')
    .then(res=>{
      console.warn(res.data);
    })*/
  }

  const _SearchText=(text:any)=>{
    let matches=[];
    if(text)
      {
        matches=isState.filter(res=>{
          const regex= new RegExp(`${text.trim()}`,'i');
          return res.name.match(regex);
        })
        setIsSuggestion(matches);
      }
    else{
      setIsSuggestion([]);
    }
  }


  function setStatesNull()
  {
      SetMedUses([]);
      SetMedSideEffects([]);
      SetMedAlternatives([]);
      SetChemicalClass("");
      SetAffectedPart("");

      SetUsesKeyWord("");
      SetSubstitueKeyword("");
      SetEffetcsKeyword("");
      SetChemicalKeyword("");
      SetRemidyKeyword("");
  }

  useEffect(() => {
    setStatesNull();
    fetchData();
  }, []);
  
  
  function getUses() {
    SetMedUses([]);
    const product = infoData.find(item => item.name === Med2bSearch);
    if (product && product.use0 !== "") {
      SetUsesKeyWord("Uses");
      SetMedUses(prevMedUses => [...prevMedUses, product.use0]);
          if (product && product.use1 !== undefined) {
            SetMedUses(prevMedUses => [...prevMedUses, product.use1]);
                if (product && product.use2 !== undefined) {
                 SetMedUses(prevMedUses => [...prevMedUses, product.use2]);
                     if (product && product.use3 !== undefined) {
                        SetMedUses(prevMedUses => [...prevMedUses, product.use3]);
                            if (product && product.use4 !== undefined) {
                              SetMedUses(prevMedUses => [...prevMedUses, product.use4]);
                            }
                      }           
                }
          }
    }
    else{
    console.log("Medicine Not Found")
    }

    console.log(MedUses);
  }
  


  function getSideEffects() {
    SetMedSideEffects([]);
    const product = infoData.find(item => item.name === Med2bSearch);
    if (product && product.sideEffect0 !== undefined) {
      SetEffetcsKeyword("Side Effects");
      SetMedSideEffects(prevMedEffects => [...prevMedEffects, product.sideEffect0]);
          if (product && product.sideEffect1 !== undefined) {
            SetMedSideEffects(prevMedEffects => [...prevMedEffects, product.sideEffect1]);
                if (product && product.sideEffect2 !== undefined) {
                 SetMedSideEffects(prevMedEffects => [...prevMedEffects, product.sideEffect2]);
                     if (product && product.sideEffect3 !== undefined) {
                        SetMedSideEffects(prevMedEffects => [...prevMedEffects, product.sideEffect3]);
                            if (product && product.sideEffect4 !== undefined) {
                              SetMedSideEffects(prevMedEffects => [...prevMedEffects, product.sideEffect4]);
                            }
                      }           
                }
          }
    }
    else{
    console.log("Medicine Not Found")
    }

    console.log("Medicine Side-Effects : ",MedSideEffects);
  }


  function getAlternateMeds() {
    SetMedAlternatives([]);
    const product = infoData.find(item => item.name === Med2bSearch);
    if (product && product.substitute0 !== undefined) {
      SetSubstitueKeyword("Alternate Medicines");
      SetMedAlternatives(prevAlternates => [...prevAlternates, product.substitute0]);
          if (product && product.substitute1 !== undefined) {
            SetMedAlternatives(prevAlternates => [...prevAlternates, product.substitute1]);
                if (product && product.substitute2 !== undefined) {
                 SetMedAlternatives(prevAlternates => [...prevAlternates, product.substitute2]);
                     if (product && product.substitute3 !== undefined) {
                        SetMedAlternatives(prevAlternates => [...prevAlternates, product.substitute3]);
                            if (product && product.substitute4 !== undefined) {
                              SetMedAlternatives(prevAlternates => [...prevAlternates, product.substitute4]);
                            }
                      }           
                }
          }
    }
    else{
    console.log("Medicine Not Found");
    }

    console.log("Medicine Alternatives : ",MedAlternatives);
  }
      


  function getChemical() {

    SetChemicalClass("");
    const product = infoData.find(item => item.name === Med2bSearch);
    if (product && product['Chemical_Class'] !== undefined) {
      SetChemicalKeyword("Chemical Class");
      if(product['Chemical_Class']==="NA")
        {
          SetChemicalClass("Will be updated Soon");
        }
        else{
          SetChemicalClass(product['Chemical_Class']);
        }

    }
    else{
    console.log("Medicine Not Found")
    }

    console.log("Chemical_Class : ", ChemicalClass);
  }



  function getDiagnosis() {

    SetAffectedPart("");
    const product = infoData.find(item => item.name === Med2bSearch);
    if (product && product['Therapeutic_Class'] !== undefined) {
      SetRemidyKeyword("Curative Class");
      SetAffectedPart(product['Therapeutic_Class']);
    }
    else{
    console.log("Medicine Not Found")
    }

    console.log("Curative Class : ", AffectedPart);
  }


  return (
    <View style={page.body}>
      <View style={page.header}>
        <TouchableOpacity onPress={props.navigation.goBack}>
          <Image
            source={require('../icons_fyp/icons8-back-24.png')}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </TouchableOpacity>
        <Text style={page.pageTitle}>Medicine Information</Text>
      </View>

  
       <Autocomplete
          autoCapitalize='none'
          autoCorrect={false}
          containerStyle={page.containerStyle}
          inputContainerStyle={page.inputContainerStyle}
          placeholder='Search Your Medicine'
          onChangeText={(text)=>{
            _SearchText(text);
            setMed2bSearch(text);
            setStatesNull();
  
          }} 
          data={isSuggestion}
          flatListProps={{
            renderItem:({item})=>
              <View>
                  <Text>{item.name}</Text>
              </View>
          }}
            />

       {/* 
             <View style={page.searchContainer}>
       <TextInput
            style={page.inputText}
            placeholder='Search for Medicine'
            value={Med2bSearch}
            onChangeText={(txt) => {
              setMed2bSearch(txt);
              setStatesNull();
            }}
          />
          <TouchableOpacity>
          <Image 
              source={require('../icons_fyp/icons8-search-24.png')}
              style={page.searchIcon}
          />
          </TouchableOpacity>

                    </View>
          */}


            <ScrollView style={{flex:1, marginBottom:100}} contentContainerStyle={{flexGrow:1}}>
          <View style={{position:'relative', justifyContent:'center', flexDirection:'column', marginLeft:30}}>
            <TouchableOpacity onPress={getUses}>
                <Text style={page.attributeBtns}>
                  Usage
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={getSideEffects}>
                <Text style={page.attributeBtns}>
                  Side-Effects
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={getAlternateMeds}>
                <Text style={page.attributeBtns}>
                    Substitutes
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={getChemical}>
                <Text style={page.attributeBtns}>
                  Chemical Class
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={getDiagnosis}>
                <Text style={page.attributeBtns}>
                  Curative Class
                </Text>
            </TouchableOpacity>
          </View>
        <View style={{position:'relative',top:10, backgroundColor:'transparent',padding:15,}}>
 
          <Text style={page.attributeHeading}>{usesKeyword}</Text>
        {MedUses.map((use, index) => (
          <Text key={index} style={page.gotAttributes}>
           &#8226; {use}
          </Text>
  ))}


          <Text style={page.attributeHeading}>{EffectsKeyword}</Text>
        {MedSideEffects.map((use, index) => (
          <Text key={index} style={page.gotAttributes}>
           &#8226; {use}
          </Text>
  ))}

          <Text style={page.attributeHeading}>{substitueKeyword}</Text>
        {MedAlternatives.map((use, index) => (
          <Text key={index} style={page.gotAttributes}>
           &#8226; {use}
          </Text>
  ))}


          <Text style={page.attributeHeading}>{ChemicalKeyword} </Text>
          <Text style={page.gotAttributes}> {ChemicalClass} </Text>

          
          <Text style={page.attributeHeading}>{remidyKeyword}</Text>
          <Text style={page.gotAttributes}> {AffectedPart} </Text>


          </View>

          </ScrollView>

    </View>
  );
}

export default MedsInfo;

const page = StyleSheet.create({
  body: {
    backgroundColor: '#C6E6F3',
    flex: 1,
  },

  header: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  pageTitle: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },


  searchContainer:{
    height:50,
    width:320,
    backgroundColor:'white',
    margin:20,
    marginLeft:25,
    borderRadius:20,
    flexDirection:'row',
    elevation:5
  },

  containerStyle:{
  

  },
  inputContainerStyle:{
    height:50,
    width:320,
    backgroundColor:'white',
    margin:20,
    marginLeft:20,
    borderRadius:10,
    flexDirection:'row',
    elevation:5
  },
  listStyle:{},

  inputText:{
    fontSize:20,
    paddingLeft:15,
    color:'black',
    width:270,
  },
  
  searchIcon:{
    top:12,
    right:-40,
    position:'absolute'
  },

  attributeBtns:{
    color:'red',
    backgroundColor:'black',
    margin:10,
    padding:10,
    borderRadius:15,
    borderColor:'white',
    marginLeft:55,
    width:200,
    textAlign:'center',
    fontSize:18,
    position:'relative'
  },

  gotAttributes:{
    marginLeft: 5,
    fontSize:20,
     color:'#000033',
  },

  attributeHeading:{
    fontSize:25,
    color:'#000066',
    backgroundColor:'transparent', 
    padding:5,
    borderRadius:5,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    margin:10

  }

});


