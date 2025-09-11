import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import React from 'react'
import {Stack} from "expo-router";
import {Colors} from "../constants/Colors";
import {StatusBar} from "expo-status-bar";

const _Layout = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light;

    return (
        <>
            <StatusBar style="auto"/>
          <Stack screenOptions = {{
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: theme.navBackground},
              headerTintColor: theme.title,
          }}>
              <Stack.Screen name='index' options={{title:'Home', }} />
              <Stack.Screen name= '(auth)' options={{headerShown: false, }}/>
              <Stack.Screen name= '(dashboard)' options={{headerShown: false, }}/>
          </Stack>
            </>
    )
}
export default _Layout
const styles = StyleSheet.create({})
