import{View,Text, StyleSheet} from 'react-native'

function NumberContainer({children}){
  return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
export default NumberContainer
const styles=StyleSheet.create({
    container:{
        borderWidth:3,
        borderColor:'#FFBE98',
        padding:10,
        marginTop:20,
        borderRadius:5,

    },
    numberText:{
     color:'#FFBE98',
     fontSize:36,
     fontWeight:'bold',
     textAlign:'center'
    }
})