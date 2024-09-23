import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({roundeNumber, guess}){
     return(
        <View style={styles.listItem}>
            <Text style={styles.text}>#{roundeNumber}</Text>
            <Text style={styles.text}>Opponent's Guess: {guess}</Text>
        </View>
     )
}
export default GuessLogItem

const styles=StyleSheet.create({
    listItem:{
        backgroundColor:'#C96868',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        borderColor:'#FFBE98' ,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'blacl',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3

    },
    text:{
        fontFamily:'open-sans'
    }
})