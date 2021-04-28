import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 5 Screens!//
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={LoginScreen}/>
        <Stack.Screen name="Quiz" component={HomeScreen}/>
        <Stack.Screen name="Home" component={QuizScreen}/>
        <Stack.Screen name="Quiz" component={ResultsScreen}/>
        <Stack.Screen name="AboutMe" component = {AboutMeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({navigation}){
  // User just enters their name here lol. Use the drawer example for this.
}

function HomeScreen({navigation}){
  //something goes here I need to figure out
  let renderButton = ({quiz}) => (<Button style = {styles.button} title={quiz.name}
  onPress={() => navigation.push('Details', {quiz: quiz, })}></Button>)
}

function QuizScreen({navigation}){
  // The main meat, puts out the questions and junk
}

function ResultsScreen({navigation}){
  // Shows results of Quiz w/ usestate
}

function AboutMeScreen({navigation}){
  // <AboutMe/> goes in here.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
