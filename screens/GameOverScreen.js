import { Text, View, StyleSheet, Image,ScrollView, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, onStartGame}){
    const { width, height } = useWindowDimensions();
    const [imageSize, setImageSize] = useState(300);

    useEffect(() => {
        let newSize = 300; 
        if (width < 380) {
            newSize = 280;
        }
        if (height < 400) {
            newSize = 100;
        }
        setImageSize(newSize);
    }, [width, height]);

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };


    return(
 <ScrollView style={{flex:1}}>
    <View style={styles.rootScreen}>
    <Title>Game Over</Title>
    <View style={[styles.imageContainer, imageStyle] }>
    <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
    <Text style={styles.gameOverText}>Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>
      rounds to guess the number 
      <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
    )
}
export default GameOverScreen
// const deviceWidth=Dimensions.get('window').width 

const styles=StyleSheet.create({
    rootScreen:{
        padding:26,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
       
    },
    imageContainer:{
        // width:deviceWidth <380 ? 200: 300,
        // height:deviceWidth <380 ? 200: 300,
        // borderRadius:deviceWidth <380 ? 100: 200,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        margin:20
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