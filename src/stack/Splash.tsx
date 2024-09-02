import { View, Text, Image} from 'react-native'
import React, { useEffect } from 'react'

const Splash = ( props:any ) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Parent');
        }, 1000)
    },[])

    return (
        <View style={{    backgroundColor: '#C6E6F3',
        flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Image
                source={require('../icons_fyp/splash.png')}
                style={{
                    width:400,
                    height:400
                }}
            />
        </View>
    )
}

export default Splash;