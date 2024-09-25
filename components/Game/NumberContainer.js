import{View,Text, StyleSheet, Dimensions} from 'react-native'

function NumberContainer({children, style}){
  
  return(
    <View style={[styles.container, style]}>
        <Text style={[styles.numberText, style]}>{children}</Text>
    </View>
  )
}
const deviceWidth= Dimensions.get('window').width
export default NumberContainer
const styles=StyleSheet.create({
    container:{
        borderWidth:3,
        borderColor:'#FFBE98',
        padding:deviceWidth <380 ? 12: 24,
        margin:deviceWidth <380 ? 12: 24,
        borderRadius:5,

    },
    numberText:{
     color:'#FFBE98',
     fontSize:deviceWidth <380 ? 32: 36,
     fontWeight:'bold',
     textAlign:'center'
    }
})