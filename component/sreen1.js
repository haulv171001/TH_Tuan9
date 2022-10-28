import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
const FadeInView = (props) =>{
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {
                toValue:1,
                duration:20000,
                useNativeDriver: true,
            }
        ).start()
    },[fadeAnim])
    return(
        <Animated.View
            style={{
                ...props.style,
                opacity:fadeAnim
            }}
        >
            {props.children}
        </Animated.View>
    )
}
export default function Sreen1() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10,fontWeight:"bold"}}>Welcome Animated React Native</Text>
      </FadeInView>
    </View>
  );
}
