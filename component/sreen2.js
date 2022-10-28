
import { useEffect, useRef, useState } from 'react';
import { Animated, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
   
export default function Sreen2() {
    const fadeAnim = useState(new Animated.Value(0))[0]
    
    function moveto(){
        
            Animated.timing(
                fadeAnim,
                {
                    toValue:1000,
                    duration:1000,
                    useNativeDriver: false,
                }).start()
    }
        

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,borderWidth:5,borderColor:'red'}}>
            <Animated.View style={{
            marginLeft:fadeAnim,
            backgroundColor:"blue",width:100,height:100}}></Animated.View>
        </View>
        <Button title='MOVE' onPress={moveto} ></Button>
    </SafeAreaView>
  );
}
