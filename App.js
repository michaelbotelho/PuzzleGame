import React from 'react';
// Core Components
import { AppRegistry, Button, Text, TextInput, View, } from 'react-native';
// Style 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Appearance, SafeAreaView } from 'react-native';
// Event Handling
import { Alert } from 'react-native';


// Choose background color based on device theme *NOT WORKING
var colorScheme = '#83746E';
if (Appearance.getColorScheme() == 'light') {
  colorScheme = '#1F232C';
  // Apply to SafeAreaView and Status Bar
}
else {
  colorScheme = '#83746E';
}

const coffee = '#6f5e53';
const coffeeLite = '#947e70';
const serenity = '#1F232C';
const serenityLite = '#313746';
const sand = '#cec7c5';
const sandLite = '#ddd8d6';


export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <Text id='maintxt'>Open up App.js to start working on your app!</Text>
        <Button title='Button 1' onPress={() => Alert.alert('Button 1 pressed')}/>
        <StatusBar style={styles.statusBar} hidden='true'/>
      </View>
      <View style={styles.interactionContainer}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: serenityLite,
  },
  mainContainer: {
    flex: 2,
    backgroundColor: serenityLite,
    alignItems: 'center',
  },
  interactionContainer: {
    flex: 1,
    backgroundColor: serenity,
  },
});
