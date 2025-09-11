import {View, useColorScheme, StyleSheet} from 'react-native'
import {Colors} from "../constants/Colors";
import React from 'react'

// @ts-ignore
const ThemedView = ({style, ...props}) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light;

    return (
        <View style={[{backgroundColor: theme.uiBackground} , style.card , style]}
              {...props}
        />
    )
}
export default ThemedView

const styles = StyleSheet.create({
    card : {
        borderRadius: 5,
        padding: 20,
    }
})


