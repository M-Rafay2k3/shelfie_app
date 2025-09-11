import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
const Books = () => {
    return (
        <ThemedView safe= {true} style = {styles.container}>
            <ThemedText title={true} style = {styles.heading}>Your List of Books</ThemedText>
        </ThemedView>
    )
}
export default Books
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: 'stretch'},
    heading: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
})
