import React, { useState } from 'react';
import { View, Text,ScrollView, StyleSheet, TouchableOpacity, Modal, FlatList, Alert,TextInput,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from './Color';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';


const days = [
  { title: 'SU', active: false },
  { title: 'M', active: false },
  { title: 'T', active: false },
  { title: 'W', active: false },
  { title: 'TH', active: false },
  { title: 'F', active: false },
  { title: 'S', active: false },
];

const medicineForms = [
  { label: 'Pill', value: 'pill' },
  { label: 'Injection', value: 'injection' },
  { label: 'Drops', value: 'drops' },
  { label: 'Powder', value: 'powder' },
  { label: 'Syrup', value: 'syrup' },
  { label: 'Capsule', value: 'capsule' },
  { label: 'Other', value: 'other' },

];

const CustomDropdown = ({ options, selectedValue, onValueChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionPress = (option) => {
    onValueChange(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.input}>{selectedValue.label}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.optionsContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionPress(item)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};



const dataArray: { name: string; amount: string; medType: string; selectedTime: string; medDays: string[]; }[]=[];

const SetReminders = (props: any) => {

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    const formattedTime = moment(time).format("HH:mm")
    
    // Store the formatted time in the state variable
    setSelectedTime(formattedTime);
    hideTimePicker();
  };

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedForm, setSelectedForm] = useState(medicineForms[0]);
  const [selectedDays, setSelectedDays] = useState([...days]);
  const [selectedTime,setSelectedTime]=useState('');

  const toggleDay = (index) => {
    const updatedDays = [...selectedDays];
    updatedDays[index].active = !updatedDays[index].active;
    setSelectedDays(updatedDays);
  };

  const saveData = async () => {
    try {
      const activeDays = selectedDays.filter(day => day.active);
      const medDays = activeDays.map(day => day.title);
  
      const obj = {
        name,
        amount,
        medType: selectedForm.label,
        selectedTime,
        medDays,
      };
  
      dataArray.push(obj);
  
      await AsyncStorage.setItem('data', JSON.stringify(dataArray));
      console.log('Saved Successfully');
      console.log(dataArray);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
  try {
    // Retrieve the stored data as a JSON string
    const storedData = await AsyncStorage.getItem('data');

    // If there's no stored data, return an empty array
    if (!storedData) {
      return [];
    }

    // Parse the JSON string into an array of objects
    const parsedData = JSON.parse(storedData);
    for(let i=0;i<parsedData.length;i++)
    {
      console.log(parsedData[i]);
      console.log('\n\n');
    }

    return parsedData;
  } catch (err) {
    console.log(err);
    return [];
  }
};

  

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#C6F6E3'}}>
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
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Add Medicines</Text>
      </View>

      <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Enter Medicine Name</Text>
      <TextInput
        value={name}
        onChangeText={(txt) => setName(txt)}
        style={{
          fontSize: 15,
          color: 'black',
          width: 350,
          height: 50,
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft:20,
          marginLeft:30,
          marginBottom:20,
          borderColor:'purple',
        }}
      />

      <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Enter Medicine Amount</Text>
      <TextInput
        value={amount}
        onChangeText={(txt) => setAmount(txt)}
        style={{
          width: 350,
          height: 50,
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 20,
          marginLeft:30,
          marginBottom:20,
          borderColor:'purple'
        }}
      />

    <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Select Medicine Type:</Text>
      <CustomDropdown
        options={medicineForms}
        selectedValue={selectedForm}
        onValueChange={setSelectedForm}
      />

      <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Select Time for take Medicines:</Text>
       <View style={{justifyContent:'center', alignItems:'center',}}>
        <TouchableOpacity style={{ 
            width:'50%',
            height:50,
            backgroundColor:'#003333',
            borderRadius:20,
            margin:10,
        }}
         title="Show Time Picker" onPress={showTimePicker}>
            <Text style={{color:'white', fontSize: 15,textAlign:'center',margin:12 }}>Set Time</Text>
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
        />
        </View>

        <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:30}}>Select days for taking medication:</Text>
      <View style={styles.daysBorder}>
        <View style={styles.dayContainer}>
          {selectedDays.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleDay(index)}
              style={[
                styles.dayItem,
                {
                  backgroundColor: item.active ? colors.heading : colors.secondaryBg,
                  borderColor: colors.purple,
                  borderWidth: 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.dayTitle,
                  { color: item.active ? colors.whiteShade : colors.gray },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

 {/*     <TouchableOpacity onPress={() => saveData()}>
        <View style={{ backgroundColor: 'black', width: 150, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 10, color: 'red' }}>Save</Text>
        </View>
              </TouchableOpacity>*/ }

<View style={{ marginLeft:130,backgroundColor: '#006666', width: 150, alignItems: 'center',marginTop:50,borderRadius:15,height:50 }}>
      <TouchableOpacity
        onPress={() => {
          saveData();
          const activeDays = selectedDays.filter(day => day.active);
          props.navigation.navigate('Reminder', { newName: name, newAmount: amount, type:selectedForm.label, timeGot: selectedTime, daysSet: activeDays.map(day => day.title ) })}
        }
          >
       
          <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 10,  color:'#ffffff' }}>Save</Text>

      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={getData}>
        <Image
          source={require('../icons_fyp/icons8-done-50.png')}
          style={{
            width:35,
            height:35
          }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#C6E6F3',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#C6E6F3',
  },
  titlehead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    marginBottom: 16,
    width: 350,
    height:50,
    paddingLeft:30,
    marginLeft:30,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#C6E6F3',
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  btnWrapper: {
    marginTop: 55,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Push content to the bottom
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionsContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8, // Add padding at the bottom to avoid covering the Cancel button
  },
  optionText: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderColor: '#ccc',
    color:'#00ffff',
    backgroundColor:'#003333'
  },
  cancelText: {
    padding: 10,
    fontSize: 18,
    color: 'red',
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15, // Adjusted marginTop
  },
  dayItem: {
    width: 40,
    height: 40,
    color:'#3366ff',
    backgroundColor:'#3366ff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTitle: {
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    padding: 10,
    color: '#0033cc',
  },
  daysBorder: {
    borderWidth: 2, // Increased borderWidth
    borderColor: 'purple', // Changed borderColor to yellow
    borderRadius: 10, // Increased borderRadius
    padding: 10, // Increased padding
    marginTop: 20, // Added marginTop for better spacing
    backgroundColor: '#C6E6F3', // Added backgroundColor
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button1: {
    width: '80%',
    marginVertical: 10, // Add vertical margin between buttons
    height: 40,
    backgroundColor: 'purple',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: '80%',
    marginVertical: 10, // Add vertical margin between buttons
    height: 40,
    backgroundColor: 'red',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SetReminders;
