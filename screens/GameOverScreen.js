import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, onStartGame}){
    return(
    <View style={styles.rootScreen}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer }>
    <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
    <Text style={styles.gameOverText}>Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>
      rounds to guess the number 
      <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
    </View>
    )
}
export default GameOverScreen
const styles=StyleSheet.create({
    rootScreen:{
        padding:26,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
       
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:200,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        margin:36
    },
    image:{
        height:'100%',
        width:'100%'
    },
    gameOverText:{
        
        color:'#4385F4',
        textAlign:'center',
        fontFamily:'open-sans',
        fontSize:20,
        marginVertical:15
    
    },
    highlight:{
        fontFamily:'open-sans-bold'
    }
})