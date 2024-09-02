export const colors = {
    primary: '#8E97FD',
    white: '#ffff',
    whiteShade: '#FFECCC',
    whiteShadeBg: '#EBEAEC',
    gray: '#A1A4B2',
    bg: '#F2F3F7',
    secondaryBg: '#E5E5E5',
    darkBg: '#333242',
    lightBg: '#ECD3C2',
    heading: '#3F414E',
    facebookBg: '#7583CA',
  };


  /*<View>
        <TouchableOpacity style={{ 
            width:'50%',
            height:50,
            backgroundColor:'#4173A1',
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            marginTop:50,
            Color:'Black',
        }}
             title="Show Date Picker" onPress={showDatePicker} >
            <Text style={{ color: 'black', fontSize: 15 }}>Date</Text>
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
        />
        </View>

        <View>
        <TouchableOpacity style={{ 
            width:'50%',
            height:50,
            backgroundColor:'#4173A1',
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            marginTop:50,
            Color:'Black',
        }}
         title="Show Time Picker" onPress={showTimePicker}>
            <Text style={{ color: 'black', fontSize: 15 }}>Time</Text>
        </TouchableOpacity>
        <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="date"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
        />
        </View>

const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleDateConfirm = (date) => {
  console.warn("A date has been picked: ", date);
  hideDatePicker();
};

const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("Time has been picked: ", time);
    hideTimePicker();
  };*/