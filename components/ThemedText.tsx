import {Text, TextProps, useColorScheme} from 'react-native'
import { Colors } from '../constants/Colors'
import { StyleProp, TextStyle } from 'react-native'

interface ThemeTextProps extends TextProps{
    style?: StyleProp<TextStyle>,
    title?: boolean,
}

const ThemedText = ({ style, title = false, ...props } : ThemeTextProps) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light

    const textColor = title ? theme.title : theme.text

    return (
        <Text
            style={[{ color: textColor }, style]}
            {...props}
        />
    )
}

export default ThemedText