
import { View,StyleSheet, Alert ,Text, FlatList} from "react-native";
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Ionicons from '@expo/vector-icons/AntDesign';
import GuessLogItem from "../components/GuessLogItem";
 //generate random
function generateRandomBetween(min,max, exclude){
    let randomNumber= Math.floor(Math.random()*(max- min))+min;
    if(randomNumber===exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else{
    return randomNumber
        } 
}   

function GameScreen({userNumber, gameOver}){
   



 
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
    return(
<>
    <View style={styles.gameContainer}>
       <Title style={styles.instructionText}>Opponent's Guess</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
       <View style={styles.inputContainer}>
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
       </View>
      
        </View>
         <View style={{flex:1, padding:16}}>
      
         {/* {guessRound.map(data => <Text key={data}>{data}</Text>)} */}
         <FlatList data={guessRound}
         scrollEnabled={true}
          renderItem={(itemData)=> <GuessLogItem guess={itemData.item} roundeNumber={gueesRoundLength - itemData.index}/>}
          keyExtractor={(item)=> item}
         />
          </View>
          </>
    )
}

export default GameScreen;
 
const styles=StyleSheet.create({
gameContainer:{
    padding:16,
   

},
title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#FFBE98',
    textAlign:'center',
    borderWidth:1,

    borderColor:'#FFBE98' ,
    padding:12
},
buttonContainer:{
    flexDirection:'row',
    padding:5,
    gap:25

},



text2:{
    textAlign:'center',
     fontSize:25, 
       color:'white',
       paddingVertical:7,
       color:'#C96868',
       borderWidth:'none',
       fontFamily:"open-sans"

    },
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16, 
        marginTop:20,
        backgroundColor:'#FFBE98',
         marginHorizontal:16,
         borderRadius:8,
         elevation:10,
         shadowColor:'black',
         shadowOffset:{width:2,height:2},
         shadowRadius:6,
         shadowOpacity:0.50 
    },
    instructionText:{
        color:'white',
        
  
      },
})