
import { View,StyleSheet, Alert ,Dimensions, FlatList, ScrollView,useWindowDimensions} from "react-native";
import Title from '../components/ui/Title'
import NumberContainer from '../components/Game/NumberContainer'
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Ionicons from '@expo/vector-icons/AntDesign';
import GuessLogItem from "../components/Game/GuessLogItem";
import Card from "../components/ui/Card";
 //generate random
// function generateRandomBetween(min,max, exclude){
    // let randomNumber= Math.floor(Math.random()*(max- min))+min;
    // if(randomNumber===exclude){
    //     return generateRandomBetween(min, max, exclude);
    // }
    // else{
    // return randomNumber
    //     } 
    function generateRandomBetween(min, max, exclude) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * (max - min)) + min;
        } while (randomNumber === exclude);  // Avoid recursion with a loop
      
        return randomNumber;
      }
      
  
  


function GameScreen({userNumber, gameOver}){
   
const {width, height}= useWindowDimensions()


 
let lowerBoundary=1;
let maxBoundary= 100;
const initialGuess= generateRandomBetween(1,100,userNumber)
const [currentGuess,setCurrentGuess]=useState(initialGuess);
const[ guessRound, setGuessRound]=useState([initialGuess]) 



useEffect(()=>{
     if(currentGuess===userNumber){
         gameOver(guessRound.length);
     } 
},[currentGuess,userNumber,gameOver])
useEffect(()=>{
    maxBoundary=100,
    lowerBoundary=1
},[])


function nextGuessHandler(direction){
   
    if(
        (direction==='lower' && currentGuess< userNumber) ||
        (direction==='greater' && currentGuess> userNumber)
    ){
       Alert.alert("Don't lie","You know this is wrong",[{text:'Sorry', style:'cancel'},])
       return 
    }
    if(direction==='lower'){
       maxBoundary=currentGuess;
 
    }
    if(direction==='greater'){
         lowerBoundary=currentGuess+1;
    }
    const newRandomNumber= generateRandomBetween(lowerBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRound( (prev)=> [newRandomNumber,... prev ])
    return;
}
   const gueesRoundLength= guessRound.length;
   let content= (
    <>
     <NumberContainer>{currentGuess}</NumberContainer>
       <Card>
        <Title style={styles.text2}>Higher Or Lower?</Title>
      
       <View style={styles.buttonContainer}>
        <View style={{flex:1}}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} >
          <Ionicons name="minus" color='white' size={24}/>  
        </PrimaryButton>
        </View>
        <View style={{flex:1}}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'greater') } >
          <Ionicons name="plus" color='white' size={24}/>  
          </PrimaryButton>
        </View>
           
            
       </View>
       </Card>
    </>
   )
    if(width > 500){
        content=(
            <>
      
 
             <Card>
             <View style={{flexDirection:'row', alignItems:'center'}}>
             <View style={{flex:1}}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} >
                <Ionicons name="minus" color='white' size={24}/>  
                </PrimaryButton>
                </View>
                <NumberContainer style={styles.landScapeNumber}>{currentGuess}</NumberContainer>
                <View style={{flex:1}}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'greater') } >
                <Ionicons name="plus" color='white' size={24}/>  
                </PrimaryButton>
                </View>
             </View>
             </Card>
         
            </>
        ) 
    }
    const marginTop= height<380 ? 10: 30
    return(
<>
    <View style={[styles.gameContainer, {marginTop}]}>
       <Title style={styles.instructionText}>Opponent's Guess</Title>
        {content}
      
        </View>
         <View style={{flex:1, paddingHorizontal:20}}>
      
     
         <FlatList
                data={guessRound}
                renderItem={(itemData) => (
                    <GuessLogItem guess={itemData.item} roundeNumber={gueesRoundLength - itemData.index} />
                )}
                keyExtractor={(item, index) => item + '-' + index} // Ensure a unique key by combining the value with the index
                />

          </View>
          </>
    )
}

export default GameScreen;
 

const styles=StyleSheet.create({
gameContainer:{
    padding:16,
   
    alignItems:'center'
   

},
title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#FFBE98',
    textAlign:'center',


    borderColor:'#FFBE98' ,
    padding:12
},
buttonContainer:{
    flexDirection:'row',
    padding:5,
    gap:25

},
landScapeNumber:{
    textAlign:'center',
    fontSize:25, 
      color:'white',
      paddingVertical:7,
      color:'#C96868',
      borderColor:'#C96868',
      fontFamily:"open-sans"
},



text2:{
    textAlign:'center',
     fontSize:25, 
       color:'white',
       paddingVertical:7,
       color:'#C96868',
       borderColor:'#C96868',
       fontFamily:"open-sans"

    },
  
    instructionText:{
        color:'white',
        
  
      },
})