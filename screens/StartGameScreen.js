import {View, TextInput, StyleSheet,Alert, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Title from '../components/ui/Title'
import Card from '../components/ui/Card';
function StartGameScreen({onPickedNumber}) {
  const[enteredNumber,setEnteredNumber]=useState('')
  function numberInputHandler(numberInput){
    setEnteredNumber(numberInput)

  }
  function resetInputHandler(){
    setEnteredNumber('');
  }
  const confirmInputHandler=()=>{
  const chosenNumber=parseInt(enteredNumber)
  if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber >99){
   Alert.alert('Invalid Number!','Number should be a number between 1 to 99',
    [{text:'Okay', style:'destructive', onPress: resetInputHandler}]
  ); 
    return ;
  }
  onPickedNumber(chosenNumber)
 
  }
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.instructionText}>Guess My Number</Title>
    <Card>
       <Text style={{fontSize:20, fontWeight:'bold', color:'#A04747'}}>Enter Your Number</Text>
       <TextInput  maxLength={2} 
       keyboardType='number-pad' 
       autoCapitalize='none' 
       autoCorrect={false}
        style={styles.numberinput}
        onChangeText={numberInputHandler}
        value={enteredNumber}
        />
       <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
           <PrimaryButton onPress={confirmInputHandler}>Confirm </PrimaryButton>
        </View>
       
       </View>
    
    
    </Card>
    </View>
  )
}

export default StartGameScreen;

const styles= StyleSheet.create({
  rootContainer:{
       flex:1,
       paddingHorizontal:16,
       marginTop:30,
       alignItems:'center'
  },

    instructionText:{
      color:'white'

    },
    numberinput:{
    
      height:50,
      width:50,
      borderBottomColor:'#C96868' ,
      borderBottomWidth:2,
      color:'#C96868' ,
      marginVertical:8,
      fontFamily:'open-sans-bold',
       fontSize:32,
       textAlign:'center' 
     },
     buttonsContainer:{
      flexDirection:'row',
      
     },
     buttonContainer:{
      flex:1,
      marginHorizontal:4
     }
})