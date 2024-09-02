import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Image,StyleSheet,ScrollView } from 'react-native';
import moment from 'moment';
import notifee from '@notifee/react-native';




const Reminder = (props: any) => {

  useEffect(() => {
    const interval = setInterval(async () => {
      await DisplayMyNotification(); // Call the alarm function at intervals
    }, 120000);

    // Return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const { newName = '', newAmount = '', type='', timeGot='',daysSet='' } = props.route.params || {};
  const formattedTime = moment(timeGot, 'HH:mm');
      
  const currentTime = new Date();
  const mhour = currentTime.getHours();
  const mint = currentTime.getMinutes();
          // Parse and format the time
 const reminderHour = formattedTime.hours();
 const reminderMint = formattedTime.minutes();

  const DisplayMyNotification=async()=>
    {

      //console.log("The Days Get is : ", {daysSet.join(', ')});
      await notifee.requestPermission()
  
      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
  
      // Display a notification
      await notifee.displayNotification({
        title: 'Medication Reminder',
        body: 'This is your Medicine Time',
        android: {
          channelId,
          //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
      });
    }

    
      const Alarm = async () => {
    
        console.log(`Current Hour : ${mhour} and minutes : ${mint}`);
        console.log(`Reminder Time Hour : ${reminderHour} and minutes : ${reminderMint}`);
      
        // Compare current time with reminder time
         if (mhour === reminderHour && mint === reminderMint) {
           await DisplayMyNotification();
        }
      };
      
    

  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={props.navigation.goBack}>
              <Image
                  source={require('../icons_fyp/icons8-back-24.png')}
                  style={{
                    width:35,
                    height:35,
                  }}
              />
        </TouchableOpacity>
          <Text style={{fontSize:25,fontWeight:'bold',color:'black',marginLeft:10}}>Medicine Reminder</Text>
        </View>

      {newName ? (
        <View style={{margin:15,backgroundColor:'#00ffff',padding:10,borderRadius:15}}>
          <Text style={{fontSize:15,color:'#00004d'}}>Medicine Name: {newName}</Text>
          <Text style={{fontSize:15,color:'#00004d'}}>Amount: {newAmount}</Text>
          <Text style={{fontSize:15,color:'#00004d'}}>Med. Type : {type}</Text>
          <Text style={{fontSize:15,color:'#00004d'}}>Set Time : {moment(timeGot, 'HH:mm').format('hh:mm A')}</Text>
          <Text style={{fontSize:15,color:'#00004d'}}>Days Setted : {daysSet.join(', ')}</Text>
        </View>
      ) : (
        <Text style={{marginTop:30, marginLeft:80}}>No medicine reminder found.</Text>
      )}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../icons_fyp/handbegger.png')} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Manage your meds</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <Text style={styles.text2}>Add your meds to be reminded on time</Text>
      </View>

      <View style={styles.imageContainer2}>
        <Image style={styles.image2} source={require('../icons_fyp/logo_Icon.png')} />
      </View>

      <View style={{ marginTop: 10, marginLeft:35,width: 300,borderRadius: 40,alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('SetReminders')} style={styles.button}>
          <Text style={styles.buttonText}>Add a med</Text>
        </TouchableOpacity>
      </View>

        <View style={{alignItems:'center',margin:15}}>
      <TouchableOpacity onPress={DisplayMyNotification}>
        <Text >Push Notification</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6E6F3',
    padding: 20,

  },
  titlehead: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  imageContainer: {
    marginTop: 120,
    alignItems:'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 500,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  text2: {
    color: '#000',
  },
  imageContainer2: {
    marginTop: 20,
  },
  image2: {
    width: 360,
    height: 100,
    borderRadius: 500,
  },

  button: {
    width: 300,
    height: 40,
    backgroundColor: '#4173A1',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Reminder;
