import {useColorScheme} from 'react-native'
import {Colors} from "../constants/Colors";
import React from 'react'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import {TextProps, StyleProp, TextStyle,View} from 'react-native'

interface ThemeTextProps extends TextProps{
    style?: StyleProp<TextStyle>,
    safe?: boolean,
}

// @ts-ignore
const ThemedView = ({style, safe = false, ...props} : ThemeTextProps) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light;

    if(!safe) return (
        <View style={[{backgroundColor: theme.background} , style]}
              {...props}/>
    )

    const insets = useSafeAreaInsets();

    return (
        <View style={[
            {backgroundColor: theme.background,
             paddingTop: insets.top,
             paddingBottom: insets.bottom,
            },
            style]}
              {...props}
        />
    )

}
export default ThemedView
